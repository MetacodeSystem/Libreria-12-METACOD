package com.example.template.mappers;

import com.example.template.dtos.PersonaRequestDTO;
import com.example.template.dtos.PersonaResponseDTO;
import com.example.template.dtos.PersonaCreateRequestDTO;
import com.example.template.dtos.PersonaGetByIdResponseDTO;
import com.example.template.dtos.PersonaGetAllForAssociationResponseDTO;
import com.example.template.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MapperPersona {

       public Persona toPersona(PersonaCreateRequestDTO PersonaCreateRequestDTO){
        Persona Persona = new Persona();
        Persona.setNombre(PersonaCreateRequestDTO.getNombre());
        Persona.setApellido(PersonaCreateRequestDTO.getApellido());
        Persona.setCuit(PersonaCreateRequestDTO.getCuit());

        return Persona;
    }

    public Persona CreateDtoToPersona(PersonaCreateRequestDTO PersonaCreateRequestDTO){
        Persona Persona = new Persona();
        Persona.setNombre(PersonaCreateRequestDTO.getNombre());
        Persona.setApellido(PersonaCreateRequestDTO.getApellido());
        Persona.setCuit(PersonaCreateRequestDTO.getCuit());

        return Persona;
    }

    public Persona toPersona(PersonaRequestDTO PersonaRequestDTO, long id){
        Persona Persona = new Persona();
        Persona.setNombre(PersonaRequestDTO.getNombre());
        Persona.setApellido(PersonaRequestDTO.getApellido());
        Persona.setCuit(PersonaRequestDTO.getCuit());

        return Persona;
    }

    public PersonaResponseDTO toPersonaResponseDTO(Persona Persona){
        PersonaResponseDTO PersonaResponseDTO = new PersonaResponseDTO();
PersonaResponseDTO.setPersonaId(Persona.getPersonaId());
        PersonaResponseDTO.setNombre(Persona.getNombre());
        PersonaResponseDTO.setApellido(Persona.getApellido());
        PersonaResponseDTO.setCuit(Persona.getCuit());

        return PersonaResponseDTO;
    }

    public PersonaGetByIdResponseDTO toPersonaGetByIdResponseDTO(Persona persona){
        PersonaGetByIdResponseDTO personaGetByIdResponseDTO = new PersonaGetByIdResponseDTO();
       personaGetByIdResponseDTO.setNombre(persona.getNombre());
       personaGetByIdResponseDTO.setApellido(persona.getApellido());
       personaGetByIdResponseDTO.setCuit(persona.getCuit());
       personaGetByIdResponseDTO.setPersonaId(persona.getPersonaId());

        return personaGetByIdResponseDTO;
    }

    public PersonaGetAllForAssociationResponseDTO toPersonaGetAllForAssociationResponseDTO(Persona persona){
        PersonaGetAllForAssociationResponseDTO personaGetAllForAssociationResponseDTO = new PersonaGetAllForAssociationResponseDTO();
       personaGetAllForAssociationResponseDTO.setNombre(persona.getNombre());
       personaGetAllForAssociationResponseDTO.setPersonaId(persona.getPersonaId());

        return personaGetAllForAssociationResponseDTO;
    }

}
