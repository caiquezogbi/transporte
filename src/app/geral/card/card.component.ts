import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() nome_aluno: string;
  @Input() colegio: string;
  // @Input() imagem: string;
  @Output() result: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  meClicou(){
    this.result.emit({
      nome_aluno:this.nome_aluno    });
  }

}
