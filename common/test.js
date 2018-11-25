module.exports = function (result, expected, message) {
    let success = true;

    if (Array.isArray(result) && Array.isArray(expected)) {
        for (let i = 0; i < result.length && i < expected.length; i++) {
            if (result[i] !== expected[i]) {
                success = false;
                break;
            }
        }
    } else if (result !== expected) {
        success = false;
    }

    if (success) {
        console.log(`The test was successful: got ${result}`);
    } else if (message) {
        console.error(message);
    } else {
        console.error(`The test failed: expected ${expected}; instead got ${result}`);
    }

    return success;
};
