const express = require('express');
const userController = require('../Controllers/userControler'); // Make sure this matches the actual file name
const studentDetails=require('../Controllers/userDetails')
const getStudents=require('../Controllers/userDetails')
const getContact=require('../Controllers/userControler')
const SoftwareEnq=require('../Controllers/softControler')
const getSoftEnq=require('../Controllers/softControler')
const router = express.Router();




router.post('/contactUs', userController.contactDetails); 
router.post('/students', studentDetails.studentDetails);
router.get('/getContact', getContact.getStudentContact);
router.get('/getDetails', getStudents.getDetails);
router.post('/softEnq',SoftwareEnq.softwareEnquiries)
router.get('/getSoftEnq',getSoftEnq.getSoftEnq );



 







module.exports = router;
