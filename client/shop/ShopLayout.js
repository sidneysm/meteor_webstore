Template.ShopLayout.helpers({
	produtos: function () {
			if (Session.get('categoria')===null && Session.get('filtro') === null) {
				return Produto.find({});
			}else if (Session.get('categoria')!==null && Session.get('filtro') === null ){
				return Produto.find({"categoria":Session.get('categoria')});
			} else if (Session.get('filtro') !== null ) {
				return Produto.find({"nome": /Session.get('filtro')/});
			}

    }
});

Template.ShopLayout.events({
  'click #produtos':function (evt, template) {
		Session.set('categoria', null);
	}
});
