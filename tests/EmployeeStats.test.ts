import { describe, it, expect } from "vitest";
import { EmployeeStats } from "../src/EmployeeStats.ts";

describe("EmployeeStats", () => {
    it("should have a name, age, and salary", () => {
        const employee = new EmployeeStats("John Doe", 30, 50000);
        expect(employee.name).toBe("John Doe");
        expect(employee.age).toBe(30);
        expect(employee.salary).toBe(50000);
    });
});
