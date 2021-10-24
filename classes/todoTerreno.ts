import { Automovil } from './automovil';
export class TodoTerreno extends Automovil {
  private _traccion: string;
  constructor(precioBase: number, potenciaMotor: number, traccion: string) {
    super(precioBase, potenciaMotor);
    this._traccion = traccion;
    
  }
  get traccion() {
    return this._traccion
  }

  // sobre escribimos el método (SELF, Tanto PRECIO como TODO para hacerlo más cercano y que coja este el todoterreno)
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._traccion == '4x4') {
      precio += 0.1 * precio;
    }
    return precio
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, tracción: ${this._traccion}`
    return resultado
  }
}
