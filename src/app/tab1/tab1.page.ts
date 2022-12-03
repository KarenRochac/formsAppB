import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaProdutos: Produto[]=[];
  constructor(private storageService: StorageService) {}

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

   async excluirProduto(nome: string){
   await this.storageService.remove(nome);
   this.buscarProdutos();
  }
}
