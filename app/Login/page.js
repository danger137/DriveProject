"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Login successful!");
        console.log(data);
  
        // Local storage me username aur role store karein
        localStorage.setItem("username", data.name);
        localStorage.setItem("role", data.role);
  
        // Role ko localStorage se get karke redirect karein
        const userRole = localStorage.getItem("role");
  
        if (userRole === "user") {
          router.push("/videos");
        } else if (userRole === "admin") {
          router.push("/BlogAd");
        } else {
          setMessage("Unauthorized role.");
        }
      } else {
        setMessage(data.error || "Login failed.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };
  
  

  return (
<div>
<div
    className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
    style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
  >
    <div className="relative text-center mt-24 sm:mt-28 md:mt-20 lg:mt-24 px-4">
      <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
      LOGIN
      </h1>
    
    </div>
  </div>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
 
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>
    </div>
</div>
  );
}
