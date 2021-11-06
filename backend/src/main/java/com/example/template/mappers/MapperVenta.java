package com.example.template.mappers;

import com.example.template.dtos.VentaRequestDTO;
import com.example.template.dtos.VentaResponseDTO;
import com.example.template.dtos.VentaCreateRequestDTO;
import com.example.template.dtos.VentaGetByIdResponseDTO;
import com.example.template.dtos.VentaGetAllForAssociationResponseDTO;
import com.example.template.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MapperVenta {

       protected MapperDetalleVenta mapperDetalleVenta;
    public Venta toVenta(VentaCreateRequestDTO VentaCreateRequestDTO){
        Venta Venta = new Venta();
        Venta.setFecha(VentaCreateRequestDTO.getFecha());
        Venta.setNumeroVenta(VentaCreateRequestDTO.getNumeroVenta());

        return Venta;
    }

    public Venta CreateDtoToVenta(VentaCreateRequestDTO VentaCreateRequestDTO){
        Venta Venta = new Venta();
        Venta.setFecha(VentaCreateRequestDTO.getFecha());
        Venta.setNumeroVenta(VentaCreateRequestDTO.getNumeroVenta());

        return Venta;
    }

    public Venta toVenta(VentaRequestDTO VentaRequestDTO, long id){
        Venta Venta = new Venta();
        Venta.setFecha(VentaRequestDTO.getFecha());
        Venta.setNumeroVenta(VentaRequestDTO.getNumeroVenta());

        return Venta;
    }

    public VentaResponseDTO toVentaResponseDTO(Venta Venta){
        VentaResponseDTO VentaResponseDTO = new VentaResponseDTO();
VentaResponseDTO.setVentaId(Venta.getVentaId());
        VentaResponseDTO.setFecha(Venta.getFecha());
        VentaResponseDTO.setNumeroVenta(Venta.getNumeroVenta());

        return VentaResponseDTO;
    }

    public VentaGetByIdResponseDTO toVentaGetByIdResponseDTO(Venta venta){
        VentaGetByIdResponseDTO ventaGetByIdResponseDTO = new VentaGetByIdResponseDTO();
       ventaGetByIdResponseDTO.setFecha(venta.getFecha());
       ventaGetByIdResponseDTO.setNumeroVenta(venta.getNumeroVenta());
       ventaGetByIdResponseDTO.setVentaId(venta.getVentaId());

       for(DetalleVenta detalleVenta : venta.getDetalles()){
           ventaGetByIdResponseDTO.getDetalles().add(mapperDetalleVenta.toDetalleVentaGetByIdResponseDTO(detalleVenta));
       }

        return ventaGetByIdResponseDTO;
    }

    public VentaGetAllForAssociationResponseDTO toVentaGetAllForAssociationResponseDTO(Venta venta){
        VentaGetAllForAssociationResponseDTO ventaGetAllForAssociationResponseDTO = new VentaGetAllForAssociationResponseDTO();
       ventaGetAllForAssociationResponseDTO.setNumeroVenta(venta.getNumeroVenta());
       ventaGetAllForAssociationResponseDTO.setVentaId(venta.getVentaId());

        return ventaGetAllForAssociationResponseDTO;
    }

}
