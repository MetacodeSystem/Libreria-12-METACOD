package com.example.template.services;

import com.example.template.dtos.*;
import com.example.template.exceptions.AutorDontFoundException;
import com.example.template.model.*;
import com.example.template.repositories.*;
import com.example.template.services.IAutorService;
import com.example.template.mappers.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AutorService implements IAutorService {

    protected AutorRepository AutorRepository;
    protected MapperAutor mapperAutor;


        @Override
    public void create(AutorCreateRequestDTO autorCreateRequestDTO) {
       Autor autor;
       autor = mapperAutor.CreateDtoToAutor(autorCreateRequestDTO);
       
	
		
       AutorRepository.save(autor);
    }
    @Override
    public AutorGetByIdResponseDTO getById(long id) throws AutorDontFoundException {
        Optional<Autor> optional = AutorRepository.findById(id);
        if (optional.isEmpty()){
            throw new AutorDontFoundException(id);
        }
        Autor autor = optional.get();


        AutorGetByIdResponseDTO autorGetByIdResponseDTO = mapperAutor.toAutorGetByIdResponseDTO(autor);

        return autorGetByIdResponseDTO;
    }

    @Override
    public List<AutorResponseDTO> getAll() {
        List<Autor> AutorList;
        List<AutorResponseDTO> AutorResponseDTOList = new ArrayList<>();

        AutorList = AutorRepository.findAll();

        for (Autor Autor: AutorList) {
                AutorResponseDTO AutorResponseDTO = mapperAutor.toAutorResponseDTO(Autor);
                AutorResponseDTOList.add(AutorResponseDTO);
        }
        return AutorResponseDTOList;
    }
    @Override
    public List<AutorGetAllForAssociationResponseDTO> getAllForAssociation() {
        List<Autor> AutorList;
        List<AutorGetAllForAssociationResponseDTO> AutorGetAllForAssociationResponseDTOList = new ArrayList<>();

        AutorList = AutorRepository.findAll();

        for (Autor Autor: AutorList) {
                AutorGetAllForAssociationResponseDTO AutorGetAllForAssociationResponseDTO = mapperAutor.toAutorGetAllForAssociationResponseDTO(Autor);
                AutorGetAllForAssociationResponseDTOList.add(AutorGetAllForAssociationResponseDTO);
        }
        return AutorGetAllForAssociationResponseDTOList;
    }

    @Override
    public AutorResponseDTO update(long id, AutorRequestDTO AutorRequestDTO) throws AutorDontFoundException {
        Optional<Autor> AutorOptional  = AutorRepository.findById(id);
        if (AutorOptional.isEmpty()){
            throw new AutorDontFoundException(id);
        }
        Autor Autor = AutorOptional.get();

        Autor AutorUpdate = mapperAutor.toAutor(AutorRequestDTO,id);

       AutorUpdate = AutorRepository.save(AutorUpdate);

        AutorResponseDTO AutorResponseDTO = mapperAutor.toAutorResponseDTO(AutorUpdate);

        return AutorResponseDTO;
    }

    @Override
    public boolean delete(long id) throws AutorDontFoundException {
        Optional<Autor> AutorOptional  = AutorRepository.findById(id);

        if (AutorOptional.isEmpty()){
            throw new AutorDontFoundException(id);
        }

        Autor Autor = AutorOptional.get();
        AutorRepository.delete(Autor);

        return true;
    }
}
