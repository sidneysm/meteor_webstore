Template.CategoriaLayout.helpers({
    categorias: function () {
      return Categorias.find();
    }
});

Template.Categoria.events({
  'click #categoria': function (evt, template) {
      Session.set('filtro', null);
      Session.set('categoria', this.nome);
    }
});
