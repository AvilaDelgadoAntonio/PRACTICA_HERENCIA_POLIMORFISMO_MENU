import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { Automovil } from './../classes/automovil';
import { TodoTerreno } from './../classes/todoTerreno';

const main = async () => {
    let n: number
    let n1: number
    let f1: string
    let auto: Automovil;   
    let todoTerreno: TodoTerreno;
    let seleccionado: string | any;
    let automoviles: Array<Automovil> = new Array<Automovil>();
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log(`Está en opción 1, Precio base de NUEVO vehículo`)
                seleccionado =  await leerTeclado('Teclee 1 para COCHE o 2 para TODOTERRENO')
                
                if (seleccionado == 1)
                {
                    console.log(`Ha elegido un coche`)
                    auto = new Automovil(20000, 100);
                    console.log(`Precio base auto (incluye 100 CV sin coste adicional): ${auto.precioBase}`);
                    console.log(`Potencia auto (si es mayor de 150, 20% más), la potencia base es: ${auto.potenciaMotor}`);
                    console.log(`Precio: ${auto.precio()}`);
                }
            else
                {
                    console.log(`Ha elegido un todoterreno`)
                    todoTerreno = new TodoTerreno(30000, 149, '4x2');
                    console.log(`Precio base todoTerreno (incluye 149 CV y 4x2 sin coste adicional): ${todoTerreno.precioBase}`);
                    console.log(`Potencia todoTerreno (si es mayor de 150, 20% más), la potenia base es: ${todoTerreno.potenciaMotor}`);
                    console.log(`Ángulo Ataque todoTerreno (si 4x4, 10 % más), la tracción base es: ${todoTerreno.traccion}`);
                    console.log(`Precio todoTerreno: ${todoTerreno.precio()}`);
                } 
                 break
            case 2:
                console.log(`Está en opción 2, COMPARADOR de vehículo`)
                n1 =  parseInt( await leerTeclado('Indicar la potencia, en CV, deseada'))
                f1 =  await leerTeclado('Escriba si desea tracción 4x2 o 4x4 (Solo en caso de todoterreno)')

// Podemos asignar tanto Automovil como TodoTerreno
automoviles[0] = new TodoTerreno(30000, n1, f1);
automoviles[1] = new Automovil(20000, n1);



// recorremos el array (SELF: con el FOR, y va cambiando la variable a como índice en cada pasada)
// Polimorfismo la variable a puede ser de cualquiera de los tipos 

for (let a of automoviles) 
{

       if (a instanceof TodoTerreno == true) 
    {
           
           console.log(`En caso de Todoterreno`);
           console.log(`${a.todo()}, precio: ${a.precio()}`);

    }
    else
    {
        console.log(`En caso de coche`);
        console.log(`${a.todo()}, precio: ${a.precio()}`);
    }

}

break
            case 3:
                console.log(`Esta es la LISTA de cada vehículo`)
                console.log(automoviles);

                break
            case 4:
                console.log(`Está en opción 3, MODIFICADOR de potencia de vehículo`)
                n1 =  parseInt( await leerTeclado('Indicar la nueva potencia en CV')) 
                console.log(`En caso de Todoterreno`);
                automoviles[0]._potenciaMotor = n1
                console.log(`${automoviles[0].todo()}, precio: ${automoviles[0].precio()}`);
                console.log(`En caso de Coche`);
                automoviles[1]._potenciaMotor = n1
                console.log(`${automoviles[1].todo()}, precio: ${automoviles[1].precio()}`);
               
                break 
                case 5:
                    let datos_todoterreno = automoviles[0];
                    let datos_coche = automoviles[1];
                    console.log(`Está en opción 5, VER un vehículo concreto`)
                    seleccionado =  await leerTeclado('Teclee 1 para ver datos de TODOTERRENO o 2 para ver datos de COCHE')
                    
                    if (seleccionado == 1)
                    {
                        console.log(`Abajo están todos los datos del TODOTERRENO que ha configurado`)
                        console.log(`${datos_todoterreno.todo()}, precio: ${datos_todoterreno.precio()}`);
                        

                    }
                else
                    {
                        console.log(`Abajo están todos los datos del COCHE que ha configurado`)
                        console.log(`${datos_coche.todo()}, precio: ${datos_coche.precio()}`);
                    }
                break
                case 6:
                    let vehículo_todoterreno = automoviles[0];
                    let vehículo_coche = automoviles[1];
                    console.log(`Está en opción 6, BORRAR de la lista vehículo creado`)
                    seleccionado =  await leerTeclado('Teclee 1 para borrar TODOTERRENO o 2 para borrar COCHE')
                    
                    if (seleccionado == 1)
                    {
                        console.log(`Ha elegido borrar el TODOTERRENO`)
                        automoviles.splice( 0, 1);

                    }
                else
                    {
                        console.log(`Ha elegido borrar el COCHE`)
                        automoviles.splice( 1, 2);
                    }
                break
            case 0:
                break
            default:
                console.log("Opción incorrecta, introduzca solo las opciones del menú")
                break
        }
    }while (n != 0)
}
main()