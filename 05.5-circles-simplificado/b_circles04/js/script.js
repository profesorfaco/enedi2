//4 agregr escalas y rangos, y un borde para limites del grafico
//3 agregar textos de valor 


//serie de datos JSON 
var misdatos = [
	{"posX" : 5, "posY" : 10, "diam" : 20, "categ" : "red", "nombre" : "juan"}, 
	{"posX" : 10, "posY" : 30, "diam" : 14, "categ" : "blue", "nombre" : "alicia"}, 
	{"posX" : 15, "posY" : 25, "diam" : 10, "categ" : "red", "nombre" : "manuel"}, 
	{"posX" : 20, "posY" : 45, "diam" : 32, "categ" : "blue", "nombre" : "rosa"}, 
	{"posX" : 25, "posY" : 30, "diam" : 9, "categ" : "blue", "nombre" : "paula"}, 
	{"posX" : 30, "posY" : 15, "diam" : 28, "categ" : "red", "nombre" : "jose"} 
	];

 

 //nuevas varibles para area dbujo
 //4- Borde
var w = 900, h = 500,  borde = 50;

//crea un contenedor para el grafico, crea dentro un svg
var grafico = d3.select('#caja')
			.append('svg')
			.attr('width', w)
			.attr('height', h)
			.style("background", "paleturquoise")
 			;

//4 - Dominio de datos para rango x (posicion array 1) 
var anchoGrafico = w-borde*2;
var xScale = d3.scale.linear()
				.domain([	0, d3.max(misdatos, function(d) {return d.posX; })	
						])
				.range(	[borde, anchoGrafico]	);

//4 - Dominio de datos para rango y (posicion array 3) 
var altoGrafico = h-borde*2;
var yScale = d3.scale.linear()
				.domain([	0, d3.max(misdatos, function(d) {return d.posY; })	
						])
				.range(	[ altoGrafico, borde]	);




//crea una especie de grupo donde de elementos basados en los datos
var circles = grafico.append("g") 
				.classed("circles", true)
				//vincula circulos a serie de datos 
				.selectAll("circle")		
				.data(misdatos)
			 
				//una vez vinculados y creados, ahora se procede a "mostrarlos"
				.enter() 		
				.append("circle")

				//asigna valores de datos para posicion x e y de bolas				
				.attr("cx", function(d) {
					return xScale(d.posX);
				})
				.attr("cy", function(d) {
					return yScale(d.posY);
				})
				.attr("r", function(d){//puede tener un dominio y rango. 
					return d.diam;
				})

				.style("fill", function(d) {
					return d.categ;
				})
				.style("opacity", .6)

//3 se agregan los textos de valores
 			grafico.selectAll("text")
			   .data(misdatos)
			   .enter()
			   .append("text")
			   .text(function(d) {
			    		return d.nombre 
			    		+ " x= " + d.posX
			    		+ " yScale= " + d.posY;
			   })
			   .attr("x", function(d) {//posicion x para los textos
				   	return xScale(d.posX);
			   })
			   .attr("y", function(d) {//posicion y para los textos
				   	return yScale(d.posY);
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "12px")
			   .attr("fill", "black");
  				



//3 para ver valor ancho y largo
d3.select('svg').append("text")
			   .text("W: " + w + " | H: " + h)
			   .attr("x", w-73)
			   .attr("y", 12)
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "10px")
			   .attr("fill", "black");

//4 borde paa ver ancho y largo del grafico
d3.select('svg').append("rect")
			.attr('x', borde)
			.attr('y', borde)
			.attr('width', anchoGrafico)
			.attr('height', altoGrafico)
			.style('stroke', 'black')
			.style("fill", "transparent")
			.style('opacity', .5)	
 			;


