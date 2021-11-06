package com.example.template.controllers;

import com.example.template.dtos.DetalleVentaRequestDTO;
import com.example.template.dtos.DetalleVentaResponseDTO;
import com.example.template.dtos.DetalleVentaCreateRequestDTO;
import com.example.template.dtos.DetalleVentaGetByIdResponseDTO;
import com.example.template.dtos.DetalleVentaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.DetalleVentaDontFoundException;
import com.example.template.services.IDetalleVentaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/DetalleVenta")
@AllArgsConstructor
public class DetalleVentaController {

    protected IDetalleVentaService iDetalleVentaService;
    @PostMapping("/")
    public ResponseEntity<Void> create(@Valid @RequestBody DetalleVentaCreateRequestDTO DetalleVentaCreateRequestDTO){
    iDetalleVentaService.create(DetalleVentaCreateRequestDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetalleVentaGetByIdResponseDTO> getById(@PathVariable long id) throws DetalleVentaDontFoundException {
        return new ResponseEntity<>(iDetalleVentaService.getById(id),HttpStatus.OK);
    }
    @GetMapping("/getAllForAssociations")
    public ResponseEntity<List<DetalleVentaGetAllForAssociationResponseDTO>> getAllForAssociation(){
        return new ResponseEntity<>(iDetalleVentaService.getAllForAssociation(),HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<DetalleVentaResponseDTO>> getAll(){
        return new ResponseEntity<>(iDetalleVentaService.getAll(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetalleVentaResponseDTO> update(@PathVariable long id, @Valid @RequestBody DetalleVentaRequestDTO DetalleVentaRequestDTO) throws DetalleVentaDontFoundException {
        return new ResponseEntity<>(iDetalleVentaService.update(id,DetalleVentaRequestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) throws DetalleVentaDontFoundException {
        return new ResponseEntity<>(iDetalleVentaService.delete(id),HttpStatus.NO_CONTENT);
    }
}
