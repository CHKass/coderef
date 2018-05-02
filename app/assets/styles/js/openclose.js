// Open and Close JavaScript Document //

jQuery(document).ready(function() {
	
	// Adding the X button
	jQuery(".boxa").append('<span class="boxa-close">X</span>');
	
	// Handling the click event
	jQuery(".boxa-close").click(function() {
		jQuery(this).parents(".boxa").fadeOut();
	});
		
	// Initially hiding answers
	jQuery(".answers").hide();
		
	// Handling the question click
	jQuery(".faq").click(function() {
		jQuery(this).next(".answers").slideToggle();
	});
	
	// Initially hiding group images
	jQuery(".gallerygroup").hide();
		
	// Handling the question click
	jQuery(".groupname").click(function() {
		jQuery(this).next(".gallerygroup").slideToggle();
	});

	// Initially hiding text
	jQuery(".info-text").hide();
		
	// Handling the text reveal
	jQuery(".text-name").click(function() {
		jQuery(this).next(".info-text").fadeToggle(1000);
	});

	
});