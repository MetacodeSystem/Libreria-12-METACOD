import HttpClient from './../HttpClient';
import DetalleVentaGetAllResponseDto from '../../dtos/DetalleVenta/getAll/DetalleVentaGetAllResponseDto';
import DetalleVentaGetByIdResponseDto from '../../dtos/DetalleVenta/getById/DetalleVentaGetByIdResponseDto';
import DetalleVentaGetAllForAssociationResponseDto from '../../dtos/DetalleVenta/getAllForAssociation/DetalleVentaGetAllForAssociationResponseDto';
import DetalleVentaCreateRequestDto from '../../dtos/DetalleVenta/create/DetalleVentaCreateRequestDto';

class DetalleVentaService
{
   getAllDetalleVenta = async (): Promise<DetalleVentaGetAllResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/DetalleVenta/`);
       const bodyReponse = await response.json();
       return bodyReponse as DetalleVentaGetAllResponseDto[];
   };
   getAllForAssociationDetalleVenta = async (): Promise<DetalleVentaGetAllForAssociationResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/DetalleVenta/getAllForAssociations`);
       const bodyReponse = await response.json();
       return bodyReponse as DetalleVentaGetAllForAssociationResponseDto[];
   };

    getById = async (id:number): Promise<DetalleVentaGetByIdResponseDto> => {
       const response = await HttpClient.get(`api/v1/DetalleVenta/${id}/`);
       const bodyResponse = await response.json();
       return bodyResponse as DetalleVentaGetByIdResponseDto;
    }

   postCreateDetalleVenta = async (detalleVentaCreateRequestDto : DetalleVentaCreateRequestDto): Promise<Response> => {
       return await HttpClient.post(`api/v1/DetalleVenta/`, detalleVentaCreateRequestDto);
   };

   deleteDetalleVenta = async (id : number): Promise<Response> => {
       return await HttpClient.delete(`api/v1/DetalleVenta/${id}`);
   };


}

export default new DetalleVentaService()
