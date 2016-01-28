Template.ProdutoDetalheLayout.helpers({
    produto: ()=> {
        var id = FlowRouter.getParam('id');
        return Produto.findOne({_id: id});
    }
});

Template.ProdutoDetalheLayout.events({
    'click .cart': function (e, template) {
        var quantidade = template.find('input').value;
        var produto = FlowRouter.getParam('id');
        var sessionid = Meteor.default_connection._lastSessionId;
        Meteor.call('addAoCarrinho', quantidade, produto, sessionid);
        console.log("Ok" + FlowRouter.getParam('id'));

    }
});
