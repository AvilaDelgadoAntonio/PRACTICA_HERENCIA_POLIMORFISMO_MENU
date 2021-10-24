import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let seleccionado: number
    console.log('\n')
    console.log('1.- Precio base de nuevo vehículo')
    console.log('2.- Comparador de vehículo (Coche vs Todoterreno)')
    console.log('3.- Listar vehículos creados')
    console.log('4.- MODIFICAR potencia del vehículo')
    console.log('5.- Ver los datos de un vehículo concreto')
    console.log('6.- BORRAR vehículo del la lista creada')
    console.log('0.- Salir')
    seleccionado = parseInt( await leerTeclado('opción ') )
    return seleccionado
}