package com.example.template.mappers;

import com.example.template.dtos.LibroRequestDTO;
import com.example.template.dtos.LibroResponseDTO;
import com.example.template.dtos.LibroCreateRequestDTO;
import com.example.template.dtos.LibroGetByIdResponseDTO;
import com.example.template.dtos.LibroGetAllForAssociationResponseDTO;
import com.example.template.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MapperLibro {

       protected MapperAutor mapperAutor;
    public Libro toLibro(LibroCreateRequestDTO LibroCreateRequestDTO){
        Libro Libro = new Libro();
        Libro.setNombre(LibroCreateRequestDTO.getNombre());
        Libro.setPrecio(LibroCreateRequestDTO.getPrecio());
        Libro.setGenero(LibroCreateRequestDTO.getGenero());

        return Libro;
    }

    public Libro CreateDtoToLibro(LibroCreateRequestDTO LibroCreateRequestDTO){
        Libro Libro = new Libro();
        Libro.setNombre(LibroCreateRequestDTO.getNombre());
        Libro.setPrecio(LibroCreateRequestDTO.getPrecio());
        Libro.setGenero(LibroCreateRequestDTO.getGenero());

        return Libro;
    }

    public Libro toLibro(LibroRequestDTO LibroRequestDTO, long id){
        Libro Libro = new Libro();
        Libro.setNombre(LibroRequestDTO.getNombre());
        Libro.setPrecio(LibroRequestDTO.getPrecio());
        Libro.setGenero(LibroRequestDTO.getGenero());

        return Libro;
    }

    public LibroResponseDTO toLibroResponseDTO(Libro Libro){
        LibroResponseDTO LibroResponseDTO = new LibroResponseDTO();
LibroResponseDTO.setLibroId(Libro.getLibroId());
        LibroResponseDTO.setNombre(Libro.getNombre());
        LibroResponseDTO.setPrecio(Libro.getPrecio());
        LibroResponseDTO.setGenero(Libro.getGenero());

        return LibroResponseDTO;
    }

    public LibroGetByIdResponseDTO toLibroGetByIdResponseDTO(Libro libro){
        LibroGetByIdResponseDTO libroGetByIdResponseDTO = new LibroGetByIdResponseDTO();
       libroGetByIdResponseDTO.setNombre(libro.getNombre());
       libroGetByIdResponseDTO.setPrecio(libro.getPrecio());
       libroGetByIdResponseDTO.setGenero(libro.getGenero());
       libroGetByIdResponseDTO.setLibroId(libro.getLibroId());

       if(libro.getAutor() != null){
            libroGetByIdResponseDTO.setAutor(mapperAutor.toAutorGetByIdResponseDTO(libro.getAutor()));
       }

        return libroGetByIdResponseDTO;
    }

    public LibroGetAllForAssociationResponseDTO toLibroGetAllForAssociationResponseDTO(Libro libro){
        LibroGetAllForAssociationResponseDTO libroGetAllForAssociationResponseDTO = new LibroGetAllForAssociationResponseDTO();
       libroGetAllForAssociationResponseDTO.setNombre(libro.getNombre());
       libroGetAllForAssociationResponseDTO.setLibroId(libro.getLibroId());

        return libroGetAllForAssociationResponseDTO;
    }

}
