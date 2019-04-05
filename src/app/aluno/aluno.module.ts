import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { FormsModule } from '@angular/forms';
import { GeralModule } from '../geral/geral.module';

@NgModule({
  declarations: [
    CadastroComponent, 
    ListaAlunoComponent ],



  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
    GeralModule    
  ]
})
export class AlunoModule { }
