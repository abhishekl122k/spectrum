const routes = require('next-routes')();

routes
    .add('/home/feed','/home/feed')
    .add('/home/verified','/home/verified')
    .add('/home/account','/home/account')
    .add('/home/user','/home/user')
    .add('/home/post','/home/post')
    .add('/home/newpost','/home/newpost');


module.exports = routes;