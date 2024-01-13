import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BDCard from '../components/BDCard';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
 const [CBlogs, setCBlogs] = useState();
 const {id} = useParams();
 const fetchBlog = async () => {
    const { data } = await axios.get(`/api/v1/blog/get-one-blog/${id}`);
    setCBlogs(data.blog);
  };

 useEffect(() => {

   fetchBlog();
 }, []);


 const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
   };
   
   return (
    <div style={containerStyle}>
     { CBlogs && <BDCard
            user={CBlogs.user}
            blog={CBlogs}/>}
    </div>
   );
   
};

export default BlogPage;
