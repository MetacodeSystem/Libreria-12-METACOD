package com.example.template.services;

import com.example.template.dtos.*;
import com.example.template.exceptions.LibroDontFoundException;
import com.example.template.model.*;
import com.example.template.repositories.*;
import com.example.template.services.ILibroService;
import com.example.template.mappers.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LibroService implements ILibroService {

    protected LibroRepository LibroRepository;
    protected AutorRepository autorRepository;
    protected MapperLibro mapperLibro;


        @Override
    public void create(LibroCreateRequestDTO libroCreateRequestDTO) {
       Libro libro;
       libro = mapperLibro.CreateDtoToLibro(libroCreateRequestDTO);
       
	   if(libroCreateRequestDTO.getAutorId() != 0) {
	       Optional<Autor> optionalAutor = autorRepository.findById(libroCreateRequestDTO.getAutorId());
	
	       if(optionalAutor.isPresent()){
	       libro.setAutor(optionalAutor.get());
	       }
	    }
       LibroRepository.save(libro);
    }
    @Override
    public LibroGetByIdResponseDTO getById(long id) throws LibroDontFoundException {
        Optional<Libro> optional = LibroRepository.findById(id);
        if (optional.isEmpty()){
            throw new LibroDontFoundException(id);
        }
        Libro libro = optional.get();


        LibroGetByIdResponseDTO libroGetByIdResponseDTO = mapperLibro.toLibroGetByIdResponseDTO(libro);

        return libroGetByIdResponseDTO;
    }

    @Override
    public List<LibroResponseDTO> getAll() {
        List<Libro> LibroList;
        List<LibroResponseDTO> LibroResponseDTOList = new ArrayList<>();

        LibroList = LibroRepository.findAll();

        for (Libro Libro: LibroList) {
                LibroResponseDTO LibroResponseDTO = mapperLibro.toLibroResponseDTO(Libro);
                LibroResponseDTOList.add(LibroResponseDTO);
        }
        return LibroResponseDTOList;
    }
    @Override
    public List<LibroGetAllForAssociationResponseDTO> getAllForAssociation() {
        List<Libro> LibroList;
        List<LibroGetAllForAssociationResponseDTO> LibroGetAllForAssociationResponseDTOList = new ArrayList<>();

        LibroList = LibroRepository.findAll();

        for (Libro Libro: LibroList) {
                LibroGetAllForAssociationResponseDTO LibroGetAllForAssociationResponseDTO = mapperLibro.toLibroGetAllForAssociationResponseDTO(Libro);
                LibroGetAllForAssociationResponseDTOList.add(LibroGetAllForAssociationResponseDTO);
        }
        return LibroGetAllForAssociationResponseDTOList;
    }

    @Override
    public LibroResponseDTO update(long id, LibroRequestDTO LibroRequestDTO) throws LibroDontFoundException {
        Optional<Libro> LibroOptional  = LibroRepository.findById(id);
        if (LibroOptional.isEmpty()){
            throw new LibroDontFoundException(id);
        }
        Libro Libro = LibroOptional.get();

        Libro LibroUpdate = mapperLibro.toLibro(LibroRequestDTO,id);

       LibroUpdate = LibroRepository.save(LibroUpdate);

        LibroResponseDTO LibroResponseDTO = mapperLibro.toLibroResponseDTO(LibroUpdate);

        return LibroResponseDTO;
    }

    @Override
    public boolean delete(long id) throws LibroDontFoundException {
        Optional<Libro> LibroOptional  = LibroRepository.findById(id);

        if (LibroOptional.isEmpty()){
            throw new LibroDontFoundException(id);
        }

        Libro Libro = LibroOptional.get();
        LibroRepository.delete(Libro);

        return true;
    }
}
