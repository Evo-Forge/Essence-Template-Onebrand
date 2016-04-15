jQuery(document).ready(function(){
	var accordionsMenu = $('.acordeonMenu');

	if( accordionsMenu.length > 0 ) {

		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(200) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(200);
			});
		});
	}
});
