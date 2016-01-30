accountsUIBootstrap3.setLanguage('pt-BR');

Meteor.subscribe('produto');
Meteor.subscribe('categorias');
Meteor.subscribe('carrinhoItem');



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
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",
});

Session.setDefault('categoria', null);
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
    }
});

FlowRouter.route('/produto/:id', {
    name: 'produto',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ProdutoDetalheLayout'});
    }
});

FlowRouter.route('/carrinho', {
    name: 'carrinho',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Carrinho'});
    }
});

FlowRouter.route('/admin', {
    name: 'carrinho',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Admin'});
    }
});
