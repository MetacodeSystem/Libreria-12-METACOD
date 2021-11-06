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
@Table(name = "Libro")
@Inheritance(strategy = InheritanceType.JOINED)
public class Libro  {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long LibroId;
private String Nombre;
private double Precio;
private Genero Genero;
@OneToOne()
@JoinColumn(name = "fk_Autor")
private Autor Autor;
}
