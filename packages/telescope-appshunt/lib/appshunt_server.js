Accounts.emailTemplates.siteName = "Appshunt";
Accounts.emailTemplates.from = "Appshunt <noreply@appshunt.co>";

postAfterSubmitMethodCallbacks.push(function(post) {
	if (post.status == STATUS_PENDING) {
		var email = getEmail(Meteor.users.findOne(post.userId));
	
		if (email) {
			html = getEmailTemplate('emailPostPending')(getPostProperties(post));
	
			sendEmail(email, 'Thank you for posting!', buildEmailTemplate(html));		
		}
	}
	return post;
});