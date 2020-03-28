const url = 'https://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message)
}

module.exports = log;
// only the final result should be exported, the rest should not be exposed externally
