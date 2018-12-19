$(function(){
	$('button').on('click', function(){
		var nome = $('#nome').val();
		$.ajax({
			url: 'http://localhost/ajaxmvc/ajax',
			type: 'POST',
			data: {nome: nome},
			dataType: 'json', //Para dizer que o resultado é em JSON
			success: function(r_json){
				$('.borda').html(r_json.frase);//Transforma o JSON em texto de acordo com o parametro
			}
		});
	});
});