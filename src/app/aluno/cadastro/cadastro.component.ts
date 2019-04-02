import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  constructor(private Local: Location, private aluno:) { }

  ngOnInit() {}

  cadastrar(meuForm){
    let _nome = meuForm.value.nome;
    let _endereco = meuForm.value.endereco;
    let _celular = meuForm.value.celular;                //cadastro do pai/mae
    let _telefone= meuForm.value.telefone;


    let _aluno = meuForm.value.aluno;
    let _tipo_sanguineo = meuForm.value.tipo_sanguineo;             //cadastro do filho/filha
    let _alergia = meuForm.value.alergia;


    let _colegio = meuForm.value.colegio;
    let _serie = meuForm.value.serie;
    let _horario = meuForm.value.horario;                              //cadastro do colegio
    let _telefone_colegio = meuForm.value.telefone_colegio;
    let _endereco_colegio = meuForm.value.endereco_colegio;


    if(_nome &&_endereco &&_celular &&_aluno &&_alergia &&_colegio &&_serie &&_horario &&_endereco_colegio){

      this.aluno.addAluno({
        nome: _nome, 
        endereco: _endereco, 
        celular: _celular,
        aluno: _aluno,
        alergia: _alergia,
        colegio: _colegio,
        serie: _serie,
        horario: _horario,
        endereco_colegio: _endereco_colegio
        }
        );
      this.Local.back();

    } else{
      alert('voce deve digitar em todos os campos obrigatorios')
    }
    
  }

  voltar(){
    this.Local.back();
  }


}
