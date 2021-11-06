package com.example.template.services;

import com.example.template.dtos.LibroRequestDTO;
import com.example.template.dtos.LibroGetByIdResponseDTO;
import com.example.template.dtos.LibroResponseDTO;
import com.example.template.dtos.LibroCreateRequestDTO;
import com.example.template.dtos.LibroGetAllForAssociationResponseDTO;
import com.example.template.exceptions.LibroDontFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ILibroService {
    void create(LibroCreateRequestDTO LibroCreateRequestDTO);
    LibroGetByIdResponseDTO getById(long id) throws LibroDontFoundException;
    List<LibroResponseDTO> getAll();
    List<LibroGetAllForAssociationResponseDTO> getAllForAssociation();
    LibroResponseDTO update(long id, LibroRequestDTO LibroRequestDTO) throws LibroDontFoundException;
    boolean delete(long id) throws LibroDontFoundException;
}
