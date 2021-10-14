import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() indexedPokemon;
  @Input() result;
  @Input() name;
  @Input() type;
  @Input() hp;
  @Input() attack;
  @Input() defense;
  @Input() spAttack;
  @Input() spDefense;
  @Input() speed;
  @Input() sprite;

  constructor() { }

  ngOnInit() {}

}
