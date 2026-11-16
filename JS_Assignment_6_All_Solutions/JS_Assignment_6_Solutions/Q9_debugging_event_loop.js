// Q9 – Debugging the Event Loop

// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// The two direct console.log statements are synchronous and run first.
// Promise.then schedules a microtask. setTimeout schedules a macrotask.
// After synchronous code finishes, the event loop processes microtasks
// before the next macrotask, so the Promise callback appears first.
