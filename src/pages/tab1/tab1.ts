import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PERSONAJES} from "../../data/personajes.data";

import {Personaje} from "../../interfaces/personaje.interface";

import {Pagina2Page} from "../index.paginas";

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  personajes:Personaje[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
  }

  irPagina2( personaje:any ){
    this.navCtrl.push( Pagina2Page, { 'personaje': personaje } );
  }

}
