let iniciar_sesion = document.getElementById('iniciar_sesion').addEventListener('click', sesionIniciada)
let boton_registrarse = document.getElementById('boton_registrarse').addEventListener('click', menuRegistro)
let cerrar = document.getElementById('cerrar').addEventListener('click', cancelar)
let crear = document.getElementById('crear').addEventListener('click', crearCuenta)
let resgistrarse = document.getElementById('resgistrarse').addEventListener('click', registroExitoso)
let volver = document.getElementById('volver').addEventListener('click', volverSeleccion)
let cerrar_cuentas = document.getElementById('cerrar_cuentas').addEventListener('click', cerrarCuentas)
let desplegable_ganancias = document.getElementById('desplegable_ganancias').addEventListener('click', desplegableGanancias)
let desplegable_gastos = document.getElementById('desplegable_gastos').addEventListener('click', desplegableGastos)
let desplegable_ahorros = document.getElementById('desplegable_ahorros').addEventListener('click', desplegableAhorros)
let agregar_cuenta = document.getElementById('agregar_cuenta').addEventListener('click', agregarCuenta)

function registroExitoso(){   
    let nombres = document.getElementById('nombres').value
    let apellidos = document.getElementById('apellidos').value
    let alias = document.getElementById('alias').value
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById('contraseña').value


    perfil = new Array(
        nombres,
        apellidos,
        alias,
        correo,
        contraseña
    )

    crear_cuenta.classList.replace('jsCrear', 'crear_cuenta')
    cancelar()

    agregar()
}

let baseDeDatos = []

function agregar(){
    baseDeDatos.push(perfil)
    console.log(baseDeDatos)
}

function sesionIniciada(){
    let correo_verificar = document.getElementById('correo_verificar').value
    let contraseña_verificar = document.getElementById('contraseña_verificar').value
    let verificado = 0

    for(let i = 0; i < baseDeDatos.length; i++){
        if(correo_verificar = baseDeDatos[i][3]){
            verificado = verificado + 1
        }

        if(contraseña_verificar === baseDeDatos[i][4]){
            verificado = verificado + 1
        }  
    }

    if(verificado === 2){
        let contenedor_sesion = document.getElementById('contenedor_sesion').classList.replace('contenedor_sesion','jsSesion')
        let contenedor_principal = document.getElementById('contenedor_principal').classList.replace('contenedor_principal', 'jsPrincipal')
        let nombre_alias = document.getElementById('nombre_alias').innerHTML = baseDeDatos[0][2]
    }else{
        alert('Correo o contraseña incorrectas')
    } 
}
function menuRegistro(){
    let selecion_registro = document.getElementById('selecion_registro').classList.replace('selecion_registro', 'jsSeleccion')
}

function cancelar(){
    selecion_registro.classList.replace('jsSeleccion', 'selecion_registro')
}

function crearCuenta(){
    let crear_cuenta = document.getElementById('crear_cuenta').classList.replace('crear_cuenta', 'jsCrear')
}

function volverSeleccion(){
    crear_cuenta.classList.replace('jsCrear', 'crear_cuenta')
}

function desplegableGanancias(){
    let ingresar_datos = document.getElementById('ingresar_datos').classList.replace('ingresar_datos', 'jsCuentas')
    verificarGanancias = 0

    verificarGanancias = verificarGanancias + 1
}

function desplegableGastos(){
    let ingresar_datos = document.getElementById('ingresar_datos').classList.replace('ingresar_datos', 'jsCuentas')
    verificarGastos = 0

    verificarGastos = verificarGastos + 1
}

function desplegableAhorros(){
    let ingresar_datos = document.getElementById('ingresar_datos').classList.replace('ingresar_datos', 'jsCuentas')
    verificarAhorros = 0

    verificarAhorros = verificarAhorros + 1
}

function cerrarCuentas(){
    ingresar_datos.classList.replace('jsCuentas', 'ingresar_datos')
}

function agregarCuenta(){

    let valorLibreGanancias = new Array 
    let valorLibreGastos = new Array
    let valorLibreAhorros = new Array
    let resultadoLibreGanancias = 0
    let resultadoLibreGastos = 0
    let resultadoLibreAhorros = 0
    let resultadoLibreTotal = 0 

    if(verificarGanancias == 1){
        let nombreGanancia = document.getElementById('nombre_ganancia').value
        let valorGanancia = parseInt(document.getElementById('valor_ganancia').value)

        ganancias = new Array(
        nombreGanancia,
        valorGanancia
        )

        ingresar_datos.classList.replace('jsCuentas', 'ingresar_datos')
        agregarDatosCuenta()

    }else if(verificarGastos == 1){
        let nombreGasto = document.getElementById('nombre_gasto').value
        let valorGasto = parseInt(document.getElementById('valor_gasto').value)

        gastos = new Array(
        nombreGasto,
        valorGasto
        )

        ingresar_datos.classList.replace('jsCuentas', 'ingresar_datos')
        agregarDatosCuenta()

    }else if(verificarAhorros == 1){
        let nombreAhorro = document.getElementById('nombre_ahorro').value
        let valorAhorro = parseInt(document.getElementById('valor_ahorro').value)

        ahorros = new Array(
        nombreAhorro,
        valorAhorro
        )

        ingresar_datos.classList.replace('jsCuentas', 'ingresar_datos')
        agregarDatosCuenta()
    }

    for(let i = 0; i < agregarValorCuenta.length; i++){

        if(verificarGanancias == 1){
            valorLibreGanancias.push(agregarValorCuenta[i][1])
            console.log(valorLibreGanancias)
        }else if(verificarGastos == 1){
            valorLibreGastos.push(agregarValorCuenta[i][1])
            console.log(valorLibreGanancias)
        }else if(verificarAhorros == 1){
            valorLibreAhorros.push(agregarValorCuenta[i][1])
            console.log(valorLibreGanancias)
        }
    }

    resultadoLibreGanancias = valorLibreGanancias.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    resultadoLibreGastos = valorLibreGastos.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    resultadoLibreAhorros = valorLibreAhorros.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    resultadoLibreTotal = resultadoLibreGanancias - resultadoLibreGastos - resultadoLibreAhorros

    let cantidad_ganancia = document.getElementById('cantidad_ganancia').innerHTML = resultadoLibreGanancias
    let cantidad_gasto = document.getElementById('cantidad_gasto').innerHTML = resultadoLibreGastos
    let cantidad_ahorro = document.getElementById('cantidad_ahorro').innerHTML = resultadoLibreAhorros
    let montoLibre = document.getElementById('montoLibre').innerHTML = resultadoLibreTotal
}

let agregarValorCuenta = []

function agregarDatosCuenta(){
    if(verificarGanancias == 1){
        agregarValorCuenta.push(ganancias)
    }else if(verificarGastos == 1){
        agregarValorCuenta.push(gastos)
    }else if(verificarAhorros == 1){
        agregarValorCuenta.push(ahorros)
    }
}