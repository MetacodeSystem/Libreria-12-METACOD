package com.example.template.exceptions;

import org.springframework.http.HttpStatus;

public class VentaAlreadyExistException extends ResponseException{
    public VentaAlreadyExistException() {
        super("El/La Venta ya existe ", HttpStatus.BAD_REQUEST);
    }
}
