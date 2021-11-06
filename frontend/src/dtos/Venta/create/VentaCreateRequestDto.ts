import DetalleVentaCreateRequestDto from '../../../dtos/DetalleVenta/create/DetalleVentaCreateRequestDto';
export default class VentaCreateRequestDto
{
	fecha : Date=new Date();
	numeroVenta : string='';
	detalles : DetalleVentaCreateRequestDto[] = [];

	setFecha : (fecha : Date) => VentaCreateRequestDto = (fecha: Date) => {
		this.fecha = fecha;
		return this;
	}

	setNumeroVenta : (numeroVenta : string) => VentaCreateRequestDto = (numeroVenta: string) => {
		this.numeroVenta = numeroVenta;
		return this;
	}

	addDetalles : () => VentaCreateRequestDto = () => {
		this.detalles.push(new DetalleVentaCreateRequestDto());
		return this;
	}

	deleteDetalles : (detalleVenta : DetalleVentaCreateRequestDto) => VentaCreateRequestDto = (detalleVenta : DetalleVentaCreateRequestDto) => {
		this.detalles = this.detalles.filter(x => x !== detalleVenta);
		return this;
	}
}
