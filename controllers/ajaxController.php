<?php 
class ajaxController extends controller{
    
    public function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $dados = array();
      
        $this->loadView('ajax', $dados);
        //Usamos loadView aqui porque não carregamos o site inteiro apenas a view.
        
    }
    
}
