accountsUIBootstrap3.setLanguage('pt-BR');
Session.setDefault('categoria', null);
Meteor.subscribe('produto');
Meteor.subscribe('categorias');
Meteor.subscribe('carrinhoItem');
Meteor.subscribe('images');


Template.registerHelper('currency', function(num){
  return 'R$ ' + (Number(num).toFixed(2)).replace('.',',');
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
