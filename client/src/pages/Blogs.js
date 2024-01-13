import React, { useState, useEffect } from "react";
import axios from "axios";
import BCard from "../components/BCard";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
 const [blogs, setBlogs] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const navigate = useNavigate();

 const getAllBlogs = async () => {
   try {
     const { data } = await axios.get("/api/v1/blog/all-blog");
     if (data?.success) {
       console.log(data);
       setBlogs(data?.blogs);
     }
   } catch (error) {
     console.log(error);
   }
 };

 const filteredBlogs = blogs.filter((blog) =>
   blog.title.toLowerCase().includes(searchTerm.toLowerCase())
 );

 useEffect(() => {
   getAllBlogs();
 }, []);

 const handleCard = (id) => {
   navigate(`/blog/${id}`);
 };

 const containerStyle = {
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
   gap: '10px',
   padding: '10px',
  };

 return (
   <div>
     <input
       type="text"
       placeholder="Search..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
     />
     <div style={containerStyle}>
       {filteredBlogs &&
         filteredBlogs.map((blog) => (
           <Link style={{ textDecoration: "none" }} to={`/blog/${blog._id}`}>
             <BCard
               onClick={() => handleCard(blog._id)}
               id={blog._id}
               isUser={localStorage.getItem("userId") === blog.user._id}
               title={blog.title}
               description={blog.description}
               image={blog.image}
             />
           </Link>
         ))}
     </div>
   </div>
 );
};

export default Blogs;
