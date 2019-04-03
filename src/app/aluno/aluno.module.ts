import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';

@NgModule({
  declarations: [
    CadastroComponent, 
    ListaAlunoComponent ],



  imports: [
    CommonModule,
    AlunoRoutingModule,
    
  ]
})
export class AlunoModule { }
