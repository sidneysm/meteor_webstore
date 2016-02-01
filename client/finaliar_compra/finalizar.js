Template.finalizar_compra.helpers({
    estados: function () {
        Meteor.call('pegarEstados', function(err, result) {
            Session.set('estados', result);
        });
        return Session.get('estados');
    }
    
});


Template.finalizar_compra.events({
    'click #chamaJson': function (evt, tmp){

    }
});
