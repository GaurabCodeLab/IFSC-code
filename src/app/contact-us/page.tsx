"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone, LinkedinIcon } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        setEmailError("email is required");
      } else if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
    if (name === "name") {
      if (value.length < 2) {
        setNameError("name must be at least 2 characters long");
      } else if (!value.trim()) {
        setNameError("name is required");
      } else {
        setNameError("");
      }
    }
    if (name === "subject") {
      if (value === "") {
        setSubjectError("select a subject");
      } else {
        setSubjectError("");
      }
    }
    if (name === "message") {
      if (value.trim() === "") {
        setMessageError("message is required");
      } else {
        setMessageError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      setNameError("name is required");
    } else if (formData.name.length < 2) {
      setNameError("name must be at least 2 characters long");
    } else {
      setNameError("");
    }
    if (!formData.email) {
      setEmailError("email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    if (!formData.subject) {
      setSubjectError("select a subject");
    } else {
      setSubjectError("");
    }
    if (!formData.message.trim()) {
      setMessageError("message is required");
    } else {
      setMessageError("");
    }
    if (
      !nameError &&
      !emailError &&
      !subjectError &&
      !messageError &&
      formData.name &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.subject &&
      formData.message.trim()
    ) {
      setIsSubmitting(true);
      setSubmitMessage("");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitMessage(
            "Thank you for your message. We'll get back to you soon!"
          );
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setSubmitMessage(
            `Error: ${
              data.message || "Something went wrong. Please try again."
            }`
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about banking codes, found an issue with our data, or
            want to suggest improvements? We'd love to hear from you. Fill out
            the form and our team will respond as soon as possible.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-3 text-gray-600 self-center" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">kumargaurab56@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-3 text-gray-600 self-center" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">Hyderabad</p>
              </div>
            </div>

            <div className="flex items-start">
              <LinkedinIcon className="w-5 h-5 mt-1 mr-3 text-gray-600 self-center" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a
                  className="text-gray-600"
                  href="https://www.linkedin.com/in/gaurabfrontendmagic/"
                >
                  linkedin.com/in/gaurabfrontendmagic
                </a>
              </div>
            </div>

            {/* <div className="flex items-start">
              <Phone className="w-5 h-5 mt-1 mr-3 text-gray-600" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">[Your Contact Number]</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-1">{nameError}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                <option value="Data Correction">Data Correction</option>
                <option value="Feature Request">Feature Request</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Business Proposal">Business Proposal</option>
                <option value="Other">Other</option>
              </select>
              {subjectError && (
                <p className="text-red-500 text-sm mt-1">{subjectError}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm mt-1">{messageError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-blue-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
