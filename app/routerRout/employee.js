const { employeeData, listData, singleData, upData, deleteData } = require('../controller/controller');

const router = require('express').Router();
router.post('/create/employee',employeeData);
router.get('/employee/get',listData);
router.get('/data/:regNo',singleData);
router.put('/update/employee/:id',upData)
router.delete('/delete/employee/:id',deleteData)
module.exports = router;