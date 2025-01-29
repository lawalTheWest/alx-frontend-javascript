var student_1 = {
    firstName: 'Lawal',
    lastName: 'Tajudeen',
    age: 20,
    location: 'Abuja',
};
var student_2 = {
    firstName: 'Khalid',
    lastName: 'John',
    age: 15,
    location: 'USA',
};
var StudentList = [student_1, student_2];
var tbl = document.createElement('table');
var the_bdy = document.createElement('tbody');
StudentList.forEach(function (std) {
    var rw = document.createElement('tr');
    var fname = document.createElement('td');
    var lc = document.createElement('td');
    fname.textContent = std.firstName;
    lc.textContent = std.location;
    rw.appendChild(fname);
    rw.appendChild(lc);
    the_bdy.appendChild(rw);
});
tbl.appendChild(the_bdy);
document.body.appendChild(tbl);
console.log(student_1);
