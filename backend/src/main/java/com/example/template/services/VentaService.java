package com.example.template.services;

import com.example.template.dtos.*;
import com.example.template.exceptions.VentaDontFoundException;
import com.example.template.model.*;
import com.example.template.repositories.*;
import com.example.template.services.IVentaService;
import com.example.template.mappers.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VentaService implements IVentaService {

    protected VentaRepository VentaRepository;
    protected LibroRepository libroRepository;
    protected AutorRepository autorRepository;
    protected MapperDetalleVenta mapperDetalleVenta;
    protected MapperVenta mapperVenta;


        @Override
    public void create(VentaCreateRequestDTO ventaCreateRequestDTO) {
       Venta venta;
       venta = mapperVenta.CreateDtoToVenta(ventaCreateRequestDTO);
       
	   for(DetalleVentaCreateRequestDTO detalleVentaDto : ventaCreateRequestDTO.getDetalles()){
	       DetalleVenta detalleVenta = mapperDetalleVenta.toDetalleVenta(detalleVentaDto);
	
		   if(detalleVentaDto.getLibroId() != 0) {
		       Optional<Libro> optionalLibro = libroRepository.findById(detalleVentaDto.getLibroId());
		
		       if(optionalLibro.isPresent()){
		       detalleVenta.setLibro(optionalLibro.get());
		       }
		    }
	     venta.getDetalles().add(detalleVenta);
	   }
       VentaRepository.save(venta);
    }
    @Override
    public VentaGetByIdResponseDTO getById(long id) throws VentaDontFoundException {
        Optional<Venta> optional = VentaRepository.findById(id);
        if (optional.isEmpty()){
            throw new VentaDontFoundException(id);
        }
        Venta venta = optional.get();


        VentaGetByIdResponseDTO ventaGetByIdResponseDTO = mapperVenta.toVentaGetByIdResponseDTO(venta);

        return ventaGetByIdResponseDTO;
    }

    @Override
    public List<VentaResponseDTO> getAll() {
        List<Venta> VentaList;
        List<VentaResponseDTO> VentaResponseDTOList = new ArrayList<>();

        VentaList = VentaRepository.findAll();

        for (Venta Venta: VentaList) {
                VentaResponseDTO VentaResponseDTO = mapperVenta.toVentaResponseDTO(Venta);
                VentaResponseDTOList.add(VentaResponseDTO);
        }
        return VentaResponseDTOList;
    }
    @Override
    public List<VentaGetAllForAssociationResponseDTO> getAllForAssociation() {
        List<Venta> VentaList;
        List<VentaGetAllForAssociationResponseDTO> VentaGetAllForAssociationResponseDTOList = new ArrayList<>();

        VentaList = VentaRepository.findAll();

        for (Venta Venta: VentaList) {
                VentaGetAllForAssociationResponseDTO VentaGetAllForAssociationResponseDTO = mapperVenta.toVentaGetAllForAssociationResponseDTO(Venta);
                VentaGetAllForAssociationResponseDTOList.add(VentaGetAllForAssociationResponseDTO);
        }
        return VentaGetAllForAssociationResponseDTOList;
    }

    @Override
    public VentaResponseDTO update(long id, VentaRequestDTO VentaRequestDTO) throws VentaDontFoundException {
        Optional<Venta> VentaOptional  = VentaRepository.findById(id);
        if (VentaOptional.isEmpty()){
            throw new VentaDontFoundException(id);
        }
        Venta Venta = VentaOptional.get();

        Venta VentaUpdate = mapperVenta.toVenta(VentaRequestDTO,id);

       VentaUpdate = VentaRepository.save(VentaUpdate);

        VentaResponseDTO VentaResponseDTO = mapperVenta.toVentaResponseDTO(VentaUpdate);

        return VentaResponseDTO;
    }

    @Override
    public boolean delete(long id) throws VentaDontFoundException {
        Optional<Venta> VentaOptional  = VentaRepository.findById(id);

        if (VentaOptional.isEmpty()){
            throw new VentaDontFoundException(id);
        }

        Venta Venta = VentaOptional.get();
        VentaRepository.delete(Venta);

        return true;
    }
}
