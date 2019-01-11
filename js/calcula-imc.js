var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	 var tdPeso = paciente.querySelector(".info-peso");
	 var tdAltura = paciente.querySelector(".info-altura");
	 var tdImc = paciente.querySelector(".info-imc");

	 var peso = tdPeso.textContent;
	 var altura = tdAltura.textContent;

	var ehValidoPeso = validaPeso(peso);
	var ehValidoAltura = validaAltura(altura);

	if(!ehValidoPeso){
		ehValidoPeso = false;
		tdPeso.textContent = "Peso inválido";

		paciente.classList.add("paciente-invalido");
	}

	if(!ehValidoAltura){
		ehValidoAltura = false;
		tdAltura.textContent = "Altura inválida";

		paciente.classList.add("paciente-invalido");
	}

	if(ehValidoAltura && ehValidoPeso){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}

}

function calculaImc(peso, altura){
	var imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso > 0 && peso <= 300){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if(altura > 0 && altura <= 3.00){
		return true;
	} else{
		return false;
	}
}

 

