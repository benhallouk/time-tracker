const Todo = require('../models/todo.server.model');
const Boom = require('Boom');

const create = (request,replay) => {
    var entity = new Todo({
        title : request.query.title,
        note : request.query.note
    });

    entity.save((error,result) => {
        if(error) {
            //replay.view('error', { message : error });
           replay(Boom.badRequest(error));
        }
        else
            replay('OK');
    });    
};

const find = (request,replay) => {
    if(request.query.id){
        replay(Todo.findById(request.query.id, '-_id -__v'));
        return;
    }
        

    if(request.query.title){
        replay(Todo.find({ title : request.query.title } , '-_id -__v'));
        return;
    }

    if(request.query.date){
        replay(Todo.find({}, '-_id -__v').where('createdOn').lt(Date.now()));
        return;
    }

    replay(Todo.find({}, '-_id -__v'));
};

module.exports = [
    {
        path : '/create',
        method : 'GET',
        handler : create
    },
    {
        path : '/find',
        method : 'GET',
        handler : find
    }
];
