package com.example.template.controllers;

import com.example.template.dtos.VentaRequestDTO;
import com.example.template.dtos.VentaResponseDTO;
import com.example.template.dtos.VentaCreateRequestDTO;
import com.example.template.dtos.VentaGetByIdResponseDTO;
import com.example.template.dtos.VentaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.VentaDontFoundException;
import com.example.template.services.IVentaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/Venta")
@AllArgsConstructor
public class VentaController {

    protected IVentaService iVentaService;
    @PostMapping("/")
    public ResponseEntity<Void> create(@Valid @RequestBody VentaCreateRequestDTO VentaCreateRequestDTO){
    iVentaService.create(VentaCreateRequestDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VentaGetByIdResponseDTO> getById(@PathVariable long id) throws VentaDontFoundException {
        return new ResponseEntity<>(iVentaService.getById(id),HttpStatus.OK);
    }
    @GetMapping("/getAllForAssociations")
    public ResponseEntity<List<VentaGetAllForAssociationResponseDTO>> getAllForAssociation(){
        return new ResponseEntity<>(iVentaService.getAllForAssociation(),HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<VentaResponseDTO>> getAll(){
        return new ResponseEntity<>(iVentaService.getAll(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VentaResponseDTO> update(@PathVariable long id, @Valid @RequestBody VentaRequestDTO VentaRequestDTO) throws VentaDontFoundException {
        return new ResponseEntity<>(iVentaService.update(id,VentaRequestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) throws VentaDontFoundException {
        return new ResponseEntity<>(iVentaService.delete(id),HttpStatus.NO_CONTENT);
    }
}
