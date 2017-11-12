const Recaptcha = require('recaptcha2');
const config = require('config');

const PUBLIC_KEY = config.get('recaptcha.public_key');
const PRIVATE_KEY = config.get('recaptcha.private_key');

const recaptcha = new Recaptcha({
  siteKey: PUBLIC_KEY,
  secretKey: PRIVATE_KEY
})

module.exports = (router) => {
    router.post('/recaptcha', async function(ctx) {
        console.log('recaptcha body - ', ctx.request.body);
        console.log('remote addres - ', ctx.request.ip);
        recaptcha.validate(ctx.request.body.key, ctx.request.ip)
            .then(function() {
                // validated and secure
                console.log('Recaptcha validate ok!!!');
            })
            .catch(function(errorCodes) {
                // invalid
                console.log(recaptcha.translateErrors(errorCodes)); // translate error codes to human readable text
            });


            /*verifyRecaptcha(ctx.request.body.key, ctx.request.ip, function(result){
                console.log('Recaptcha result - ', result)
            });*/
        ctx.body = {
            result: true
        };
    });
};
