import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from '../model/professor.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  professores!:ProfessorModel[];
  displayedColumns: string[] = ['professor', 'id', 'materia', 'turno', 'salario'];
  dataSource!:MatTableDataSource<ProfessorModel>;
  clickedRow!:ProfessorModel;

  constructor(
    private professorService: ProfessorService
  ) {}

  ngOnInit(): void {
    this.professores = this.professorService.listarProfessores();
    this.dataSource = new MatTableDataSource(this.professores);
  }

  listarProfessores(): ProfessorModel[] {
    return this.professores;
  }

}
