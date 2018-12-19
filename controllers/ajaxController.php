<?php 
class ajaxController extends controller{
    
    public function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $dados = array('frase' => '');
        
        if (isset($_POST['nome']) && !empty($_POST['nome'])) {
            //Recebendo o dado
            $nome = addslashes($_POST['nome']);
            
            $dados['frase'] = 'Meu nome: '.$nome;
        }
        $this->loadView('ajax', $dados);
        //Usamos loadView aqui porque não carregamos o site inteiro apenas a view.
        
    }
    
}
