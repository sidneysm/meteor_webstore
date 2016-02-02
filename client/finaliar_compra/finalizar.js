Template.finalizar_compra.helpers({
    estados: function () {
        Meteor.call('pegarEstados', function(err, result) {
            Session.set('estados', result);
        });
        return Session.get('estados');
    },
    cidades:function () {
        Meteor.call('pegarCidades', Session.get('estadoSelecionado'), function(err, result) {
            Session.set('cidades', result);
        });

        return Session.get('cidades');

    }
});


Template.finalizar_compra.events({
    'change #estados': function (evt, tmp){
        evt.preventDefault();
        Session.set('estadoSelecionado', tmp.find('#estados').value);
    }
});
