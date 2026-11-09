const multiplyValue = (value: number, multiplier?: number) : number=>{
    if(multiplier){
        return value*multiplier;
    }
    else if(multiplier===0){
        return value*multiplier;
    }
    return value*2
}


const processInput = (value : string | number | boolean) : string| number =>{
    if(typeof(value) === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof(value) === "number"){
        return value*10;
    }
    else if(value){
        return "Active";
    }
    return "Inactive";
}


const formatCoordinate = (value : readonly[number,number,string]) : string =>{
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`
}


const concatenateArrays = <T>(...arr:T[][]): T[] =>{
    return arr.reduce((result,item)=>{
        return result.concat(item)
    },[])
}


interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] =>{
    const finalCourse: Course[] = [];
    courses.map(item=> 
        {
            if(item.isPublished && item.students>=minStudents){
            finalCourse.push(item)
            }
        }
    )
    return finalCourse;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const result = items.map(item => {
        return item[key]
    })

    return result;
};

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const validateAgeAsync =(age: number): Promise<string>=> {
    return new Promise((resolve, reject) => {
        if (age>= 18) {
            setTimeout(()=> {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

    });
};
