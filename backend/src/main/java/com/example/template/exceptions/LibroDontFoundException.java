package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class LibroDontFoundException extends ResponseException{
    public LibroDontFoundException(long id) {
        super("El/La Libro con id "+ id +" no existe", HttpStatus.NOT_FOUND);
    }
}
