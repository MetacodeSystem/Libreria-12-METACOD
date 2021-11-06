import AutorGetByIdResponseDto from "../../Autor/getById/AutorGetByIdResponseDto";import { Genero } from "../../../enums/Genero";
export default interface LibroGetByIdResponseDto
{
	libroId : number,
	nombre : string
	precio : number
	genero : Genero

	autor : AutorGetByIdResponseDto;

}
