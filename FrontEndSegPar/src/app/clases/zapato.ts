export class Zapato {
  
  public codMod: string;
	public nombre: string;
  public fecIng: string;
  public localVta: number;
  public precioCosto: number;
  public genero: string;
   
  

  constructor(codMod: string, nombre:string, fecIng: string, localVta: number,precioCosto: number,genero: string) {
    
    this.codMod = codMod;
    this.nombre = nombre;  
    this.fecIng = fecIng;
    this.localVta = localVta;  
    this.precioCosto = precioCosto;
    this.genero = genero;

  }


}
