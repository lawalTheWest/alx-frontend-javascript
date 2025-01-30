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
	yearsOfExperience: number;
	location: string;
	contract: boolean;
}

const teacher_1: Teacher = {
	firstName: 'Lawal',
        lastName: 'Tajudeen',
        fullTimeEmployee: false,
        yearsOfExperience: 8,
        location: 'Abuja',
        contract: false,
}

const teacher_2: Teacher = {
	firstName: 'Ohiani',
        lastName: 'Abdu;lfattai',
        fullTimeEmployee: false,
        yearsOfExperience: 5,
        location: 'Abuja',
        contract: false,
}
console.log(teacher_2);
