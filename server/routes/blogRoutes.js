const express = require('express');
const { getAllBlogsController,createBlogController,updateBlogController,getBlogByIdController,deleteBlogController,getOneBlogController} = require('../controller/blogController');
const { middleware } = require('../middlewares/authUser');

const router = express.Router()



router.get('/all-blog',middleware, getAllBlogsController)

router.post('/create-blog',middleware, createBlogController)

router.put('/update-blog/:id',middleware, updateBlogController)

router.get('/get-blog/:id',middleware, getBlogByIdController)

router.get('/get-one-blog/:id',middleware, getOneBlogController)

router.delete('/delete-blog/:id', middleware, deleteBlogController)

// router.get('/search-blog', middleware, searchBlogController);



module.exports = router;


