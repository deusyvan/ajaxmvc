$(function(){
	$('button').on('click', function(){
		var nome = $('#nome').val();
		$.ajax({
			url: 'http://localhost/ajaxmvc/ajax',
			type: 'POST',
			data: {nome: nome},
			success: function(r){
				$('.borda').html(r);
			}
		});
	});
});