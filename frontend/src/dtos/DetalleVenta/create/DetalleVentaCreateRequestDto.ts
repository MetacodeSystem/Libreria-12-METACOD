
export default class DetalleVentaCreateRequestDto
{
	cantidad : number=0;
	subtotal : number=0;
	libroId : number = 0;

	setCantidad : (cantidad : number) => DetalleVentaCreateRequestDto = (cantidad: number) => {
		this.cantidad = cantidad;
		return this;
	}

	setSubtotal : (subtotal : number) => DetalleVentaCreateRequestDto = (subtotal: number) => {
		this.subtotal = subtotal;
		return this;
	}

	setLibroId : (libroId : number ) => DetalleVentaCreateRequestDto = (libroId: number) => {
		this.libroId = libroId;
		return this;
	}}
