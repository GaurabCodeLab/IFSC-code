import { useState } from "react";
import CustomerForm from "./CustomerForm";

export default function CustomerList({ customers, onUpdate, onDelete }) {
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleCancelEdit = () => {
    setEditingCustomer(null);
  };

  const handleUpdate = (updatedCustomer) => {
    onUpdate(updatedCustomer);
    setEditingCustomer(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Visit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(customer.lastVisit).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEdit(customer)}
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(customer._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCustomer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <CustomerForm
              customer={editingCustomer}
              onSubmit={handleUpdate}
              onCancel={handleCancelEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
