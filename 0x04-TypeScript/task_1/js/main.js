var director1 = {
    firstName: 'Taj',
    lastName: 'Lawal',
    fullTimeEmployee: true,
    location: 'Osun',
    numberOfReports: 17,
};
/***** Use Case for director interface ******/
console.log(director1);
var teacher_1 = {
    firstName: 'Lawal',
    lastName: 'Tajudeen',
    fullTimeEmployee: false,
    location: 'Abuja',
    contract: false,
};
var teacher_2 = {
    firstName: 'Ohiani',
    lastName: 'Abdulfattai',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'Abuja',
};
/**** Use case for teacher interface ****/
console.log(teacher_1);
console.log(teacher_2);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
/***** Use case ******/
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently Working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
/********* Use case *********/
var std1 = new StudentClass({ firstName: 'Smart', lastName: 'Smith' });
console.log(std1.displayName());
console.log(std1.workOnHomework());
