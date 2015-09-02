_INPUT = "2\n3 9\n17 24";
x = _INPUT.split('\n');

function calcularaices(inf,sup){
	resultado = 0;
	for (z = inf; z <= sup; z++){
		y = Math.sqrt(z);
		if (Math.floor(y) == y){
			resultado++;
		}
	}
	return resultado;
}

lim = parseInt(x[0]);
for (cont = 1; cont <= lim; cont++){
	caso = x[cont].split(' ');
	inf = parseInt(caso[0]);
	sup = parseInt(caso[1]);
	console.log(calcularaices(inf,sup));
	}

