jQuery(document).ready(function() {

	// when a nav parent is clicked
	jQuery(".altnav > ul > li > a").click(function() {

		// if section is already active and clicked again
		if ( jQuery(this).parent("li").hasClass("active-parent") ) {
			jQuery(".altnav li").removeClass("active-parent");
			jQuery(".altnav ul ul").slideUp();
		} else {
		// if section is made active
			jQuery(".altnav ul ul").slideUp();
			jQuery(".altnav li").removeClass("active-parent");
			jQuery(this).parent("li").addClass("active-parent");
			jQuery(this).parent("li").find("ul").slideDown();
			return false;
		}
	}); // end click event handler

});

jQuery(document).ready(function() {

	// when a nav parent is clicked
	jQuery(".mainnav > ul > li > a").click(function() {

		// if section is already active and clicked again
		if ( jQuery(this).parent("li").hasClass("active-parent") ) {
			jQuery(".mainnav li").removeClass("active-parent");
			jQuery(".mainnav ul ul").slideUp();
		} else {
		// if section is made active
			jQuery(".mainnav ul ul").slideUp();
			jQuery(".mainnav li").removeClass("active-parent");
			jQuery(this).parent("li").addClass("active-parent");
			jQuery(this).parent("li").find("ul").slideDown();
			return false;
		}
	}); // end click event handler

});