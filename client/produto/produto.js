Template.ProdutoDetalheLayout.helpers({
    produto: ()=> {
        var id = FlowRouter.getParam('id');
        return Produto.findOne({_id: id});
    }
});

Template.ProdutoDetalheLayout.events({
    'click .btn, click .btn-default, click .cart': function (e, template) {
        console.log("Ok" + FlowRouter.getParam('id'));

    }
});
