import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'         
})
export class AlunoService {
  [x: string]: any;

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
  
    addAluno(apresentacao: Apresentacao,pai:Pai,aluno:Aluno,colegio:Colegio){
     this._lista.push(apresentacao,pai,aluno,colegio)
     this.saveLocal();
    }
    addPai(){}
  
    saveAluno(Apresentacao: any, index: number){
      this._lista[index] = Apresentacao;
      this.saveLocal();
    }
  
    private saveLocal(){ //metodo para salvar
      localStorage.setItem('lista-alunos', JSON.stringify(this._lista));
    }
  }


  export class Apresentacao{

    nome_aluno: string;
    colegio: string;
    imagem?: string;

     constructor(_nome_aluno:string, _colegio:string, _imagem: string) {
       this.nome_aluno = _nome_aluno;
       this.colegio = _colegio;
       this.imagem = _imagem;
    
     }
    
  }
  
  export class Pai {
  
    nome: string;
    endereco: string;
    celular: string;
    telefone?: string;
    
  constructor(_nome:string, _endereco:string, _celular:string,_telefone:string){
    this.nome = _nome;
    this.endereco = _endereco;
    this.celular = _celular;
    this.telefone = _telefone;

  }
    
    
  }

  export class Aluno  {
 
        tipo_sanguineo?: string;
        alergia: string;

        constructor(_tipo_sanguineo:string, _alergia:string){
          this.tipo_sanguineo = _tipo_sanguineo;
          this.alergia = _tipo_sanguineo;
      
        }
          

  }

  export class Colegio{

        serie: string;
        horario: string;
        telefone_colegio?: string;
        endereco_colegio?: string;

        constructor(_serie:string, _horario:string, _telefone_colegio:string,_endereco_colegio:string){
          this.serie = _serie;
          this.horario = _horario;
          this.telefone_colegio = _telefone_colegio;
          this.endereco_colegio = _endereco_colegio;
      
        }
  }
  
    