/* 
Filename: ComplexCode.js
Content: Complex Code for Employee Management System
*/

// Defining Employee class
class Employee {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role || 'Employee';
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Role: ${this.role}`;
  }
}

// Defining Manager class by inheriting from Employee
class Manager extends Employee {
  constructor(id, name, department) {
    super(id, name, 'Manager');
    this.department = department;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
  }

  removeSubordinate(subordinate) {
    const index = this.subordinates.indexOf(subordinate);
    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }

  getSubordinates() {
    return this.subordinates.map((sub) => sub.getDetails()).join('\n');
  }
}

// Creating Employee objects
const emp1 = new Employee(1, 'John Doe');
const emp2 = new Employee(2, 'Jane Smith');
const emp3 = new Employee(3, 'Michael Johnson');
const emp4 = new Employee(4, 'Emily Davis');

// Creating Manager objects
const manager1 = new Manager(5, 'Robert Brown', 'Sales');
const manager2 = new Manager(6, 'Sarah Adams', 'Marketing');

// Adding subordinates to managers
manager1.addSubordinate(emp1);
manager1.addSubordinate(emp2);
manager2.addSubordinate(emp3);
manager2.addSubordinate(emp4);

// Removing a subordinate from a manager
manager1.removeSubordinate(emp2);

// Getting details
console.log(emp1.getDetails());
console.log(manager1.getDetails());
console.log(manager2.getSubordinates());
console.log(emp3.getDetails());

// More code...

// Complex logic...

// ...

// More code...

// Final code...

// ...

// Execution of the complex code
console.log("Complex code executed successfully!");