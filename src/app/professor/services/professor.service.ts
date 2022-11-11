import { Injectable } from '@angular/core';
import { ProfessorModel } from '../model/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor() { }

  cadastrarProfessor(professor: ProfessorModel): void {
    let professores:ProfessorModel[] = this.listarProfessores();
    professores.push(professor);
    localStorage.setItem('professores', JSON.stringify(professores));
  }

  atualizarProfessor(professor: ProfessorModel): void {
    let professores: ProfessorModel[] = this.listarProfessores();

    for(let i = 0; i < professores.length; i++) {
      if (professor.id === professores[i].id) {
        professores[i] = professor;
      }
      localStorage.setItem('professores', JSON.stringify(professores));
    }
  }


   listarProfessores(): ProfessorModel[] {
    return JSON.parse(localStorage.getItem('professores')!) as ProfessorModel[] ?? [];
  }

  removerProfessor(id:string): void {
    let professores:ProfessorModel[] = this.listarProfessores();

    let novoProfessor:ProfessorModel[] = [];

    for(let i = 0; i < professores.length; i++) {
      if(professores[i].id !== id) {
        novoProfessor.push(professores[i]);
      }
    }

    professores = novoProfessor;

    localStorage.setItem('professores', JSON.stringify(professores));
  }

  localizarProfessor(id:string): ProfessorModel {
    const professores:ProfessorModel[] = this.listarProfessores();
    let professor!:ProfessorModel;
    for(let i = 0; i < professores.length; i++) {
      if(professores[i].id === id) {
        professor = professores[i];
        break;
      }
    }
    return professor;
  }
}
