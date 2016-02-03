
Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://' +
        encodeURIComponent('postmaster@appb0a422c3ebac4a548479efef4bb18bfb.mailgun.org') + ':' +
        encodeURIComponent('b91a5efbaedeacdf023577b1884bf479') + '@' +
        encodeURIComponent('smtp.mailgun.org') + ':' + '587';
    //-- Set the from address
    Accounts.emailTemplates.from = 'sidneyddd@hotmail.com';

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
