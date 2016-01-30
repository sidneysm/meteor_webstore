
Template.Admin.helpers({
  categorias: function (){
    return Categorias.find();
  }
});

Template.Admin.events({
  "change .fileInput": function(event, template){
    event.preventDefault();
    var produtoNome = template.find('#nome').value;
    var produtoCodigo = template.find('#codigo').value;
    var produtoPreco = parseFloat(template.find('#preco').value.replace(',','.'));
    var produtoDescricao = template.find('#descricao').value;
    var produtoCategoria = template.find('#categoria').value;
    var produtoImagem;

    // FS.Utility.eachFile(event, function(file) {
    //   Images.insert(file, function (err, fileObj) {
    //     // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //
    //   });
    // }
    FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
             produtoImagem = 'public/images/produtos/' + fileObj._id;
             console.log(produtoImagem);
          }
        });
     });

    Produto.insert({
      _id: produtoCodigo,
      nome: produtoNome,
      categoria: produtoCategoria,
      preco: produtoPreco,
      descricao:produtoDescricao,
      imagem: produtoImagem
    });


  }
});
