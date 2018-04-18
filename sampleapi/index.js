console.log('Loading Function!');

exports.handler = function(event, context) {
    console.log('event', JSON.stringify(event));
    var name = event.myname || 'Anonymous';
    context.succeed('Hello World, ' + name);
};
