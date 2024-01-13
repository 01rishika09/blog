import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import DehazeIcon from "@mui/icons-material/Dehaze";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BCard({ title, description, image, id, isUser }) {
 const navigate = useNavigate();
 const handleEdit = () => {
   navigate(`/blog-details/${id}`);
 };

 const handleDelete = async () => {
   try {
     const {data} = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
     if(data?.success){
       alert('Blog Deleted')
       navigate('/api/v1/blog/delete-blog')
       // window.location.reload();
     }

   } catch (error) {
     console.log(error);
   }
 };
 
 const descriptionStyle = {
   display: '-webkit-box',
   WebkitLineClamp: 2,
   WebkitBoxOrient: 'vertical',
   overflow: 'hidden',
 };

 return (
   <Card
     sx={{
       width: "60%",
       margin: "auto",
       boxShadow: "6px 6px 11px #ccc",
       paddingTop: "0",
       marginTop: "6%",
       marginLeft: "3%",
       marginRight: "3%",
     }}
   >
     {isUser && (
       <Box display={"flex"}>
         <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
           <DehazeIcon />
         </IconButton>
         <IconButton onClick= {handleDelete}>
           <DeleteIcon />
         </IconButton>
       </Box>
     )}
     <CardOverflow>
       <AspectRatio ratio="2">
         <img
           src={image}
           srcSet={`${image}?auto=format&fit=crop&w=318&dpr=2 2x`}
           loading="lazy"
           alt=""
         />
       </AspectRatio>
     </CardOverflow>
     <CardContent>
       <Typography level="title-md">{title}</Typography>
       <Typography level="body-sm" style={descriptionStyle}>{description}</Typography>
     </CardContent>
     <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
       <Divider inset="context" />
     </CardOverflow>
   </Card>
 );
}
