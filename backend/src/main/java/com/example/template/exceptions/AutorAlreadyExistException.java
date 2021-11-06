package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class AutorAlreadyExistException extends ResponseException{
    public AutorAlreadyExistException() {
        super("El/La Autor ya existe ", HttpStatus.BAD_REQUEST);
    }
}
