package com.example.template.services;

import com.example.template.dtos.*;
import com.example.template.exceptions.PersonaDontFoundException;
import com.example.template.model.*;
import com.example.template.repositories.*;
import com.example.template.services.IPersonaService;
import com.example.template.mappers.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PersonaService implements IPersonaService {

    protected PersonaRepository PersonaRepository;
    protected MapperPersona mapperPersona;


        @Override
    public void create(PersonaCreateRequestDTO personaCreateRequestDTO) {
       Persona persona;
       persona = mapperPersona.CreateDtoToPersona(personaCreateRequestDTO);
       
	
       PersonaRepository.save(persona);
    }
    @Override
    public PersonaGetByIdResponseDTO getById(long id) throws PersonaDontFoundException {
        Optional<Persona> optional = PersonaRepository.findById(id);
        if (optional.isEmpty()){
            throw new PersonaDontFoundException(id);
        }
        Persona persona = optional.get();


        PersonaGetByIdResponseDTO personaGetByIdResponseDTO = mapperPersona.toPersonaGetByIdResponseDTO(persona);

        return personaGetByIdResponseDTO;
    }

    @Override
    public List<PersonaResponseDTO> getAll() {
        List<Persona> PersonaList;
        List<PersonaResponseDTO> PersonaResponseDTOList = new ArrayList<>();

        PersonaList = PersonaRepository.findAll();

        for (Persona Persona: PersonaList) {
                PersonaResponseDTO PersonaResponseDTO = mapperPersona.toPersonaResponseDTO(Persona);
                PersonaResponseDTOList.add(PersonaResponseDTO);
        }
        return PersonaResponseDTOList;
    }
    @Override
    public List<PersonaGetAllForAssociationResponseDTO> getAllForAssociation() {
        List<Persona> PersonaList;
        List<PersonaGetAllForAssociationResponseDTO> PersonaGetAllForAssociationResponseDTOList = new ArrayList<>();

        PersonaList = PersonaRepository.findAll();

        for (Persona Persona: PersonaList) {
                PersonaGetAllForAssociationResponseDTO PersonaGetAllForAssociationResponseDTO = mapperPersona.toPersonaGetAllForAssociationResponseDTO(Persona);
                PersonaGetAllForAssociationResponseDTOList.add(PersonaGetAllForAssociationResponseDTO);
        }
        return PersonaGetAllForAssociationResponseDTOList;
    }

    @Override
    public PersonaResponseDTO update(long id, PersonaRequestDTO PersonaRequestDTO) throws PersonaDontFoundException {
        Optional<Persona> PersonaOptional  = PersonaRepository.findById(id);
        if (PersonaOptional.isEmpty()){
            throw new PersonaDontFoundException(id);
        }
        Persona Persona = PersonaOptional.get();

        Persona PersonaUpdate = mapperPersona.toPersona(PersonaRequestDTO,id);

       PersonaUpdate = PersonaRepository.save(PersonaUpdate);

        PersonaResponseDTO PersonaResponseDTO = mapperPersona.toPersonaResponseDTO(PersonaUpdate);

        return PersonaResponseDTO;
    }

    @Override
    public boolean delete(long id) throws PersonaDontFoundException {
        Optional<Persona> PersonaOptional  = PersonaRepository.findById(id);

        if (PersonaOptional.isEmpty()){
            throw new PersonaDontFoundException(id);
        }

        Persona Persona = PersonaOptional.get();
        PersonaRepository.delete(Persona);

        return true;
    }
}
