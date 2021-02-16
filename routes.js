const routes = require('next-routes')()

console.log('in routes');

routes
    .add('/home/feed','/home/feed')
    .add('/home/verified','/home/verified')
    .add('/home/account','/home/account')
    .add('/home/user','/home/user')
    .add('/home/post','/home/post')
    .add('/home/newpost','/home/newpost')
    .add('/home/signup', '/home/signup');


module.exports = routes;