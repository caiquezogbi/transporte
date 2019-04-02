import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService, Apresentacao, Aluno } from '../AlunoService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.scss'],
})
export class ListaAlunoComponent implements OnInit {

  alunos: any[] = [];

  constructor(private cands: AlunoService, 
    private meuRouter: Router,
    private http: HttpClient,
   ) { }

  ngOnInit() {
    
  }

  cardClick(valor){
    
    alert('clicou em: '+ valor.aluno);
  }

  

  navegar(){
  this.meuRouter.navigate(['/aluno/cadastro']);
  }

  excluir(){
    this.alunos.splice( , 1);
    localStorage.setItem("lista-alunos", JSON.stringify(this.alunos));
    alert("aluno excluído.");
  }

}


