const express = require('express');
const router = express.Router(); 

// importuje fajl kontrolera za funkciju
const postController = require('../Controllers/PostController');

// koristi 
router.get('/', postController.baseRoute);

// kreira
router.post('/create', postController.createPost);

// cita sve
router.get('/getPosts', postController.getPosts);

// cita jedan
router.get('/getPost/:id', postController.getSinglePost);

// azurira
router.put('/post/:id/update', postController.updatePost);

// brise
router.delete('/delete/:id', postController.deletePost);

module.exports = router;