package com.example.template.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;
import com.example.template.enums.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetalleVentaGetAllForAssociationResponseDTO {
private long DetalleVentaId;
private float Subtotal;
}
