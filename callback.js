// call back function 
setTimeout(function() {
    console.log("Say Hello!");
}, 5000);  

// callback function in anothercallback
function performTask(taskName, callback) {
    console.log(`Starting task: ${taskName}`);
    setTimeout(function() {
        const randomNumber = Math.random();
        if (randomNumber < 0.7) { 
            console.log(`Task '${taskName}' completed.`);
            callback(null); 
        } else {
            const error = new Error(`Task '${taskName}' encountered an error.`);
            callback(error); 
        }
    },2000); 
}
function cleanup() {
    console.log('Performing cleanup after task...');
}
performTask('Task 1', function(err) {
    if (err) {
        console.error('Error:', err.message);
    } else {
        performTask('Task 2', function(err) {
            if (err) {
                console.error('Error:', err.message);
            } else {
                cleanup();
            }
        });
    }
});


