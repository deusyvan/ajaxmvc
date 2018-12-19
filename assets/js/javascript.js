$(function(){
	$('button').on('click', function(){
		alert("Funcionou!");
		$.ajax({
			url: 'http://localhost/ajaxmvc/home/testar',
			type: 'POST',
			data: {nome: 'Deusyvan'},
			success: function(r){
				$('.borda').html(r);
			}
		});
	});
});