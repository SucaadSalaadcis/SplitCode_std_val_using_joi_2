const express = require("express");

const student = require("../Controller/studentController")

const router = express.Router();

router.get("/get/student",student.GetStudent);
router.post("/create/student",student.createStudent);
router.put("/update/student/:id",student.updateStudent);
router.delete("/delete/student/:id",student.deleteStudent);
router.get("/total/students", student.getTotalofStudents)
router.get("/student/update/single/:id", student.SingleUpdate)
router.get("/student/search/:key",student.SearchStudents);




// export router
module.exports = router;