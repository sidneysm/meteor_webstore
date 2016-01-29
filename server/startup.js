Meteor.startup(function () {
      //adicionar as categorias na inicialização
      if (Categorias.find().count() === 0 ) {
          Categorias.insert({nome: 'Proteção Solar'});
          Categorias.insert({nome: 'Rosto'});
          Categorias.insert({nome: 'Maquiagem'});
          Categorias.insert({nome: 'Corpo'});
          Categorias.insert({nome: 'Cabelos'});
          Categorias.insert({nome: 'Desodorante'});
          Categorias.insert({nome: 'Perfumaria'});
          Categorias.insert({nome: 'Homem'});
          Categorias.insert({nome: 'Teem'});
          Categorias.insert({nome: 'Sensual'});
          Categorias.insert({nome: 'Empório'});
          Categorias.insert({nome: 'Bem-estar'});
      }


      if (Produto.find().count() === 0){

        Produto.insert({
          nome: 'Perfume Empire',
          preco: 100,
          imagem: "images/home/product4.jpg",
          categoria: "Perfumaria"
        });
        Produto.insert({
          nome: 'Hidratante',
          preco: 39.90,
          imagem: "images/home/product3.jpg",
          categoria: "Bem-estar"
        });
        Produto.insert({
          nome: 'Perfume hypinoze',
          preco: 100,
          imagem: "images/home/product2.jpg",
          categoria: "Perfumaria"
        });
        Produto.insert({
          nome: 'Creme para o rosto',
          preco: 100,
          imagem: "images/home/product1.jpg",
          categoria: "Rosto"
        });
      }

});

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

    }
});
