module.exports = [{
        path : '/',
        method : 'GET',
        config: {
            auth: false
        },
        handler :  (request, reply) => {
            reply('hello');
        }
    },
    {
        path : '/login',
        method : 'POST',
        config: {
            auth: false
        },
        handler :  (request, reply) => {
            if(request.payload.email==="abc@abc" && request.payload.password==="abc"){
                reply()
                .header('token', 'am9objpzZWNyZXQ=')
                .header('access-control-allow-origin', '*')
                .header('Access-Control-Expose-Headers', 'token');
            }
            else
                reply().code(401);
        }
    },
    {
        method: 'GET',
        path: '/endpoint',
        config: {
            auth: true
        },
        config: {
            id: 'endpoint',
            handler: function (request, reply) {
                return reply(JSON.stringify([1,2,3,4,5,6,7,8,9,10]));
            }
        }
    }
];
