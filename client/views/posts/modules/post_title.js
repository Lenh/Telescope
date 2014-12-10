var isPostPage = function() {
	return Router.current().route.getName()=="post_page";
};

Template[getTemplate('postTitle')].helpers({
	postLink: function(){
		if (isPostPage()) {
			return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;	
		} else {
			return "/posts/"+this._id;	
		}
	},
	postTarget: function() {
		if (isPostPage()) {
			return !!this.url ? '_blank' : '';
		} else {
			return '';	
		}
	}
});