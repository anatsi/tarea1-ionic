import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PERSONAJES} from "../../data/personajes.data";

import {Personaje} from "../../interfaces/personaje.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajes:Personaje[]=[];

  constructor(public navCtrl: NavController) {
    this.personajes = PERSONAJES.slice(0);
  }

}
