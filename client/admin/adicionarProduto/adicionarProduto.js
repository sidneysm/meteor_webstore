Template.adicionarProduto.helpers({
    categorias: function (){
        return Categorias.find();
    },
    isSelecionado: function () {
        if (Session.get('selecionado')){
            return true;
        } else {
            return false;
        }
    }
});

Template.adicionarProduto.events({
    'change .fileInput': function(event, template) {
        var files = event.target.files;
        Images.insert(files[0], function (err, fileObj) {
            Session.set('ProdutoURL', "/cfs/files/images/" + fileObj._id);
            Session.set('selecionado', true);
        });
        files = "";
    },
    'click .cadastrar': function (event, template) {

        var nome = template.find('#nome').value;

        var codigo = template.find('#codigo').value;
        var preco = parseFloat(template.find('#preco').value.replace(',','.'));
        var descricao = template.find('#descricao').value;
        var categoria = template.find('#categoria').value;
        var imagem = Session.get('ProdutoURL');
        Meteor.call(
            'adicionarProduto',
            nome,
            imagem,
            codigo,
            descricao,
            categoria,
            preco
        );
        template.find('#nome').value = "";

        template.find('#codigo').value = "";
        template.find('#preco').value ="";
        template.find('#descricao').value = "";
        template.find('#categoria').value = "";
        template.find('.fileInput').value = "";
        Session.set('ProdutoURL', null);
        Session.set('selecionado', false);
        alert("Produto adicionado");
    }
});

Template.adicionarProduto.onRendered(function () {
    Session.set('selecionado', false);
});
