accountsUIBootstrap3.setLanguage('pt-BR');


Accounts.ui.config({
  extraSignupFields: [{
    fieldName: 'name',
    fieldLabel: 'Nome'
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
})
