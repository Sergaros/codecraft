'use strict'

const mongoose = require('mongoose');
const Theme = mongoose.models.Theme;

module.exports = (router)=>{
    router.get('/api/theme', async function(ctx) {
        //console.log('ctx.params.id - ', ctx.params.id);
        ctx.body = await Theme.find({});
    })
    .get('/api/theme/:id', async function(ctx) {
        //console.log('ctx.params.id - ', ctx.params.id);
        ctx.body = await Theme.findOne({_id: ctx.params.id});
    })
    .post('/api/theme', async function(ctx) {
        //console.log('ctx.request.body - ', ctx.request.body)

        const theme = {};
        theme.name = ctx.request.body.name?ctx.request.body.name:'';
        theme.image = ctx.request.body.image?ctx.request.body.image:'';
        theme.subthemes = ctx.request.body.subthemes?ctx.request.body.subthemes:[];

        ctx.body = await new Theme(theme).save();
    })
    .put('/api/theme/:id', async function(ctx) {
        console.log('ctx.request.body - ', ctx.request.body);
        console.log('ctx.request.body - ', ctx.params.id);

        let theme = await Theme.findOne({_id: ctx.params.id});

        if(theme){
            theme.name = ctx.request.body.name?ctx.request.body.name:'';
            theme.image = ctx.request.body.image?ctx.request.body.image:'';
            theme.subthemes = ctx.request.body.subthemes?ctx.request.body.subthemes:[];
            ctx.body = theme.save();
        } else
            ctx.body = {result: false};
    })
    .delete('/api/theme/:id', async function(ctx) {
        ctx.body = await Theme.remove({_id: ctx.params.id});
    })
};
