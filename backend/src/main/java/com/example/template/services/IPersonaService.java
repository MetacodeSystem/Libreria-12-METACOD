package com.example.template.services;

import com.example.template.dtos.PersonaRequestDTO;
import com.example.template.dtos.PersonaGetByIdResponseDTO;
import com.example.template.dtos.PersonaResponseDTO;
import com.example.template.dtos.PersonaCreateRequestDTO;
import com.example.template.dtos.PersonaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.PersonaDontFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPersonaService {
    void create(PersonaCreateRequestDTO PersonaCreateRequestDTO);
    PersonaGetByIdResponseDTO getById(long id) throws PersonaDontFoundException;
    List<PersonaResponseDTO> getAll();
    List<PersonaGetAllForAssociationResponseDTO> getAllForAssociation();
    PersonaResponseDTO update(long id, PersonaRequestDTO PersonaRequestDTO) throws PersonaDontFoundException;
    boolean delete(long id) throws PersonaDontFoundException;
}
