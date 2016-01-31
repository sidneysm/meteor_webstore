
Template.Admin.helpers({
  categorias: function (){
    return Categorias.find();
  }
});

Template.Admin.events({
    "click #cadastrar": function(event, template){
        event.preventDefault();
        var produtoNome = template.find('#nome').value;
        var produtoCodigo = template.find('#codigo').value;
        var produtoPreco = parseFloat(template.find('#preco').value.replace(',','.'));
        var produtoDescricao = template.find('#descricao').value;
        var produtoCategoria = template.find('#categoria').value;
        var produtoImagem;

        var file = $('#arquivo').get(0).files[0];
        console.log(file)
        // var fileObj = imagens.insert(file);
        // console.log('Upload result: ', fileObj);
        // console.log(imagens.find());
        // produtoImagem = '/images/produtos/' + file.name;

        imagens.insert(file, function (err, fileObj) {
            if (err){
                console.log("KD?");
                alert("Não foi")
            } else {
                // handle success depending what you need to do
                produtoImagem = 'public/images/produtos/' + fileObj._id;
                console.log(produtoImagem);
            }
        });


    //
    // FS.Utility.eachFile(event, function(file) {
    //     Images.insert(file, function (err, fileObj) {
    //         if (err){
    //             console.log("KD?");
    //             alert("Não foi")
    //         } else {
    //             // handle success depending what you need to do
    //             produtoImagem = 'public/images/produtos/' + fileObj._id;
    //             console.log(produtoImagem);
    //         }
    //     });
    //  });

        Produto.insert({
          _id: produtoCodigo,
          nome: produtoNome,
          categoria: produtoCategoria,
          preco: produtoPreco,
          descricao:produtoDescricao,
          imagem: fileObj
        });
    }
});
