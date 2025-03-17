"use client";
import { useState, useEffect } from 'react';
import "./ads.css";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [picture, setPicture] = useState(null);
  const [date, setDate] = useState('');
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  let router = useRouter();

  // Get userName from localStorage
  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
      console.log("User Name:", storedUserName);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('picture', picture);
    formData.append('date', date);

    const response = await fetch('/api/post', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Reset form after successful upload
      setTitle('');
      setContent('');
      setPicture(null);
      setDate('');
      toast.success("Done");
    } else {
      console.error('Failed to create post');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setUser(null);
        router.push("/Login");
      } else {
        console.error("Failed to logout from the server");
      }
    } catch (error) {
      console.error("Error logging out:", error);
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
            BLOG POST
          </h1>
          <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 text-white">
          Welcome {userName}
          </h1>
        </div>
      </div>
      
      <div style={{ background: "#1f272b", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

        <div>
          <div className="admin-panel">
            <h1 className="title">Admin Panel</h1>
            <p className="text-white">Welcome, {userName || "Guest"}!</p>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="input"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                required
                className="textarea"
              />
              <input
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
                required
                className="file-input"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="date-input"
              />
              <button type="submit" className="submit-button mt-5 form-button">Add Post</button>
            </form>
          </div>
          <div className="flex mt-7 justify-center">
  <button
    onClick={() => {
      handleLogout();
      setIsOpen(false);
    }}
    className="py-2 px-40 text-white bg-red-500 hover:bg-red-700 rounded-lg transition"
  >
    Logout
  </button>
</div>
          <div className="flex mt-7 justify-center">
  <button
    onClick={() => {
    router.push("/videos")
    }}
    className="py-2 px-40 text-white bg-red-500 hover:bg-red-700 rounded-lg transition"
  >
    Videos
  </button>
</div>


        </div>
      </div>
    </div>
  );
}
