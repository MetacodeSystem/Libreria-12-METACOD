package com.example.template.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;
import com.example.template.enums.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VentaGetByIdResponseDTO {
private long VentaId;
private Date Fecha;
private String NumeroVenta;
private List<DetalleVentaGetByIdResponseDTO> Detalles = new ArrayList<>();
}
