import LibroGetByIdResponseDto from "../../Libro/getById/LibroGetByIdResponseDto";
export default interface DetalleVentaGetByIdResponseDto
{
	detalleVentaId : number,
	cantidad : number
	subtotal : number

	libro : LibroGetByIdResponseDto;

}
