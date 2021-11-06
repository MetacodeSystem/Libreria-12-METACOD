import DetalleVentaGetByIdResponseDto from "../../DetalleVenta/getById/DetalleVentaGetByIdResponseDto";
export default interface VentaGetByIdResponseDto
{
	ventaId : number,
	fecha : Date
	numeroVenta : string

	detalles : DetalleVentaGetByIdResponseDto[];

}
