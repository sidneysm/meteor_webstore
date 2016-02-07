Meteor.publish('produto', function () {
  return Produto.find();

});

Meteor.publish('categorias', function () {
  return Categorias.find();
});

Meteor.publish('carrinhoItem', function () {
  return CarrinhoItem.find({userid:this.userId});
});

Meteor.publish('admin', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'], group)) {

    return Meteor.secrets.find({group: group});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});
