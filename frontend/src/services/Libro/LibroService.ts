import HttpClient from './../HttpClient';
import LibroGetAllResponseDto from '../../dtos/Libro/getAll/LibroGetAllResponseDto';
import LibroGetByIdResponseDto from '../../dtos/Libro/getById/LibroGetByIdResponseDto';
import LibroGetAllForAssociationResponseDto from '../../dtos/Libro/getAllForAssociation/LibroGetAllForAssociationResponseDto';
import LibroCreateRequestDto from '../../dtos/Libro/create/LibroCreateRequestDto';

class LibroService
{
   getAllLibro = async (): Promise<LibroGetAllResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Libro/`);
       const bodyReponse = await response.json();
       return bodyReponse as LibroGetAllResponseDto[];
   };
   getAllForAssociationLibro = async (): Promise<LibroGetAllForAssociationResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Libro/getAllForAssociations`);
       const bodyReponse = await response.json();
       return bodyReponse as LibroGetAllForAssociationResponseDto[];
   };

    getById = async (id:number): Promise<LibroGetByIdResponseDto> => {
       const response = await HttpClient.get(`api/v1/Libro/${id}/`);
       const bodyResponse = await response.json();
       return bodyResponse as LibroGetByIdResponseDto;
    }

   postCreateLibro = async (libroCreateRequestDto : LibroCreateRequestDto): Promise<Response> => {
       return await HttpClient.post(`api/v1/Libro/`, libroCreateRequestDto);
   };

   deleteLibro = async (id : number): Promise<Response> => {
       return await HttpClient.delete(`api/v1/Libro/${id}`);
   };


}

export default new LibroService()
