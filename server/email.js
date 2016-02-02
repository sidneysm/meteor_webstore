
Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://' +
        encodeURIComponent('sidneyddd@hotmail.com') + ':' +
        encodeURIComponent('yendis-100') + '@' +
        encodeURIComponent('smtp.live.com') + ':' + '587';
    //-- Set the from address
    Accounts.emailTemplates.from = 'contato@hinodeshop.com.br';

    //-- Application name
    Accounts.emailTemplates.siteName = 'Hinode Shop';

    //-- Subject line of the email.
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
        return 'Confirme seu email para o site HinodeShop';
    };

    //-- Email text
    Accounts.emailTemplates.verifyEmail.text = function(user, url) {
        return 'Obrigado por se resgistrar.  Por favor click no link abaixo para validar seu email: \r\n' + url;
    };

    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    //    restrictCreationByEmailDomain: "school.edu",

    //    oauthSecretKey: "wgporjigrpqgdfg"
    });
});
