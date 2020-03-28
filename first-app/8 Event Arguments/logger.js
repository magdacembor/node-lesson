const EventEmitter = require('events');

const url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event   
        this.emit('messageLogged', { id: 1, url: 'https://'});
    }
}



module.exports = Logger;


