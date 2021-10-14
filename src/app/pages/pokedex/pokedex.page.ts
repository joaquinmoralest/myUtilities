import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pageTitle = 'Pokedex';
  indexedPokemon = '';
  result: any;
  name = '';
  type = '';
  hp = '';
  attack = '';
  defense = '';
  spAttack = '';
  spDefense = '';
  speed = '';
  sprite;

  constructor(public pokedexServicio: PokedexService) { }

  getData() {
    this.pokedexServicio.getPokemon(this.indexedPokemon)
      .then(res => {
        this.name = res.name;
        this.type = res.types[0].type.name;
        this.hp = res.stats[0].base_stat;
        this.attack = res.stats[1].base_stat;
        this.defense = res.stats[2].base_stat;
        this.spAttack = res.stats[3].base_stat;
        this.spDefense = res.stats[4].base_stat;
        this.speed = res.stats[5].base_stat;
        this.sprite = res.sprites.front_default;
        return;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  pokemonHTML() {
    this.getData();

    const card = document.createElement('div');
    const avatar = document.createElement('div');
    const titulo = document.createElement('h4');
    const tipo = document.createElement('p');
    const img = document.createElement('img');
    const stats = document.createElement('div');
    const hp = document.createElement('p');
    const attack = document.createElement('p');
    const defense = document.createElement('p');
    const spAttack = document.createElement('p');
    const spDefense = document.createElement('p');
    const speed = document.createElement('p');

    titulo.textContent = this.name;
    tipo.textContent = this.type;
    hp.textContent = this.hp;
    attack.textContent = this.attack;
    defense.textContent = this.defense;
    spAttack.textContent = this.spAttack;
    spDefense.textContent = this.spDefense;
    speed.textContent = this.speed;
    img.setAttribute('src', this.sprite);

    card.classList.add('card-pokemon');
    avatar.classList.add('avatar');
    tipo.classList.add('tipo');
    img.classList.add('img-pokemon');
    stats.classList.add('stats');

    avatar.appendChild(img);
    stats.appendChild(hp);
    stats.appendChild(attack);
    stats.appendChild(defense);
    stats.appendChild(spAttack);
    stats.appendChild(spDefense);
    stats.appendChild(speed);
    card.appendChild(titulo);
    card.appendChild(avatar);
    card.appendChild(tipo);
    card.appendChild(stats);

    return card;
};

mostrarPokemon() {
  this.result = '';

  const card = this.pokemonHTML();

  this.result = card;
};

  ngOnInit() {
  }

}
