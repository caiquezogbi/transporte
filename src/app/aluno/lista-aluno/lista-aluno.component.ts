import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.scss'],
})
export class ListaAlunoComponent implements OnInit {

  candidatos: any[] = [];

  constructor(private cands: AlunoService, 
    private meuRouter: Router,
    private http:HttpClient) { }

  ngOnInit() {
    
  }

  cardClick(valor){
    
    alert('clicou em: '+ valor.nome);
  }

  
  

  navegar(){
  this.meuRouter.navigate(['/aluno/cadastro']);
  }

}

