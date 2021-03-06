
Template.Carrinho.helpers({
  carrItens: function () {
    carrinhoCompra = [];
    var carrinhoItens = CarrinhoItem.find();
    var total = 0;

    carrinhoItens.forEach(function(cartitem){
        var item = _.extend(cartitem,{});
        var produto = Produto.findOne({_id:cartitem.produto});
        cartitem.produtonome = produto.nome;
        cartitem.precoTotal = (Number(produto.preco) * cartitem.quantidade);
        cartitem.preco = produto.preco;
        cartitem.imagem = produto.imagem;
        total += cartitem.precoTotal;
        carrinhoCompra.push(cartitem);
    });
    carrinhoCompra.subtotal = total;
    // carrinhoCompra.tax = carrinhoCompra.subtotal * .06;
    carrinhoCompra.total = carrinhoCompra.subtotal;
    return carrinhoCompra;
  }
});

Template.Carrinho.events({
  'click .cart_quantity_up':function (evt, template) {
    CarrinhoItem.update({_id:this._id}, {$set:{
      quantidade: this.quantidade += 1
    }});
  },
  'click .cart_quantity_down':function (evt, template) {
    if(this.quantidade > 1) {
      CarrinhoItem.update({_id:this._id}, {$set:{
        quantidade: this.quantidade -= 1
      }});
    }
  },
  'click .cart_quantity_delete':function(evt, template){
    Meteor.call('removerDoCarrinho', this._id);
  }
});
