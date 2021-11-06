package com.example.template.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.*;
import java.util.*;
import com.example.template.enums.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DetalleVenta")
@Inheritance(strategy = InheritanceType.JOINED)
public class DetalleVenta  {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long DetalleVentaId;
private int Cantidad;
private float Subtotal;
@OneToOne()
@JoinColumn(name = "fk_Libro")
private Libro Libro;
}
