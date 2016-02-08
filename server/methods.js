Meteor.methods({
    addAoCarrinho:function (quantidade, produtoId, userId) {
        var item = CarrinhoItem.findOne({produto:produtoId, userid:Meteor.userId()})
        if (item){
            CarrinhoItem.update({_id:item._id}, {$set:{
                quantidade: item.quantidade + quantidade
            }});

        } else if (quantidade > 0) {

            CarrinhoItem.insert({
                quantidade:quantidade,
                produto:produtoId,
                userid:userId
            });
        } else{
            console.log('Quantidade é zero');
        }
    },
    removerDoCarrinho:function (id) {
        CarrinhoItem.remove({_id:id});
    },
    adicionarProduto:function(nomeProd, imagemProd, codProd, descricaoProd, categoriaProd, precoProd){
        Produto.insert({
          _id: codProd,
          nome: nomeProd,
          categoria: categoriaProd,
          preco: precoProd,
          descricao:descricaoProd,
          imagem: imagemProd,
          adicionadoEm: new Date()
        });
    },
    pegarEstados:function(){
        var estadosObj = JSON.parse(Assets.getText("cidades.json"));
        return estadosObj.estados;
    },
    pegarCidades:function(estado){
        var arquivoJSON = JSON.parse(Assets.getText("cidades.json"));
        cidades = [];
        arquivoJSON.estados.forEach(function(est){
            if (est.nome === estado) {
                est.cidades.forEach(function(cidade){
                    cidades.push({"nome": cidade})
                });
            }
        });
        return cidades;
    }
});
