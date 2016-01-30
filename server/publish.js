Meteor.publish('produto', function () {
  return Produto.find();

});

Meteor.publish('categorias', function () {
  return Categorias.find();
});

Meteor.publish('carrinhoItem', function () {
  return CarrinhoItem.find({userid:this.userId});
});
