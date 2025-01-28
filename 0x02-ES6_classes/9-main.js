import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
   StudentALX {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
   StudentALX {
    _firstName: 'John',
    _lastName: 'Doe',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
   StudentALX {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
   StudentALX {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
   StudentALX {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
