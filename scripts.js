	
	// Máscara
	function formatar(mascara, documento){
	var i = documento.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(i)

	if (texto.substring(0,1) != saida){
documento.value += texto.substring(0,1);

	}
	}
	
	// CEP
	function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('logradouro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('estado').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('logradouro').value=(conteudo.logradouro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('estado').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('logradouro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('estado').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
	
	// Somente Número
	function somenteNumeros(e) {
        var charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                return false;
            }
        }
    }
	
	// Caracteres de Email
	function SomenteEmail(){
	var tecla=(window.event)?event.keyCode:e.which;   
	if((tecla>63 && tecla<91 || tecla==46)) return true;
	else{
	if (tecla>96 && tecla<123 || tecla==95) return true;
	else{
	if (tecla>47 && tecla<58) return true;
	else
	return false;
	}
	}
	}
	
	function SomenteLetras(){
	var tecla=(window.event)?event.keyCode:e.which;   
	if((tecla>64 && tecla<91)) return true;
	else{
	if (tecla>96 && tecla<123 || tecla==32) return true;
	else  return false;
	}

	}
	
	// Valida CPF
	function ValidarCPF (input) {
	s = input.value;
	filteredValues = ".-/"; 
	var i;
	var returnString = "";
	for (i = 0; i < s.length; i++) { 
	var c = s.charAt(i);
	if (filteredValues.indexOf(c) == -1) returnString += c;
	}
	if (returnString=='11111111111' || returnString=='22222222222' || 
	returnString=='33333333333' || returnString=='44444444444' || 
	returnString=='55555555555' || returnString=='66666666666' || 
	returnString=='77777777777' || returnString=='88888888888' || 
	returnString=='99999999999' || returnString=='00000000000' || returnString=='00000000191')
	{alert('CFP Inválido!'); input.value=""; return false;}
	if (returnString.length != 11) {sim=false}
	else {sim=true}
	if (sim ) {
	for (i=0;((i<=(returnString.length-1))&& sim); i++) {
	val = returnString.charAt(i)
	if ((val!="9")&&(val!="0")&&(val!="1")&&(val!="2")&&(val!="3")&&(val!="4")
	&& (val!="5")&&(val!="6")&&(val!="7")&&(val!="8")) {sim=false}
	}
	if (sim) {
	soma = 0
	for (i=0;i<=8;i++) {
	val = eval(returnString.charAt(i))
	soma = soma + (val*(i+1))
	}
	resto = soma % 11
	if (resto>9) dig = resto -10
	else  dig = resto
	if (dig != eval(returnString.charAt(9))) { sim=false }
	else { 
	soma = 0
	for (i=0;i<=7;i++) {
	val = eval(returnString.charAt(i+1))
	soma = soma + (val*(i+1))
	}
	soma = soma + (dig * 9)
	resto = soma % 11
	if (resto>9) dig = resto -10
	else  dig = resto
	if (dig != eval(returnString.charAt(10))) { sim = false }
	else {sim = true;}
	}
	}
	}

	if (sim != true) {
	if (input.value != ''){
	alert("CPF Inválido! Digite novamente.");
	input.value = '';
	return false;
	}
	else{
	return false;  
	}	 
	}
	}

	// Somente Letras
	function ApenasLetras(e, t) {
		try {
			if (window.event) {
				var charCode = window.event.keyCode;
			} else if (e) {
				var charCode = e.which;
			} else {
				return true;
			}
			if (
				(charCode > 64 && charCode < 91) || 
				(charCode > 96 && charCode < 123) ||
				(charCode > 191 && charCode <= 255) // letras com acentos
			){
				return true;
			} else {
				return false;
			}
		} catch (err) {
			alert(err.Description);
		}
	}