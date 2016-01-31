
Template.Admin.helpers({
    categorias: function (){
        return Categorias.find();
    },
    myCallbacks: function() {
        return {
            formData: function() { return { id: "232323", other: Session.get("ReactiveParam") } },
            finished: function(index, fileInfo, context) {
                imagem = 'images/produtos/' + fileInfo.name;
                Meteor.call(
                    'adicionarProduto',
                    nome.value,
                    imagem,
                    codigo.value,
                    descricao.value,
                    categoria.value,
                    preco.value
                );
            }
        }
    }
});
Template.Admin.onRendered = function(){
    var nome = this.$('#nome').value;

    var codigo = this.$('#codigo').value;
    var preco = parseFloat(this.$('#preco').value.replace(',','.'));
    var descricao = this.$('#descricao').value;
    var categoria = this.$('#categoria').value;

}
Template.Admin.events({

});
