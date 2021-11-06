package com.example.template.services;

import com.example.template.dtos.VentaRequestDTO;
import com.example.template.dtos.VentaGetByIdResponseDTO;
import com.example.template.dtos.VentaResponseDTO;
import com.example.template.dtos.VentaCreateRequestDTO;
import com.example.template.dtos.VentaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.VentaDontFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IVentaService {
    void create(VentaCreateRequestDTO VentaCreateRequestDTO);
    VentaGetByIdResponseDTO getById(long id) throws VentaDontFoundException;
    List<VentaResponseDTO> getAll();
    List<VentaGetAllForAssociationResponseDTO> getAllForAssociation();
    VentaResponseDTO update(long id, VentaRequestDTO VentaRequestDTO) throws VentaDontFoundException;
    boolean delete(long id) throws VentaDontFoundException;
}
