CarrinhoItem = new Mongo.Collection("carrinhoItem");

CarrinhoItem.allow({
    update: function (userId, doc) {
      return !!userId;
    }
});
