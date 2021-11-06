package com.example.template.mappers;

import com.example.template.dtos.DetalleVentaRequestDTO;
import com.example.template.dtos.DetalleVentaResponseDTO;
import com.example.template.dtos.DetalleVentaCreateRequestDTO;
import com.example.template.dtos.DetalleVentaGetByIdResponseDTO;
import com.example.template.dtos.DetalleVentaGetAllForAssociationResponseDTO;
import com.example.template.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MapperDetalleVenta {

       protected MapperLibro mapperLibro;
    public DetalleVenta toDetalleVenta(DetalleVentaCreateRequestDTO DetalleVentaCreateRequestDTO){
        DetalleVenta DetalleVenta = new DetalleVenta();
        DetalleVenta.setCantidad(DetalleVentaCreateRequestDTO.getCantidad());
        DetalleVenta.setSubtotal(DetalleVentaCreateRequestDTO.getSubtotal());

        return DetalleVenta;
    }

    public DetalleVenta CreateDtoToDetalleVenta(DetalleVentaCreateRequestDTO DetalleVentaCreateRequestDTO){
        DetalleVenta DetalleVenta = new DetalleVenta();
        DetalleVenta.setCantidad(DetalleVentaCreateRequestDTO.getCantidad());
        DetalleVenta.setSubtotal(DetalleVentaCreateRequestDTO.getSubtotal());

        return DetalleVenta;
    }

    public DetalleVenta toDetalleVenta(DetalleVentaRequestDTO DetalleVentaRequestDTO, long id){
        DetalleVenta DetalleVenta = new DetalleVenta();
        DetalleVenta.setCantidad(DetalleVentaRequestDTO.getCantidad());
        DetalleVenta.setSubtotal(DetalleVentaRequestDTO.getSubtotal());

        return DetalleVenta;
    }

    public DetalleVentaResponseDTO toDetalleVentaResponseDTO(DetalleVenta DetalleVenta){
        DetalleVentaResponseDTO DetalleVentaResponseDTO = new DetalleVentaResponseDTO();
DetalleVentaResponseDTO.setDetalleVentaId(DetalleVenta.getDetalleVentaId());
        DetalleVentaResponseDTO.setCantidad(DetalleVenta.getCantidad());
        DetalleVentaResponseDTO.setSubtotal(DetalleVenta.getSubtotal());

        return DetalleVentaResponseDTO;
    }

    public DetalleVentaGetByIdResponseDTO toDetalleVentaGetByIdResponseDTO(DetalleVenta detalleVenta){
        DetalleVentaGetByIdResponseDTO detalleVentaGetByIdResponseDTO = new DetalleVentaGetByIdResponseDTO();
       detalleVentaGetByIdResponseDTO.setCantidad(detalleVenta.getCantidad());
       detalleVentaGetByIdResponseDTO.setSubtotal(detalleVenta.getSubtotal());
       detalleVentaGetByIdResponseDTO.setDetalleVentaId(detalleVenta.getDetalleVentaId());

       if(detalleVenta.getLibro() != null){
            detalleVentaGetByIdResponseDTO.setLibro(mapperLibro.toLibroGetByIdResponseDTO(detalleVenta.getLibro()));
       }

        return detalleVentaGetByIdResponseDTO;
    }

    public DetalleVentaGetAllForAssociationResponseDTO toDetalleVentaGetAllForAssociationResponseDTO(DetalleVenta detalleVenta){
        DetalleVentaGetAllForAssociationResponseDTO detalleVentaGetAllForAssociationResponseDTO = new DetalleVentaGetAllForAssociationResponseDTO();
       detalleVentaGetAllForAssociationResponseDTO.setSubtotal(detalleVenta.getSubtotal());
       detalleVentaGetAllForAssociationResponseDTO.setDetalleVentaId(detalleVenta.getDetalleVentaId());

        return detalleVentaGetAllForAssociationResponseDTO;
    }

}
