package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class DetalleVentaAlreadyExistException extends ResponseException{
    public DetalleVentaAlreadyExistException() {
        super("El/La DetalleVenta ya existe ", HttpStatus.BAD_REQUEST);
    }
}
