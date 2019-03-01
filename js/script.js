function ListaContatosController($scope) {
    $scope.telefones = [];    
    $scope.contatoNovo=true;
    $scope.tiposTelefone=[
        {id: '0', nome: 'Comercial'},
        {id: '1', nome: 'Residencial'},
        {id: '2', nome: 'Celular'}
    ];
    $scope.contatos = [
        {
            nome: 'Isquik'
            ,dataNascimento: "2018-10-09"
            ,endereco:{
                rua: "Dr. Alfredo de Castro"
                ,numero: 200
                ,complemento: "9º Andar, sala 907"
                ,CEP: "01155-060"
                ,bairro: "Barra funda"
                ,cidade: "São Paulo"
                ,UF: "SP"
            }
            ,telefones:[{
                numero: "(11) 3195-2210"
                ,tipoTelefone: "Comercial"
                ,ativo: true
            },{
                numero: "(11) 3195-2210"
                ,tipoTelefone: "Celular"
                ,ativo: false
            },{
                numero: "(11) 3195-2210"
                ,tipoTelefone:"Residencial"
                ,ativo: true                
            }]
            , ativo: true
        },
        {           
            nome: "Prox"
            ,dataNascimento: "2018-10-10"
            ,endereco: {
                rua: "Dr. Alfredo de Castro",
                numero: 200,
                complemento: "9º Andar, sala 907",
                CEP: "01155-060",
                bairro: "Barra funda",
                cidade: "São Paulo",
                UF: "SP"
            },
            telefones: [{
                numero: "(11) 5844-8444",
                tipoTelefone: "Comercial",
                ativo: true
            }]   
            , ativo: true        
        }      
    ]; 

    $scope.gravarContato = function () {           
        if(!isEmpty($scope.contato)){                
            console.log($scope.contato);
            let contato = {
                nome: isEmpty($scope.contato.nome) ? " " : $scope.contato.nome          
                ,dataNascimento: isEmpty($scope.contato.dataNascimento) ? "" : $scope.contato.dataNascimento
                ,endereco: {
                    rua:          isEmpty($scope.contato.endereco.rua) ? "" : $scope.contato.endereco.rua
                    ,numero:      isEmpty($scope.contato.endereco.numero) ? "" : $scope.contato.endereco.numero
                    ,complemento: isEmpty($scope.contato.endereco.complemento) ? " " : $scope.contato.endereco.complemento
                    ,bairro:      isEmpty($scope.contato.endereco.bairro) ? " " : $scope.contato.endereco.bairro
                    ,CEP:         isEmpty($scope.contato.endereco.CEP) ? " " : $scope.contato.endereco.CEP                
                    ,cidade:      isEmpty($scope.contato.endereco.cidade) ? " " : $scope.contato.endereco.cidade
                    ,UF:          isEmpty($scope.contato.endereco.UF) ? " " : $scope.contato.endereco.UF.toUpperCase()
                }                        
                ,ativo:true       
            };     
            console.log("antes: "+contato);    
            if($scope.contatoNovo){
                contato.telefones = $scope.telefones;
                $scope.contatos.push(contato);
            }else{
                contato.telefones = $scope.contato.telefones;
                $scope.contatos[$scope.contatoIndice] = contato;                
            }            
        }else{
            alert("Preencha os campos corretamente");
        }
        $scope.contato = {};
        $scope.contatoNovo = true;
    };

    $scope.selecionar = function(indice) {        
        // if($scope.contatos[indice].telefones.length > 0){
            $scope.contatoNovo = false;
        // }else{
        //     $scope.contatoNovo = true;
        // }
        $scope.contatoIndice = indice;        
        $scope.contato = $scope.contatos[indice];           
    };   

    $scope.excluir = function(indice) {
        if(confirm("Tem certeza que deseja excluir o contato ?")){
            $scope.contatoNovo = false;
            $scope.contatoIndice = indice;
            $scope.contatos[indice].ativo = false;                         
        }      
    };   

    $scope.adicionarTelefone = function () {      
        console.log($scope.contatoNovo);    
        if(!$scope.contatoNovo)  {
            $scope.contato.telefones.push({
                numero:""
                ,tipoTelefone: ""           
                ,ativo:true       
            });  
        }else{
            $scope.telefones.push({
                numero: $scope.telefone.numero
                ,tipoTelefone: $scope.telefone.tipoTelefone           
                ,ativo:true       
            });   
        }
        $scope.obj_hide = true;           
        $scope.telefone={};                         
    };   
}

function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
      return false;
    }
    return true;
}



