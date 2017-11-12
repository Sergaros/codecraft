'use strict'

const mongoose = require('mongoose');
const Article = mongoose.models.Article;

module.exports = (router)=>{
    router.get('/api/article/theme/:themeId', async function(ctx) {
        //console.log('ctx.params.themeId - ', ctx.params.themeId);
        ctx.body = await Article.find({theme: ctx.params.themeId});
    })
    .get('/api/article/:id', async function(ctx) {
        //console.log('ctx.params.id - ', ctx.params.id);
        ctx.body = await Article.findOne({_id: ctx.params.id});
    })
    .post('/api/article', async function(ctx) {
        console.log('ctx.request.body - ', ctx.request.body)

        if(!ctx.isAuthenticated())
            ctx.body = {result: false};


        const article = {};
        article.name = ctx.request.body.name?ctx.request.body.name:'';
        article.body = ctx.request.body.body?ctx.request.body.body:'';
        article.theme = ctx.request.body.theme?ctx.request.body.theme:'';
        article.subtheme = ctx.request.body.subtheme?ctx.request.body.subtheme:'';

        ctx.body = await new Article(article).save();
    })
    .put('/api/article/:id', async function(ctx) {
        //console.log('ctx.request.body - ', ctx.request.body);
        //console.log('ctx.request.id - ', ctx.params.id);

        if(!ctx.isAuthenticated())
            ctx.body = {result: false};

        let article = await Article.findOne({_id: ctx.params.id});

        if(article){
            if(ctx.request.body.name) article.name = ctx.request.body.name;
            if(ctx.request.body.body) article.body = ctx.request.body.body;
            if(ctx.request.body.theme) article.theme = ctx.request.body.theme;
            if(ctx.request.body.subtheme) article.subtheme = ctx.request.body.subtheme;

            ctx.body = article.save();
        } else
            ctx.body = {result: false};
    })
    .delete('/api/article/theme/:themeId', async function(ctx) {
        if(!ctx.isAuthenticated())
            ctx.body = {result: false};

        ctx.body = await Article.remove({theme: ctx.params.themeId});
    })
    .delete('/api/article/:id', async function(ctx) {
        if(!ctx.isAuthenticated())
            ctx.body = {result: false};
            
        ctx.body = await Article.remove({_id: ctx.params.id});
    })
};
