package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class DetalleVentaDontFoundException extends ResponseException{
    public DetalleVentaDontFoundException(long id) {
        super("El/La DetalleVenta con id "+ id +" no existe", HttpStatus.NOT_FOUND);
    }
}
