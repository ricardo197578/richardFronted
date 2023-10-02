import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../../persona.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];

  
  constructor(private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(): void {
    this.personaService.listarPersonas().subscribe((personas) => {
      this.personas = personas;
    });
  }
}

