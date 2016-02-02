

Meteor.startup(function () {
    Meteor.startup(function () {
        UploadServer.init({
            tmpDir: process.env.PWD + '/.public/images/tmp',
            uploadDir: process.env.PWD + '/.public/images/produtos',
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

    //adicionar as categorias na inicialização (Tirar no ambiente de produção)
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
