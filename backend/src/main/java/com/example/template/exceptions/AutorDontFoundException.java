package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class AutorDontFoundException extends ResponseException{
    public AutorDontFoundException(long id) {
        super("El/La Autor con id "+ id +" no existe", HttpStatus.NOT_FOUND);
    }
}
