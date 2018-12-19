$(function(){
	$('button').on('click', function(){
		alert("Funcionou!");
		$.ajax({
			url: 'pasta/pasta/arquivo.php',
			type: 'POST',
			data: {nome: 'Deusyvan'},
			success: function(r){
				$('.borda').html(r);
			}
		});
	});
});