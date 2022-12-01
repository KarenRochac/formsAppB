import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  formProduto = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required])],
    descricao:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    preco:['',Validators.required],
    dataValidade:['',Validators.required]
  });

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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
