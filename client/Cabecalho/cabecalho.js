Session.setDefault("filtro", null);

Template.Cabecalho.events({
  'click .btn, click btn-default': function (evt, template){
    evt.preventDefault();
    var textoBusca = template.find("input");
    console.log(textoBusca.value)
    Session.set('categoria', null);
    Session.set('filtro', textoBusca.value);
  }
});
