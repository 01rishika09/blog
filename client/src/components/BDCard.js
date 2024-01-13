import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BDCard  = ({user, blog}) => {
  return (
    <Card sx={{ width: "60%" , height: "60%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={blog.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BDCard;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const BDCard = ({user, blog}) => {
//  const descriptionStyle = {
//  display: '-webkit-box',
//  WebkitLineClamp: 2,
//  WebkitBoxOrient: 'vertical',
//  overflow: 'hidden',
//  };

//  return (
//   <Card sx={{ maxWidth: 345 }}>
//     <CardActionArea>
//       <CardMedia
//         component="img"
//         height="140"
//         image={blog.image}
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {blog.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" style={descriptionStyle}>
//           {blog.description}
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
//  );
// };

// export default BDCard;


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const BDCard = ({user, blog}) => {
//  const truncateDescription = (description) => {
//   const words = description.split(' ');
//   if (words.length <= 20) {
//     return description;
//   } else {
//     return words.slice(0, 20).join(' ') + '...';
//   }
//  };

//  return (
//  <Card sx={{ maxWidth: 345 }}>
//    <CardActionArea>
//      <CardMedia
//        component="img"
//        height="140"
//        image={blog.image}
//        alt="green iguana"
//      />
//      <CardContent>
//        <Typography gutterBottom variant="h5" component="div">
//          {blog.title}
//        </Typography>
//        <Typography variant="body2" color="text.secondary">
//          {truncateDescription(blog.description)}
//        </Typography>
//      </CardContent>
//    </CardActionArea>
//  </Card>
//  );
// };

// export default BDCard;
