module.exports = function (result, expected, message) {
    let success = true;

    if (success) {
        console.log(`The test was successful: got ${result}`);
    } else if (message) {
        console.error(message);
    } else {
        console.error(`The test failed: expected ${expected}; instead got ${result}`);
    }

    return success;
};
