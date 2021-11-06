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
@Table(name = "Persona")
@Inheritance(strategy = InheritanceType.JOINED)
public class Persona  {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long PersonaId;
private String Nombre;
private String Apellido;
private long Cuit;
}
