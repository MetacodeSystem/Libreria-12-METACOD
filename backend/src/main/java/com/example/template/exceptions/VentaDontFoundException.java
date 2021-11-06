package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class VentaDontFoundException extends ResponseException{
    public VentaDontFoundException(long id) {
        super("El/La Venta con id "+ id +" no existe", HttpStatus.NOT_FOUND);
    }
}
