Produto = new Mongo.Collection('produto');

Produto.allow({
    insert: function (userId, doc) {
      return !!userId;
    }
});
