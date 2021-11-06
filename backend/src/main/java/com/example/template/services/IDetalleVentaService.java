package com.example.template.services;

import com.example.template.dtos.DetalleVentaRequestDTO;
import com.example.template.dtos.DetalleVentaGetByIdResponseDTO;
import com.example.template.dtos.DetalleVentaResponseDTO;
import com.example.template.dtos.DetalleVentaCreateRequestDTO;
import com.example.template.dtos.DetalleVentaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.DetalleVentaDontFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IDetalleVentaService {
    void create(DetalleVentaCreateRequestDTO DetalleVentaCreateRequestDTO);
    DetalleVentaGetByIdResponseDTO getById(long id) throws DetalleVentaDontFoundException;
    List<DetalleVentaResponseDTO> getAll();
    List<DetalleVentaGetAllForAssociationResponseDTO> getAllForAssociation();
    DetalleVentaResponseDTO update(long id, DetalleVentaRequestDTO DetalleVentaRequestDTO) throws DetalleVentaDontFoundException;
    boolean delete(long id) throws DetalleVentaDontFoundException;
}
