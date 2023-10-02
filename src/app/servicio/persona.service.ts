import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiUrl = '/api/personas'; // La URL de tu API

  constructor(private http: HttpClient) {}

  listarPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/`);
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  guardarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiUrl}/`, persona);
  }

  actualizarPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  eliminarPersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Agrega otros métodos según tu API
}

