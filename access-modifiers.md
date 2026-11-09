# Access Modifiers

### Introduction

When we work with classes in TypeScript, we don't always want everyone to access or change our data. For example, in an employee management system, anyone should not be able to change an employee's salary directly. To control these things, TypeScript provides Access Modifiers. There are four commonly used modifiers: public, private, protected and readonly.

### 1. Public

Public means we can access a property from anywhere, both inside and outside the class. It is also the default modifier.

```ts
class Employee {
  public name = "Hasan";
}

const emp = new Employee();
console.log(emp.name);
```

Here, we can access the employee name directly using the object.

### 2. Private

Private is used when we don't want to access a property directly from outside the class.

```ts
class Employee {
  private salary = 45000;
}

const emp = new Employee();
// console.log(emp.salary); // Error
```

Here, salary can only be accessed inside the Employee class. Trying to access it from outside gives a TypeScript error.

### 3. Protected

Protected is similar to private, but child classes can also access it.

```ts
class Employee {
  protected department = "Backend";
}

class Developer extends Employee {
  showDepartment(): string {
    return this.department;
  }
}
```

Here, Developer can access department because it extends Employee.

### 4. Readonly

Readonly is used when we don't want to change a value after it has been initialized.

```ts
class Company {
  readonly companyName = "Webbly Media";
}

const company = new Company();
// company.companyName = "Other"; // Error
```

Here, we can read the company name, but we cannot assign a new value to it.

### Conclusion

So basically, these modifiers help us control how our class data is accessed. Public allows access from everywhere, private keeps data inside the class, protected allows child classes to use it, and readonly prevents changing a value. We can use them based on what we need in our projects.