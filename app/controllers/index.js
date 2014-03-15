export default Ember.ArrayController.extend({ 
	page: 1,
	perPage: 10,
	actions: {
		getMore: function() {
			// don't load new data if we already are
			if (this.get('loadingMore')) return;

			this.set('loadingMore',true);

			// pass this action up the chain to the events hash on the route
			this.get('target').send('getMore');
		},
		gotMore: function(param) {
			this.set('loadingMore', false);
			this.set('page', param.page);
			this.pushObjects(param.items);
		}
	}
});
