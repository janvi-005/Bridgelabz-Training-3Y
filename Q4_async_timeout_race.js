// Q4 – DevOps Delay: Async Timeout Race

function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly fail a server request (20% chance).
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " failed to respond."));
            } else {
                resolve(serverName + " responded successfully.");
            }
        }, delay);
    });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all succeeds only when both servers succeed.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.error("Deployment error:", error.message);
    });

// Promise.race settles as soon as the first Promise settles.
// If the first response is a rejection, race also rejects.
Promise.race([
    contactServer("Server A", 2000),
    contactServer("Server B", 3000)
])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.error("Fastest response failed:", error.message));
