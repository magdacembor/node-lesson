const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');


// Raise: logging (data: message)

// emitter.on('logging', (arg) => {
//     console.log('Listener called', arg);
// });

// emitter.emit('logging', { data: 'message'});

// function(arg) or e or eventArg