import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Produto } from 'src/app/models/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
formProduto: FormGroup;

produto: Produto = new Produto();

  mensagensValidacao={
    nome: [
      {tipo:'required', mensagem:' campo é obrigatório'},
    ],
    descricao:[
      {tipo:'required',mensagem:'campo obrigatório'},
      {tipo:'minlength',mensagem:' campo deve conter no mínino 3 caracteres'}
    ],
    preco:[
      {tipo:'required', mensagem:'campo obrigatório'}
    ],
    dataValidade:[
      {tipo:'required', mensagem:'campo obrigatório'}
    ]
  };
  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private router: Router) {
    this.formProduto = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      descricao:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preco:['',Validators.required],
      dataValidade:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  async salvarProduto(){
    if(this.formProduto.valid){
      this.produto.nome = this.formProduto.value.nome;
      this.produto.descricao = this.formProduto.value.descricao;
      this.produto.dataValidade = this.formProduto.value.dataValidade;
      this.produto.preco = this.formProduto.value.preco;
      await this.storageService.set(this.produto.nome, this.produto);
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      alert('formulário Inválido');
    }
  }

}
