export class Automovil {
  private _precioBase: number; 
  _potenciaMotor: number;
  constructor(precioBase: number, potenciaMotor: number) {
    this._precioBase = precioBase;
    this._potenciaMotor = potenciaMotor;
  }
  get precioBase() {
    return this._precioBase;
  }
  get potenciaMotor() {
    return this._potenciaMotor;
  }
  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._potenciaMotor > 150) {
      precio += 0.2 * precio;
    }
    return precio;
  }


  todo() {
    return `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
  }
}
