

Meteor.startup(function () {

    Meteor.startup(function () {
        UploadServer.init({
            tmpDir: process.env.PWD + '/public/images/.tmp',
            uploadDir: process.env.PWD + '/public/images/produtos',
            checkCreateDirectories: true, //create the directories for you
            overwrite: true,
            getFileName : function (fileInfo, formData) {
                return fileInfo.name;
            },
            mimeTypes: {
                "jpeg": "image/jpeg",
                "jpg": "image/jpeg",
                "png": "image/png"
            }
        });
    });

    //adicionar as categorias na inicialização
    if (Categorias.find().count() === 0 ) {
        Categorias.insert({nome: 'Proteção Solar'});
        Categorias.insert({nome: 'Rosto'});
        Categorias.insert({nome: 'Maquiagem'});
        Categorias.insert({nome: 'Pernas e pés'});
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
    },
    adicionarProduto:function(nomeProd, imagemProd, codProd, descricaoProd, categoriaProd, precoProd){
        Produto.insert({
          _id: codProd,
          nome: nomeProd,
          categoria: categoriaProd,
          preco: precoProd,
          descricao:descricaoProd,
          imagem: imagemProd
        });
    },
    pegarEstados:function(){
        var estadosObj = JSON.parse(Assets.getText("cidades.json"));
        var estados = [];
        for (var i = 0; i < estadosObj.estados.length; i++) {
            estados.push(estadosObj.estados[i].nome);
            console.log(estadosObj.estados[i].nome);
        }
        console.log(estados);
        return estadosObj.estados;
    }
});
