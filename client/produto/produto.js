Template.ProdutoDetalheLayout.helpers({
    produto: ()=> {
        var id = FlowRouter.getParam('id');
        return Produto.findOne({_id: id});
    }
});

Template.ProdutoDetalheLayout.events({
    'click .cart': function (e, template) {
        var quantidade = parseInt(template.find('input').value);
        var produto = FlowRouter.getParam('id');
        var userid = Meteor.userId();
        Meteor.call('addAoCarrinho', quantidade, produto, userid);
        console.log("Ok" + FlowRouter.getParam('id'));

    }
});
