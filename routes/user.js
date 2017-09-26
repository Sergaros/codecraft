//Users
/*require('m_database');
const mongoose = require('m_mongoose');
const User = mongoose.models.User;
const path = require('path');

let resultMsg = (result)=>{return {result: result};};

module.exports = (router)=>{

    router.get('/api/users', async function(ctx) {
        try {
            ctx.body = await User.find({});
        } catch(err) {
            console.log('Error - ', err);
            if(err.code === 11000){
                ctx.throw(errData, 400);
            }
            else if(err.name === 'ValidationError'){
                ctx.throw(errData, 400);
            }
            throw err;
        }
    });

    router.post('/api/users', async function(ctx) {
        //console.log('api users post!!!!');
        try {
            console.log('Save Users - ', ctx.request.body);
            let res = await new User({
                Name: ctx.request.body.Name,
                Email: ctx.request.body.Email,
                Password: ctx.request.body.Password
            }).save();
            ctx.body = resultMsg(res._id !== undefined);
       } catch(err) {
           console.log('Error - ', err);
           if(err.code === 11000){
               ctx.throw(errData, 400);
           }
           else if(err.name === 'ValidationError'){
               ctx.throw(errData, 400);
           }
           throw err;
       }
    });

    router.get('/api/users/:id', async function(ctx) {
        try {
            let res = await User.findOne({'_id': ctx.params.id});
            ctx.body = res;
        } catch(err) {
            console.log('Error - ', err);
            if(err.code === 11000){
               ctx.throw(errData, 400);
            }
            else if(err.name === 'ValidationError'){
               ctx.throw(errData, 400);
            }
            throw err;
        }
    });

    router.delete('/api/users/:id', async function(ctx) {
        try {
           let res = await User.remove({'_id': ctx.params.id});
           ctx.body = resultMsg(res.result.ok === 1);
       } catch(err) {
           console.log('Error - ', err);
           if(err.code === 11000){
               ctx.throw(errData, 400);
           }
           else if(err.name === 'ValidationError'){
               ctx.throw(errData, 400);
           }
           throw err;
       }
    });
};*/
