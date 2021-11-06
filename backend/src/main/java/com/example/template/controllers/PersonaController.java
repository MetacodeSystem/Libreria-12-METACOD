package com.example.template.controllers;

import com.example.template.dtos.PersonaRequestDTO;
import com.example.template.dtos.PersonaResponseDTO;
import com.example.template.dtos.PersonaCreateRequestDTO;
import com.example.template.dtos.PersonaGetByIdResponseDTO;
import com.example.template.dtos.PersonaGetAllForAssociationResponseDTO;
import com.example.template.exceptions.PersonaDontFoundException;
import com.example.template.services.IPersonaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/Persona")
@AllArgsConstructor
public class PersonaController {

    protected IPersonaService iPersonaService;
    @PostMapping("/")
    public ResponseEntity<Void> create(@Valid @RequestBody PersonaCreateRequestDTO PersonaCreateRequestDTO){
    iPersonaService.create(PersonaCreateRequestDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonaGetByIdResponseDTO> getById(@PathVariable long id) throws PersonaDontFoundException {
        return new ResponseEntity<>(iPersonaService.getById(id),HttpStatus.OK);
    }
    @GetMapping("/getAllForAssociations")
    public ResponseEntity<List<PersonaGetAllForAssociationResponseDTO>> getAllForAssociation(){
        return new ResponseEntity<>(iPersonaService.getAllForAssociation(),HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<PersonaResponseDTO>> getAll(){
        return new ResponseEntity<>(iPersonaService.getAll(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonaResponseDTO> update(@PathVariable long id, @Valid @RequestBody PersonaRequestDTO PersonaRequestDTO) throws PersonaDontFoundException {
        return new ResponseEntity<>(iPersonaService.update(id,PersonaRequestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) throws PersonaDontFoundException {
        return new ResponseEntity<>(iPersonaService.delete(id),HttpStatus.NO_CONTENT);
    }
}
