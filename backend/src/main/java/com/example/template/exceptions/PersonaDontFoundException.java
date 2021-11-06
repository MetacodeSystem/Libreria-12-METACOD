package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class PersonaDontFoundException extends ResponseException{
    public PersonaDontFoundException(long id) {
        super("El/La Persona con id "+ id +" no existe", HttpStatus.NOT_FOUND);
    }
}
