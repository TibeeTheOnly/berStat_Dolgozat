import { describe, it, expect, beforeEach } from "vitest";
import { EmployeeStats } from "../src/EmployeeStats.ts";

describe("EmployeeStats", () => {
    let employees: EmployeeStats[];
    let employees2: EmployeeStats[];

    beforeEach(() => {
        employees = [
            new EmployeeStats("John Doe", 30, 50000),
            new EmployeeStats("Jane Doe", 35, 60000),
            new EmployeeStats("Jim Doe", 40, 70000),
        ];

        employees2 = [
            new EmployeeStats("Alice Smith", 28, 55000),
            new EmployeeStats("Bob Johnson", 45, 65000),
            new EmployeeStats("Charlie Brown", 50, 75000),
        ];
    });

    // Class tests
    it("should have a name, age, and salary", () => {
        const employee = new EmployeeStats("John Doe", 30, 50000);
        expect(employee.name).toBe("John Doe");
        expect(employee.age).toBe(30);
        expect(employee.salary).toBe(50000);
    });

    it("should throw an error if name is an empty string", () => {
        expect(() => new EmployeeStats("", 30, 50000)).toThrow('Name must be a non-empty string');
    });

    it("should throw an error if age is not a positive number", () => {
        expect(() => new EmployeeStats("John Doe", -1, 50000)).toThrow('Age must be a positive number');
    });

    it("should throw an error if salary is a negative number", () => {
        expect(() => new EmployeeStats("John Doe", 30, -50000)).toThrow('Salary must be a non-negative number');
    });

    // Method tests
    // getAverageSalary
    it("should return the average salary of the employees", () => {
        expect(EmployeeStats.getAverageSalary(employees)).toBe(60000);
    });

    it("should return the avarage salary of the employees", () => {
        expect(EmployeeStats.getAverageSalary(employees2)).toBe(65000);
    });

    // getMaxSalary
    it("should return the highest salary of the employees", () => {
        expect(EmployeeStats.getMaxSalary(employees)).toBe(70000);
    });

    it("should return the highest salary of the employees", () => {
        expect(EmployeeStats.getMaxSalary(employees2)).toBe(75000);
    });

    it("should throw error if there are no employees", () => {
        expect(() => EmployeeStats.getMaxSalary([])).toThrowError("No employees");
    });

    // getMinSalary
    it("should return the lowest salary of the employees", () => {
        expect(EmployeeStats.getMinSalary(employees)).toBe(50000);
    });

    it("should return the lowest salary of the employees", () => {
        expect(EmployeeStats.getMinSalary(employees2)).toBe(55000);
    });

    it("should throw an error if there are no employees", () => {
        expect(() => EmployeeStats.getMinSalary([])).toThrowError("No employees");
    });

    // getAverageAge
    it("should return the average age of the employees", () => {
        expect(EmployeeStats.getAverageAge(employees)).toBe(35);
    });

    it("should return the average age of the employees", () => {
        expect(EmployeeStats.getAverageAge(employees2)).toBe(41);
    });

    it("should return 0 if there are no employees", () => {
        expect(() => EmployeeStats.getAverageAge([])).toThrowError("No employees");
    });

    // getHighestPaidEmployee
    it("should return the highest paid employee", () => {
        expect(EmployeeStats.getHighestPaidEmployee(employees)).toEqual(employees[2]);
    });

    it("should return the highest paid employee", () => {
        expect(EmployeeStats.getHighestPaidEmployee(employees2)).toEqual(employees2[2]);
    });

    it("should throw an error if there are no employees", () => {
        expect(() => EmployeeStats.getHighestPaidEmployee([])).toThrow('No employees');
    });


});
