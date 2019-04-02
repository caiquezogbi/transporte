import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'         
})
export class AlunoService {

    private _lista: any [] = [];
  
    constructor() { 
      const _temp = localStorage.getItem('lista-alunos');
      this._lista = _temp ? JSON.parse(_temp) : [];
  
    }
  
    getLista(): lista[]{
      return this._lista;
    }
  
    getUmaLista(index): lista{
     return this._lista[index]
    }
  
    addAluno(candidato: lista): void{
     this._lista.push(candidato)
     this.saveLocal();
    }
  
    saveAluno(candidato: lista, index: number){
      this._lista[index] = candidato;
      this.saveLocal();
    }
  
    private saveLocal(){ //metodo para salvar
      localStorage.setItem('lista-alunos', JSON.stringify(this._lista));
    }
  }
  
  export class lista{
  
    nome: string;
    colegio: string;
    imagem: string;
    
  
    constructor(_nome:string, _colegio:string) {
      this.nome = _nome;
      this.colegio = _colegio;
    
    }
  }
  
    