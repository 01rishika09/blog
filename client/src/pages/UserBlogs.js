import React, { useState, useEffect } from "react";
import BCard from "../components/BCard";
import axios from "axios";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))
      ) : (
        <h1>You haven't Created</h1>
      )}
    </div>
  );
};

export default UserBlogs;
