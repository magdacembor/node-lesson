const EventEmitter = require('events');
// EventEmitter is a class

const emitter = new EventEmitter;

// 1. Register a listener (addListener and 'on' are doing the same)
// first argument: name of the event to be called
emitter.on('messageLogged', function() {
    console.log('Listener called');
});

// 2 most common methods:
// 2. Raise an event
emitter.emit('messageLogged');

