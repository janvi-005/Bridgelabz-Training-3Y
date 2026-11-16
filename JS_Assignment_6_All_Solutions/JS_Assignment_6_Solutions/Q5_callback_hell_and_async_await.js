// Q5 – Frontend Rush: Avoiding Callback Hell

// Version 1: Nested callbacks (callback hell).
function runWithCallbacks() {
    console.log("Callback pipeline started");

    setTimeout(() => {
        console.log("design");

        setTimeout(() => {
            console.log("build");

            setTimeout(() => {
                console.log("test");

                setTimeout(() => {
                    console.log("deploy");

                    setTimeout(() => {
                        console.log("celebrate");
                    }, 1000);

                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Version 2: Cleaner async/await approach.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await pipeline started");

    await runStage("design");
    await runStage("build");
    await runStage("test");
    await runStage("deploy");
    await runStage("celebrate");

    console.log("Pipeline finished.");
}

// Run one version at a time to compare their output.
// Uncomment the version you want to test:
runWithCallbacks();
// runWithAsyncAwait();

// Explanation:
// async/await makes asynchronous code read in a top-to-bottom order.
// It avoids deeply nested callbacks and makes error handling with try/catch
// easier to follow.
