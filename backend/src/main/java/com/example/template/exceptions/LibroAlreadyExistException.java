package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class LibroAlreadyExistException extends ResponseException{
    public LibroAlreadyExistException() {
        super("El/La Libro ya existe ", HttpStatus.BAD_REQUEST);
    }
}
