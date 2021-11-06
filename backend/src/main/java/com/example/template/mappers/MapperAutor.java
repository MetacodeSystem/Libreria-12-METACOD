package com.example.template.mappers;

import com.example.template.dtos.AutorRequestDTO;
import com.example.template.dtos.AutorResponseDTO;
import com.example.template.dtos.AutorCreateRequestDTO;
import com.example.template.dtos.AutorGetByIdResponseDTO;
import com.example.template.dtos.AutorGetAllForAssociationResponseDTO;
import com.example.template.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MapperAutor {

       public Autor toAutor(AutorCreateRequestDTO AutorCreateRequestDTO){
        Autor Autor = new Autor();
        Autor.setNombre(AutorCreateRequestDTO.getNombre());
        Autor.setApellido(AutorCreateRequestDTO.getApellido());
        Autor.setCuit(AutorCreateRequestDTO.getCuit());
        Autor.setBiografia(AutorCreateRequestDTO.getBiografia());

        return Autor;
    }

    public Autor CreateDtoToAutor(AutorCreateRequestDTO AutorCreateRequestDTO){
        Autor Autor = new Autor();
        Autor.setNombre(AutorCreateRequestDTO.getNombre());
        Autor.setApellido(AutorCreateRequestDTO.getApellido());
        Autor.setCuit(AutorCreateRequestDTO.getCuit());
        Autor.setBiografia(AutorCreateRequestDTO.getBiografia());

        return Autor;
    }

    public Autor toAutor(AutorRequestDTO AutorRequestDTO, long id){
        Autor Autor = new Autor();
        Autor.setNombre(AutorRequestDTO.getNombre());
        Autor.setApellido(AutorRequestDTO.getApellido());
        Autor.setCuit(AutorRequestDTO.getCuit());
        Autor.setBiografia(AutorRequestDTO.getBiografia());

        return Autor;
    }

    public AutorResponseDTO toAutorResponseDTO(Autor Autor){
        AutorResponseDTO AutorResponseDTO = new AutorResponseDTO();
AutorResponseDTO.setAutorId(Autor.getPersonaId());
        AutorResponseDTO.setNombre(Autor.getNombre());
        AutorResponseDTO.setApellido(Autor.getApellido());
        AutorResponseDTO.setCuit(Autor.getCuit());
        AutorResponseDTO.setBiografia(Autor.getBiografia());

        return AutorResponseDTO;
    }

    public AutorGetByIdResponseDTO toAutorGetByIdResponseDTO(Autor autor){
        AutorGetByIdResponseDTO autorGetByIdResponseDTO = new AutorGetByIdResponseDTO();
       autorGetByIdResponseDTO.setNombre(autor.getNombre());
       autorGetByIdResponseDTO.setApellido(autor.getApellido());
       autorGetByIdResponseDTO.setCuit(autor.getCuit());
       autorGetByIdResponseDTO.setAutorId(autor.getPersonaId());

        return autorGetByIdResponseDTO;
    }

    public AutorGetAllForAssociationResponseDTO toAutorGetAllForAssociationResponseDTO(Autor autor){
        AutorGetAllForAssociationResponseDTO autorGetAllForAssociationResponseDTO = new AutorGetAllForAssociationResponseDTO();
       autorGetAllForAssociationResponseDTO.setNombre(autor.getNombre());
       autorGetAllForAssociationResponseDTO.setAutorId(autor.getPersonaId());

        return autorGetAllForAssociationResponseDTO;
    }

}
