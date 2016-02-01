accountsUIBootstrap3.setLanguage('pt-BR');
Session.setDefault('categoria', null);
Meteor.subscribe('produto');
Meteor.subscribe('categorias');
Meteor.subscribe('carrinhoItem');

Meteor.startup(function() {
    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});

Uploader.localisation = {
    browse: "Escolher foto",
    cancelled: "Cancelado",
    remove: "Remover",
    upload: "Cadastrar",
    done: "Pronto",
    cancel: "Cancelar"
}

Template.registerHelper('currency', function(num){
  return 'R$' + Number(num).toFixed(2);
});

Accounts.ui.config({
  extraSignupFields: [{
    fieldName: 'name',
    fieldLabel: 'Nome Completo'
  }],
  requestPermissions: {},
  requestOfflineToken: {},
  passwordSignupFields: "USERNAME_AND_EMAIL",
});
