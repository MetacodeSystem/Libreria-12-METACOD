
export default class AutorCreateRequestDto
{
	nombre : string='';
	apellido : string='';
	cuit : number=0;
	biografia : string='';

	setNombre : (nombre : string) => AutorCreateRequestDto = (nombre: string) => {
		this.nombre = nombre;
		return this;
	}

	setApellido : (apellido : string) => AutorCreateRequestDto = (apellido: string) => {
		this.apellido = apellido;
		return this;
	}

	setCuit : (cuit : number) => AutorCreateRequestDto = (cuit: number) => {
		this.cuit = cuit;
		return this;
	}

	setBiografia : (biografia : string) => AutorCreateRequestDto = (biografia: string) => {
		this.biografia = biografia;
		return this;
	}
}
