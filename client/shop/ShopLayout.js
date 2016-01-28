Template.ShopLayout.helpers({
	produtos: function () {
			if (Session.get('categoria')===null && Session.get('filtro') === null) {
				return Produto.find({});
			} else if (Session.get('categoria')===null && Session.get('filtro') !== null ) {
				return Produto.find({"nome": {'$regex' : Session.get('filtro')}});
			} else if (Session.get('categoria')!==null) {
				return Produto.find({categoria: Session.get('categoria')});
			}
    }
});

Template.ShopLayout.events({
  'click #produtos':function (evt, template) {
		Session.set('categoria', null);
		Session.set('filtro', null);
	}
});
