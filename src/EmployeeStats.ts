export class EmployeeStats {
    constructor(public name: string, public age: number, public salary: number) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Name must be a non-empty string');
        }
        if (typeof age !== 'number' || age <= 0) {
            throw new Error('Age must be a positive number');
        }
        if (typeof salary !== 'number' || salary < 0) {
            throw new Error('Salary must be a non-negative number');
        }
    }

    static getAverageSalary(employees: EmployeeStats[]): number {
        if (employees.length === 0) {
            throw new Error('No employees');
        }
        return employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;
    }

    static getMaxSalary(employees: EmployeeStats[]): number {
        if (employees.length === 0) {
            throw new Error('No employees');
        }
        return employees.reduce((max, employee) => Math.max(max, employee.salary), 0);
    }

    static getMinSalary(employees: EmployeeStats[]): number {
        if (employees.length === 0) {
            throw new Error('No employees');
        }
        return employees.reduce((min, employee) => Math.min(min, employee.salary), Infinity);
    }

    static getAverageAge(employees: EmployeeStats[]): number {
        if (employees.length === 0) {
            throw new Error('No employees');
        }
        return employees.reduce((sum, employee) => sum + employee.age, 0) / employees.length;
    }

    static getHighestPaidEmployee(employees: EmployeeStats[]): EmployeeStats {
        if (employees.length === 0) {
            throw new Error('No employees');
        }
        return employees.reduce((max, employee) => max.salary > employee.salary ? max : employee);
    }
}

