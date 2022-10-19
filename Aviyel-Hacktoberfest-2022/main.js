const { hello, hello_callback } = require('./hello.py');

function main(who) {
    return hello(who) + ' from Python and JavaScript';
}

function callback(who) {
    return hello_callback((str) => who + str);
}

module.exports = {
    main,
    callback,
};
