Template.ProdutoDetalheLayout.helpers({
    produto: ()=> {
        var id = FlowRouter.getParam('id');
        return Produto.findOne({_id: id});
    }
});
Carrinho = [];
Template.ProdutoDetalheLayout.events({
    'click .btn, click .btn-default, click .cart': function (e, template) {
        

        Carrinho = Session.get('produtosCarrinhos')
        
        Carrinho.push(FlowRouter.getParam('id'))
        Session.set('produtosCarrinhos', Carrinho);
    }
});