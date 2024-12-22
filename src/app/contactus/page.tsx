'use client';
import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle form submission (e.g., send the email and message)
    console.log("Email:", email);
    console.log("Message:", message);
    // You can add your logic to send the data here
  };

  return (
    <div className="h-screen">
      <div className="w-full relative h-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
 
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
          </p>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />

          {/* Email and Message Input Section */}
          <div className="mt-6 w-full">
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              />
            </div>
            <div className="mb-4 w-full">
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={4} // Corrected to use number without quotes
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 border px-4 py-1 rounded-lg border-gray-500 text-gray-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;




