import { Genero } from '../../../enums/Genero'
export default class LibroCreateRequestDto
{
	nombre : string='';
	precio : number=0;
	genero : Genero = Genero.Poesia;
	autorId : number = 0;

	setNombre : (nombre : string) => LibroCreateRequestDto = (nombre: string) => {
		this.nombre = nombre;
		return this;
	}

	setPrecio : (precio : number) => LibroCreateRequestDto = (precio: number) => {
		this.precio = precio;
		return this;
	}
setGenero : (genero : Genero) => LibroCreateRequestDto = (genero: Genero) => {
		this.genero = genero;
		return this;
	}
	setAutorId : (autorId : number ) => LibroCreateRequestDto = (autorId: number) => {
		this.autorId = autorId;
		return this;
	}}
