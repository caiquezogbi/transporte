import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../AlunoService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  // alunos: any = {};
  // aluno: AlunoService;




  aluno: any = {};

  constructor(private Local: Location, private _aluno: AlunoService) {
    //this.aluno._aluno;
  }



  ngOnInit() {this.aluno =[];}


  // adicionar(meuForm) {
  //   console.log(meuForm.value.nome);
  //   console.log(meuForm.value.endereco);
  //   console.log(meuForm.value.celular);
  //   console.log(meuForm.value.telefone);

  //   console.log(meuForm.value.nome_aluno);
  //   console.log(meuForm.value.tipo_sanguineo);
  //   console.log(meuForm.value.alergia);


  //   console.log(meuForm.value.colegio);
  //   console.log(meuForm.value.serie);
  //   console.log(meuForm.value.horario);
  //   console.log(meuForm.value.telefone_colegio);
  //   console.log(meuForm.value.endereco_colegio);


  //   let info = new this.aluno(
  //     meuForm.value.nome,
  //     meuForm.value.endereco,
  //     meuForm.value.celular,
  //     meuForm.value.telefone,

  //     meuForm.value.nome_aluno,
  //     meuForm.value.tipo_sanguineo,
  //     meuForm.value.alergia,


  //     meuForm.value.colegio,
  //     meuForm.value.serie,
  //     meuForm.value.horario,
  //     meuForm.value.telefone_colegio,
  //     meuForm.value.endereco_colegio);

  //   this._aluno.addAluno(info);

  // }

  cadastrar(meuForm){
    let _nome = meuForm.value.nome;
    let _endereco = meuForm.value.endereco;
    let _celular = meuForm.value.celular;                //cadastro do pai/mae
    let _telefone= meuForm.value.telefone;


    let _nome_aluno = meuForm.value.nome_aluno;
    let _tipo_sanguineo = meuForm.value.tipo_sanguineo;             //cadastro do filho/filha
    let _alergia = meuForm.value.alergia;


    let _colegio = meuForm.value.colegio;
    let _serie = meuForm.value.serie;
    let _horario = meuForm.value.horario;                              //cadastro do colegio
    let _telefone_colegio = meuForm.value.telefone_colegio;
    let _endereco_colegio = meuForm.value.endereco_colegio;


    if(_nome &&_endereco &&_celular &&_telefone &&_nome_aluno &&_tipo_sanguineo &&_alergia &&_colegio &&_serie &&_horario &&_telefone_colegio &&_endereco_colegio){

      this.aluno.addAluno({
        nome: _nome, 
        endereco: _endereco, 
        celular: _celular,
        telefone: _telefone,

        nome_aluno: _nome_aluno,
        tipo_sanguineo: _tipo_sanguineo,
        alergia: _alergia,

        colegio: _colegio,
        serie: _serie,
        horario: _horario,
        telefone_colegio: _telefone_colegio,
        endereco_colegio: _endereco_colegio,
        imagem: 'https://picsum.photos/150/150?random'
        }
        );
      this.Local.back();

    } else{
      alert('voce deve digitar em todos os campos obrigatorios')
    }

  }

  voltar() {
    this.Local.back();
  }


}
