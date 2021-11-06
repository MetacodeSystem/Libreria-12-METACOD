package com.example.template.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;
import com.example.template.enums.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibroCreateRequestDTO {
private String Nombre;
private double Precio;
private Genero Genero;
private Long AutorId;
}
