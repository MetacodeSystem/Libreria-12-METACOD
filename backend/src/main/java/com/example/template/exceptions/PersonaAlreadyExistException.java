package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class PersonaAlreadyExistException extends ResponseException{
    public PersonaAlreadyExistException() {
        super("El/La Persona ya existe ", HttpStatus.BAD_REQUEST);
    }
}
