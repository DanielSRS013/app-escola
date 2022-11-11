import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessorModel } from '../model/professor.model';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  professorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.professorForm = this.formBuilder.group({
      inputNome: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputId: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputSalario: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputMaterias: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputTurno: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
    });
  } //

  cadastrarProfessor() {
    const professor = this.professorForm.getRawValue() as ProfessorModel;
    professor.id = this.professorForm.get('inputId')!.value;
    professor.nomeProfessor = this.professorForm.get('inputNome')!.value;
    professor.salarioProfessor = this.professorForm.get('inputSalario')!.value;
    professor.materiasLecionadas = this.professorForm.get('inputMaterias')!.value;
    professor.turnosDisponiveis = this.professorForm.get('inputTurno')!.value;

    this.professorService.cadastrarProfessor(professor);
  }

  get getId() { return this.professorForm.get('inputId')!; }
  get getNome() { return this.professorForm.get('inputNome')!; }
  get getSalarioProfessor() { return this.professorForm.get('inputSalario')!; }
  get getMateriasLecionadas() { return this.professorForm.get('inputMaterias')!; }
  get getTurnosDisponiveis() { return this.professorForm.get('inputTurno')!; }

}
