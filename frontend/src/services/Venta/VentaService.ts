import HttpClient from './../HttpClient';
import VentaGetAllResponseDto from '../../dtos/Venta/getAll/VentaGetAllResponseDto';
import VentaGetByIdResponseDto from '../../dtos/Venta/getById/VentaGetByIdResponseDto';
import VentaGetAllForAssociationResponseDto from '../../dtos/Venta/getAllForAssociation/VentaGetAllForAssociationResponseDto';
import VentaCreateRequestDto from '../../dtos/Venta/create/VentaCreateRequestDto';

class VentaService
{
   getAllVenta = async (): Promise<VentaGetAllResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Venta/`);
       const bodyReponse = await response.json();
       return bodyReponse as VentaGetAllResponseDto[];
   };
   getAllForAssociationVenta = async (): Promise<VentaGetAllForAssociationResponseDto[]> => {
       const response = await HttpClient.get(`api/v1/Venta/getAllForAssociations`);
       const bodyReponse = await response.json();
       return bodyReponse as VentaGetAllForAssociationResponseDto[];
   };

    getById = async (id:number): Promise<VentaGetByIdResponseDto> => {
       const response = await HttpClient.get(`api/v1/Venta/${id}/`);
       const bodyResponse = await response.json();
       return bodyResponse as VentaGetByIdResponseDto;
    }

   postCreateVenta = async (ventaCreateRequestDto : VentaCreateRequestDto): Promise<Response> => {
       return await HttpClient.post(`api/v1/Venta/`, ventaCreateRequestDto);
   };

   deleteVenta = async (id : number): Promise<Response> => {
       return await HttpClient.delete(`api/v1/Venta/${id}`);
   };


}

export default new VentaService()
