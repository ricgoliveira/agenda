/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}

function somente_numero(campo){
    var digits="0123456789"
    var campo_temp 
        for (var i=0;i<campo.value.length;i++){
            campo_temp=campo.value.substring(i,i+1) 
            if (digits.indexOf(campo_temp)==-1){
                campo.value = campo.value.substring(0,i);
            }
        }
}

function mascaraGeral(src, mask){ 
    src.value = src.value.replace(/[^\d\-]/, '');  
    var i = src.value.length;
    var saida = mask.substring(0,1);
    var texto = mask.substring(i);
    if (texto.substring(0,1) != saida){
        src.value += texto.substring(0,1);
    }
}