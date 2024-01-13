const express = require('express')
const {addRole, deleteRole} = require('../controller/roleController')

const router = express.Router()

router.post('/add-role',addRole);

router.post('/delete-role' , deleteRole);

module.exports = router;