package com.example.template.services;

import com.example.template.dtos.*;
import com.example.template.exceptions.DetalleVentaDontFoundException;
import com.example.template.model.*;
import com.example.template.repositories.*;
import com.example.template.services.IDetalleVentaService;
import com.example.template.mappers.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DetalleVentaService implements IDetalleVentaService {

    protected DetalleVentaRepository DetalleVentaRepository;
    protected LibroRepository libroRepository;
    protected AutorRepository autorRepository;
    protected MapperDetalleVenta mapperDetalleVenta;


        @Override
    public void create(DetalleVentaCreateRequestDTO detalleVentaCreateRequestDTO) {
       DetalleVenta detalleVenta;
       detalleVenta = mapperDetalleVenta.CreateDtoToDetalleVenta(detalleVentaCreateRequestDTO);
       
	   if(detalleVentaCreateRequestDTO.getLibroId() != 0) {
	       Optional<Libro> optionalLibro = libroRepository.findById(detalleVentaCreateRequestDTO.getLibroId());
	
	       if(optionalLibro.isPresent()){
	       detalleVenta.setLibro(optionalLibro.get());
	       }
	    }
       DetalleVentaRepository.save(detalleVenta);
    }
    @Override
    public DetalleVentaGetByIdResponseDTO getById(long id) throws DetalleVentaDontFoundException {
        Optional<DetalleVenta> optional = DetalleVentaRepository.findById(id);
        if (optional.isEmpty()){
            throw new DetalleVentaDontFoundException(id);
        }
        DetalleVenta detalleVenta = optional.get();


        DetalleVentaGetByIdResponseDTO detalleVentaGetByIdResponseDTO = mapperDetalleVenta.toDetalleVentaGetByIdResponseDTO(detalleVenta);

        return detalleVentaGetByIdResponseDTO;
    }

    @Override
    public List<DetalleVentaResponseDTO> getAll() {
        List<DetalleVenta> DetalleVentaList;
        List<DetalleVentaResponseDTO> DetalleVentaResponseDTOList = new ArrayList<>();

        DetalleVentaList = DetalleVentaRepository.findAll();

        for (DetalleVenta DetalleVenta: DetalleVentaList) {
                DetalleVentaResponseDTO DetalleVentaResponseDTO = mapperDetalleVenta.toDetalleVentaResponseDTO(DetalleVenta);
                DetalleVentaResponseDTOList.add(DetalleVentaResponseDTO);
        }
        return DetalleVentaResponseDTOList;
    }
    @Override
    public List<DetalleVentaGetAllForAssociationResponseDTO> getAllForAssociation() {
        List<DetalleVenta> DetalleVentaList;
        List<DetalleVentaGetAllForAssociationResponseDTO> DetalleVentaGetAllForAssociationResponseDTOList = new ArrayList<>();

        DetalleVentaList = DetalleVentaRepository.findAll();

        for (DetalleVenta DetalleVenta: DetalleVentaList) {
                DetalleVentaGetAllForAssociationResponseDTO DetalleVentaGetAllForAssociationResponseDTO = mapperDetalleVenta.toDetalleVentaGetAllForAssociationResponseDTO(DetalleVenta);
                DetalleVentaGetAllForAssociationResponseDTOList.add(DetalleVentaGetAllForAssociationResponseDTO);
        }
        return DetalleVentaGetAllForAssociationResponseDTOList;
    }

    @Override
    public DetalleVentaResponseDTO update(long id, DetalleVentaRequestDTO DetalleVentaRequestDTO) throws DetalleVentaDontFoundException {
        Optional<DetalleVenta> DetalleVentaOptional  = DetalleVentaRepository.findById(id);
        if (DetalleVentaOptional.isEmpty()){
            throw new DetalleVentaDontFoundException(id);
        }
        DetalleVenta DetalleVenta = DetalleVentaOptional.get();

        DetalleVenta DetalleVentaUpdate = mapperDetalleVenta.toDetalleVenta(DetalleVentaRequestDTO,id);

       DetalleVentaUpdate = DetalleVentaRepository.save(DetalleVentaUpdate);

        DetalleVentaResponseDTO DetalleVentaResponseDTO = mapperDetalleVenta.toDetalleVentaResponseDTO(DetalleVentaUpdate);

        return DetalleVentaResponseDTO;
    }

    @Override
    public boolean delete(long id) throws DetalleVentaDontFoundException {
        Optional<DetalleVenta> DetalleVentaOptional  = DetalleVentaRepository.findById(id);

        if (DetalleVentaOptional.isEmpty()){
            throw new DetalleVentaDontFoundException(id);
        }

        DetalleVenta DetalleVenta = DetalleVentaOptional.get();
        DetalleVentaRepository.delete(DetalleVenta);

        return true;
    }
}
