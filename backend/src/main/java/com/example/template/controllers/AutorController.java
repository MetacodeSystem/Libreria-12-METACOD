package com.example.template.controllers;

import com.example.template.dtos.AutorRequestDTO;
import com.example.template.dtos.AutorResponseDTO;
import com.example.template.dtos.AutorCreateRequestDTO;
import com.example.template.dtos.AutorGetByIdResponseDTO;
import com.example.template.dtos.AutorGetAllForAssociationResponseDTO;
import com.example.template.exceptions.AutorDontFoundException;
import com.example.template.services.IAutorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/Autor")
@AllArgsConstructor
public class AutorController {

    protected IAutorService iAutorService;
    @PostMapping("/")
    public ResponseEntity<Void> create(@Valid @RequestBody AutorCreateRequestDTO AutorCreateRequestDTO){
    iAutorService.create(AutorCreateRequestDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutorGetByIdResponseDTO> getById(@PathVariable long id) throws AutorDontFoundException {
        return new ResponseEntity<>(iAutorService.getById(id),HttpStatus.OK);
    }
    @GetMapping("/getAllForAssociations")
    public ResponseEntity<List<AutorGetAllForAssociationResponseDTO>> getAllForAssociation(){
        return new ResponseEntity<>(iAutorService.getAllForAssociation(),HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<AutorResponseDTO>> getAll(){
        return new ResponseEntity<>(iAutorService.getAll(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AutorResponseDTO> update(@PathVariable long id, @Valid @RequestBody AutorRequestDTO AutorRequestDTO) throws AutorDontFoundException {
        return new ResponseEntity<>(iAutorService.update(id,AutorRequestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) throws AutorDontFoundException {
        return new ResponseEntity<>(iAutorService.delete(id),HttpStatus.NO_CONTENT);
    }
}
