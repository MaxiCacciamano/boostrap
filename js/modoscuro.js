var modo = confirm('Modo oscuro')
if (modo) {
	var cuerpo = document.getElementById('prod')
	cuerpo.style.backgroundColor ='#1a1711'

	var mc = document.getElementById('pie')

		mc.style.backgroundColor = '#1a1711'
	var l =document.getElementById('logo')
	var c = document.getElementById('contacto')
	l.style.backgroundColor='#1a1711'
	c.style.backgroundColor='#1a1711'

	var cab = document.getElementById('cabecera')
	cab.style.backgroundColor='#1a1711'

	var bot = document.getElementById('boton')
	bot.style.backgroundColor='#1a1711'

	var men = document.getElementsByTagName('a')
	for(var i=0; i<=men.length; i++){
		men[i].style.color = '#ab7813'
	}
}
	function ver(){
	var b = document.getElementById('bloques')
	if (b.style.display == 'none') {
		b.style.display = 'block'
	}else{
      b.style.display = 'block'
	} 
}
