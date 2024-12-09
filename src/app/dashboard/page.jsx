"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomerList from "../../components/CustomerList";
import CustomerForm from "../../components/CustomerForm";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [isAddingCustomer, setIsAddingCustomer] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    fetchCustomers();
  }, [searchName, searchDate]);

  const fetchCustomers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/dashboard");
      return;
    }

    let url = "/api/customers";
    if (searchName || searchDate) {
      url += `?name=${searchName}&date=${searchDate}`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setCustomers(data);
    } else {
      console.error("Failed to fetch customers");
    }
  };

  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    setIsAddingCustomer(false);
  };

  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map((c) =>
        c._id === updatedCustomer._id ? updatedCustomer : c
      )
    );
  };

  const handleDeleteCustomer = async (customerId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/customers/${customerId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      setCustomers(customers.filter((c) => c._id !== customerId));
    } else {
      console.error("Failed to delete customer");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-800">
                  Hair Fixing Business
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">
                {user.username} ({user.role})
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Management
          </h2>

          <div className="mb-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search by name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
            <button
              onClick={() => setIsAddingCustomer(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Customer
            </button>
          </div>

          {isAddingCustomer ? (
            <CustomerForm
              onSubmit={handleAddCustomer}
              onCancel={() => setIsAddingCustomer(false)}
            />
          ) : (
            <CustomerList
              customers={customers}
              onUpdate={handleUpdateCustomer}
              onDelete={handleDeleteCustomer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
