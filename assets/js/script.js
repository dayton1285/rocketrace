$('.accordion-body').on('show', function () {
	$(this).parent().find('.accordion-toggle').html('<i class="icon-arrow-up"></i>');
})

$('.accordion-body').on('hide', function () {
	$(this).parent().find('.accordion-toggle').html('<i class="icon-arrow-down"></i>');
})