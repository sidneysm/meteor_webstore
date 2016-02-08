Produto = new Mongo.Collection('produto');

Produto.allow({
    insert: function (userId, doc) {
      return !!userId;
    }
});

Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {path: "uploads"})]
});


Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
