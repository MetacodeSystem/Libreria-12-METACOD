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
@Table(name = "Venta")
@Inheritance(strategy = InheritanceType.JOINED)
public class Venta  {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long VentaId;
private Date Fecha;
private String NumeroVenta;
@OneToMany(cascade = CascadeType.ALL)
@JoinColumn(name = "fk_Venta")
private List<DetalleVenta> Detalles = new ArrayList<DetalleVenta>();;
}
