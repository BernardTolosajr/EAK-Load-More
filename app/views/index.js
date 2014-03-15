export default Ember.View.extend({
	didInsertElement: function() {
		$(window).on('scroll', $.proxy(this.didScroll, this));
	},
	willDestroyElement: function() {
		$(window).off('scroll', $.proxy(this.didScroll, this));
	},
	didScroll: function(){
		if (this.isScrolledToBottom()) {
			this.get('controller').send('getMore');
		}
	},
	isScrolledToBottom: function(){
		var distanceToViewportTop = ($(document).height() - $(window).height());
		var viewPortTop = $(document).scrollTop();

		if (viewPortTop === 0) {
			// if we are at the top of the page, don't do
			return false;
		}

		return (viewPortTop - distanceToViewportTop === 0);
	}
});
