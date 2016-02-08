
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

// FlowRouter.route('/admin', {
//     name: 'dashboard',
//     action() {
//         var loggedInUser = Meteor.user();
//         if (!loggedInUser ||
//         !Roles.userIsInRole(loggedInUser,['admin'], 'admin')) {
//             FlowRouter.go('/');
//         }
//         BlazeLayout.render('AdminLayout', {main: 'Admin'});
//     }
// });

FlowRouter.route('/confirmacao', {
    name: 'finalizar_compra',
    action() {
        BlazeLayout.render('MainLayout', {main: 'finalizar_compra'});
    }
});

FlowRouter.route("/admin/adicionarProduto", {
    name: 'dashboard',
    action() {
        // var loggedInUser = Meteor.user();
        // if (!loggedInUser ||
        // !Roles.userIsInRole(loggedInUser,['admin'], 'admin')) {
        //     FlowRouter.go('/');
        // }
        BlazeLayout.render('AdminLayout', {main: 'adicionarProduto'});
    }

});
