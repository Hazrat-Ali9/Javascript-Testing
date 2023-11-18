import { it, expect, describe, vi } from "vitest";
import { divide, executeCallback, fetchData, rejectFetchData } from "./task";
// Unit 1
describe("divide()", () => {
  it("should pass", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
  });
  it("should pass with a negative number", () => {
    const result = divide(-10, 2);
    expect(result).toBe(-5);
  });

  it("should fail", () => {
    const result = () => divide(10, 0);
    expect(result).toThrow("Division by zero");
  });

  it("should be NaN", () => {
    const result = divide();
    expect(result).toBeNaN();
  });
});

// Unit 2
describe("executeCallback()", () => {
  it("should pass", () => {
    const loggerFn = vi.fn();

    loggerFn.mockImplementationOnce(() => {});
    const callback = loggerFn.mockImplementation((taskText) => {
      console.log(`Task: ${taskText}`);
    });
    executeCallback(callback, "Buy groceries");
    expect(callback).toHaveBeenCalledWith("Buy groceries");
  });
});

// Unit 3
describe("fetchData()", () => {
  it("should pass", async () => {
    const result = await fetchData();
    expect(result).toBeDefined();
  });

  it("should get correct data", async () => {
    const data = { name: "John", age: 30 };
    const result = await fetchData();
    expect(result).toEqual(data);
  });
});

describe("rejectFetchData()", () => {
  it("should fail", async () => {
    const result = async () => await rejectFetchData();
    expect(result).rejects.toThrowError();
  });

  it("should fail with correct message", async () => {
    const message = "Error fetching data";
    const result = async () => await rejectFetchData();
    expect(result).rejects.toThrowError(message);
  });
});
