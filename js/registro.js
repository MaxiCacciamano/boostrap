var email = document.getElementById('inputEmail4')
var contraseña = document.getElementById('inputPassword4')
var direccion = document.getElementById('inputAddress')
var ciudad = document.getElementById('inputCity')
var postal = document.getElementById('inputZip')
function validar(){
	email.addEventListener('input', aceptaremail)
	contraseña.addEventListener('input', aceptarcontraseña)
	direccion.addEventListener('input',aceptardireccion)
	ciudad.addEventListener('input',aceptarciudad)
	postal.addEventListener('input',aceptarpostal)
	aceptaremail()
	aceptarcontraseña()
	aceptardireccion()
	aceptarciudad()
	aceptarpostal()
}
function aceptaremail(){
	if (email.value.trim() == '') {
		email.setCustomValidity('Ingrese los datos solicitados..')
		email.style.backgroundcolor = '#ff3333'
	} else {
		email.setCustomValidity('')
	}
}
function aceptarcontraseña(){
	if (contraseña.value=='') {
		contraseña.setCustomValidity('Ingrese una contraseña')
		contraseña.style.backgroundcolor = '#ff3333'
	}else{
		contraseña.setCustomValidity('')
	}
}
function aceptardireccion (){
	if (direccion.value=='') {
		direccion.setCustomValidity('Se solicita una direccion')
	}else{
		direccion.setCustomValidity('')
	}
}
function aceptarciudad(){
	if (ciudad.value == 'Seleccione' ) {
		ciudad.setCustomValidity('Error')
	}else{
		ciudad.setCustomValidity('')
	}
}
function aceptarpostal(){
	if (postal.value == '') {
		postal.setCustomValidity('Ingrese su ppostal')
	}else{
		postal.setCustomValidity('')
	}
}

window.addEventListener('load', validar)