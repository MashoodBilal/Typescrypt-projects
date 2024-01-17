/* This project is a simple console based Student Management System. In this project you will be learning how
 to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the
 given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees,
 show status, etc. The status will show all the details of the student including name, id, courses enrolled and
 balance.This is one of the best projects to implement the Object Oriented Programming concepts.
*/
// Add new students
// generate 5 digit unique student ID
// Enroll in given cources
// 
// confirmation of enrollment
// view balance
// pay tuition fee
// remaining balance
// show status  Name,  ID,  cources Enrolled,  balance.
// 
// this is class
class Student {
    name;
    ID;
    courses;
    balance;
    constructor(name, id, courses, balance) {
        this.name = name;
        this.ID = id;
        this.courses = courses;
        this.balance = balance;
    }
}
export {};
