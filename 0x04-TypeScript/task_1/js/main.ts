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
	firstName: 'Taj',
        lastName: 'Lawal',
        fullTimeEmployee: true,
        location: 'Osun',
	numberOfReports: 17,
}
/***** Use Case for director interface ******/
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
/**** Use case for teacher interface ****/
console.log(teacher_1);
console.log(teacher_2);

/**
Printing Teachers
 */

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}
/***** Use case ******/
console.log(printTeacher("John", "Doe"));

/**
Writing a class
*/
interface stdConstructor {
	/** constructor interface */
	firstName: string;
	lastName: string;
}

class StudentClass {
	/** student class */
	firstName: string;
	lastName: string;

	constructor({ firstName, lastName }: stdConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently Working";
	}

	displayName(): string {
		return this.firstName;
	}
}

/********* Use case *********/
const std1 = new StudentClass({ firstName: 'Smart', lastName: 'Smith' });
console.log(std1.displayName());
console.log(std1.workOnHomework());
