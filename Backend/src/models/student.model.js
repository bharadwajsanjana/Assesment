'user strict';
var dbConn = require('./../../config/db.config');

var Student = function(student){
    this.first_name     = student.first_name;
    this.last_name      = student.last_name;
	this.age			= student.age;
    this.email          = student.email;
    this.phone          = student.phone;
	this.st_class		= student.st_class
	this.st_section		= student.st_section
	this.st_rollno		= student.st_rollno
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Student.create = function (newStd, result) {    
    dbConn.query("INSERT INTO students set ?", newStd, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Student.findById = function (id, result) {
    dbConn.query("Select * from students where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Students.findAll = function (result) {
    dbConn.query("Select * from students", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('students : ', res);  
            result(null, res);
        }
    });   
};
Students.update = function(id, student, result){
  dbConn.query("UPDATE students SET first_name=?,last_name=?,age=?,email=?,phone=?,st_class=?,st_rollno=?,st_section=? WHERE id = ?", [student.first_name,student.last_name,student.age,student.email,student.phone,student.st_class,student.st_rollno,student.st_section, id], function (err, res) {
  dbConn.query("UPDATE students SET first_name=?,last_name=?,age=?,email=?,phone=?,st_class=?,st_rollno=?,st_section=? WHERE id = ?", [student.first_name,student.last_name,student.age,student.email,student.phone,student.st_class,student.st_rollno,student.st_section, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Student.delete = function(id, result){
     dbConn.query("DELETE FROM student WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Student;