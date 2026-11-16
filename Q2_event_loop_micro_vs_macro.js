// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// Timeout callback (macrotask)
//
// Explanation:
// Synchronous code runs first. Once the current call stack is empty,
// JavaScript runs queued microtasks (such as Promise.then callbacks)
// before moving to macrotasks (such as setTimeout callbacks).
