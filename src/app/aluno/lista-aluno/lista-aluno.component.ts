
import { Router } from '@angular/router';
import { AlunoService, Apresentacao, Aluno, Colegio } from '../AlunoService';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.scss'],
})
export class ListaAlunoComponent implements OnInit {

  alunos: any[] = [];


  @Input() nome_aluno: string;
  @Input() Colegio: string;
 
    
    @Output() result: EventEmitter<any> = new EventEmitter();

  

  constructor(
    private cands: AlunoService, 
    private meuRouter: Router,
    //private http: HttpClient,
   ) { }

  ngOnInit() {
   
  }

  cardClick(valor){
    
    alert('clicou em: '+ valor.aluno);
  }

  

  navegar(){
  this.meuRouter.navigate(['/aluno/cadastro']);
  }

  meClicou() {
    this.result.emit({
      nome_aluno: this.nome_aluno
    });
  }

//   excluir(_temp,indice){
//     _temp.splice(indice,1);
//     localStorage.setItem("lista-alunos", JSON.stringify(_temp));
//     alert("aluno excluído.");
//   }

//   Editar(_temp,indice){
//     _temp[indice] = JSON.stringify({
//             horario   : $("#txtHorario").any(),
//             colegio    : $("#txtColegio").any(),
            
//         });
//     localStorage.setItem("lista-alunos", JSON.stringify(_temp));
//     alert("Informações editadas.")
   
//     return true;
// }

}


