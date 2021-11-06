import HttpClient from './../HttpClient';
import AutorGetAllResponseDto from '../../dtos/Autor/getAll/AutorGetAllResponseDto';
import AutorGetByIdResponseDto from '../../dtos/Autor/getById/AutorGetByIdResponseDto';
import AutorGetAllForAssociationResponseDto from '../../dtos/Autor/getAllForAssociation/AutorGetAllForAssociationResponseDto';
import AutorCreateRequestDto from '../../dtos/Autor/create/AutorCreateRequestDto';

class AutorService
{
   getAllAutor = async (): Promise<AutorGetAllResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Autor/`);
       const bodyReponse = await response.json();
       return bodyReponse as AutorGetAllResponseDto[];
   };
   getAllForAssociationAutor = async (): Promise<AutorGetAllForAssociationResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Autor/getAllForAssociations`);
       const bodyReponse = await response.json();
       return bodyReponse as AutorGetAllForAssociationResponseDto[];
   };

    getById = async (id:number): Promise<AutorGetByIdResponseDto> => {
       const response = await HttpClient.get(`api/v1/Autor/${id}/`);
       const bodyResponse = await response.json();
       return bodyResponse as AutorGetByIdResponseDto;
    }

   postCreateAutor = async (autorCreateRequestDto : AutorCreateRequestDto): Promise<Response> => {
       return await HttpClient.post(`api/v1/Autor/`, autorCreateRequestDto);
   };

   deleteAutor = async (id : number): Promise<Response> => {
       return await HttpClient.delete(`api/v1/Autor/${id}`);
   };


}

export default new AutorService()
