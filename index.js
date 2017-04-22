const Hapi = require('Hapi');
const Server = new Hapi.Server();
var Basic = require('hapi-auth-basic');
var Bcrypt = require('bcrypt');
var Nes = require('nes');

Server.connection({
    host: 'localhost',
    port: 9000
});

const Hoek = require('Hoek');
Server.register([Basic,Nes], (err)=> {
    Hoek.assert(!err, err);

    const users = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    const validate = function (request, username, password, callback) {

        const user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, function (err, isValid) {

            callback(err, isValid, { id: user.id, name: user.name });
        });
    };

    Server.auth.strategy('simple', 'basic', 'required', { validateFunc: validate });

});

const indexRoute = require('./lib/routes/index.server.route');
Server.route(indexRoute);

Server.start(() => {
    console.log('Started at ' + Server.info.uri);
});

module.exports = Server;