// Unit 1
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Unit 2
export function executeCallback(callback, taskText) {
  callback(taskText);
}

function myCallback(taskText) {
  console.log(`Task: ${taskText}`);
}

// Call executeCallback with a callback function and a task text

executeCallback(myCallback, "Buy groceries");

// Unit 3

export function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000); // Simulate a 1-second delay
  });
}

export function rejectFetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      const message = "Error fetching data";
      reject(new Error(message));
    }, 1000); // Simulate a 1-second delay
  });
}
