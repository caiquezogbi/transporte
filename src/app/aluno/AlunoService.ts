import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'         
})
export class AlunoService {

    private _lista: any [] = [];
  
    constructor() { 
     
      let indice = -1;
      const _temp = localStorage.getItem('lista-alunos');
      this._lista = _temp ? JSON.parse(_temp) : [];
  
    }
  
    getLista(): any[]{
      return this._lista;
    }
  
    getUmaLista(index): any{
     return this._lista[index]
    }
  
    addAluno(aluno: any): void{
     this._lista.push(Apresentacao)
     this.saveLocal();
    }
  
    saveAluno(candidato: any, index: number){
      this._lista[index] = Apresentacao;
      this.saveLocal();
    }
  
    private saveLocal(){ //metodo para salvar
      localStorage.setItem('lista-alunos', JSON.stringify(this._lista));
    }
  }


  export class Apresentacao{

    aluno: string;
    colegio: string;
    imagem: string;

     constructor(_aluno:string, _colegio:string, _imagem: string) {
       this.aluno = _aluno;
       this.colegio = _colegio;
       this.imagem = _imagem;
    
     }
    
  }
  
  export class Pai {
  
    nome: string;
    endereco: string;
    celular: string;
    telefone: string;
    
  
    
    
  }

  export class Aluno  {
 
        tipo_sanguineo: string;
        alergia: string;

  }

  export class Colegio{

        serie: string;
        horario: string;
        telefone_colegio: string;
        endereco_colegio: string;
  }
  
    