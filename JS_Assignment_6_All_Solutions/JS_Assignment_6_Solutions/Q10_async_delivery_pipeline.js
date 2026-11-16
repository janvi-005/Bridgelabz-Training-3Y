// Q10 – The Final Delivery: Async Pipeline Debugger

function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            // Each step has a 15% chance of failure.
            if (Math.random() < 0.15) {
                reject(new Error(stepName + " failed."));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

// await pauses this async function until each step's Promise settles.
// The next step starts only after the previous step succeeds.
runPipeline();
