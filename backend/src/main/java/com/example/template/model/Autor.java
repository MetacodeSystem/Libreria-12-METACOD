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
@Table(name = "Autor")
@Inheritance(strategy = InheritanceType.JOINED)
@PrimaryKeyJoinColumn(referencedColumnName = "personaId")
public class Autor extends Persona {

private String Biografia;
}
