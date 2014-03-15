export default Ember.Route.extend({
  model: function() {
		var items = Em.A([]);
		for(var i = 0; i< 10; i++){
			items.pushObject({name: ' '+i});
		}
		return items;
  },
	actions: {
		getMore: function() {
			var controller = this.get('controller'),
					nextPage = controller.get('page') + 1,
					perPage = controller.get('perPage'),
					items,
			 		options = null;

			options = {page: nextPage, perPage: perPage};

			items = this.fetchPage(options);
			//controller.gotMore(items, nextPage); 
			controller.send('gotMore',{items:items, page: nextPage}); 

		}
	},
		fetchPage: function(option) {
			var items = Em.A([]);
			var firstIndex = (option.page-1) * option.perPage;
			var lastIndex  = option.page * option.perPage;

			for (var i = firstIndex; i < lastIndex; i++) {
				items.pushObject({name:'' + i});
			}

			return items;
		}
});
