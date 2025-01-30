/**
Teachers Interface
	firstName(string)
        lastName(string)
        fullTimeEmployee(boolean)
        yearsOfExperience(number)
        location(string)
        contract(boolean)
 */
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	contract?: boolean;
}

/**
extendig the teacher class
*/
interface Director extends Teacher {
	numberOfReports: number,
}

const director1: Director = {
	firstName: 'Taj';
        lastName: 'Lawal';
        fullTimeEmployee: true;
        location: 'Osun';
	numberOfReports: 17;
}

console.log(director1)

const teacher_1: Teacher = {
	firstName: 'Lawal',
        lastName: 'Tajudeen',
        fullTimeEmployee: false,
        location: 'Abuja',
        contract: false,
}

const teacher_2: Teacher = {
	firstName: 'Ohiani',
        lastName: 'Abdulfattai',
        fullTimeEmployee: false,
        yearsOfExperience: 5,
        location: 'Abuja',
}
console.log(teacher_1);
console.log(teacher_2);
