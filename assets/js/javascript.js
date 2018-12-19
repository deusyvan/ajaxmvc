$(function(){
	$('button').on('click', function(){
		alert("Funcionou!");
		$.ajax({
			url: '...',
			type: 'POST',
			data: {nome: 'Deusyvan'},
			success: function(r){
				$('.borda').html(r);
			}
		});
	});
});