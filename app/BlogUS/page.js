"use client";
import { useEffect, useState } from 'react';
import "./us.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post');
      const data = await res.json();
      setPosts(data.users);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/fmf_5957-1-scaled.jpg')" }}
>
  {/* Dark Overlay as a full-width div */}
  <div className="w-full h-full bg-black/20 flex justify-center items-center px-4">
    <h1 className="font-semibold md:font-bold mt-28 text-2xl md:text-4xl lg:text-6xl text-white">
  BLOG
    </h1>
  </div>
</div>
    
      {posts.map(post => (
        <div className="post-card">
    <div className='flex justify-center' >
    <img 
            src={post.picture} 
            alt={post.title} 
            style={{ width: '80%', maxWidth: '500px', height: 'auto' }} 
          />
    </div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date">{new Date(post.date).toLocaleDateString()}</p> {/* Display date */}
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
