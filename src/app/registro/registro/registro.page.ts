import { Registro } from './../../models/Registro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

formRegistro: FormGroup;

registro: Registro = new Registro();

  mensagensValidacao={
    email: [
      {tipo:'required', mensagem:'o campo é obrigatório'},
      {tipo:'email', mensagem:'email inválido'}
    ],
    senha:[
      {tipo:'required',mensagem:'campo obrigatório'},
      {tipo:'minlength',mensagem:'o campo deve conter no mínino 3 caracteres'}
    ],
    nome:[
      {tipo:'required', mensagem:'campo obrigatório'},
      {tipo:'minlength', mensagem:'o campo deve conter no mínimo 3 caracteres'}
    ],
    cpf:[
      {tipo:'required', mensagem:'o campo é obrigatório'},
      {tipo:'minlength', mensagem:'o campo deve conter no mínimo 11 caracteres'},
      {tipo: 'maxlength', mensagem:'o campo deve conter no máximo 11 caracteres'}
    ],
    confirmaSenha:[
      {tipo:'required', mensagem:'o campo é obrigatório'},
    {tipo:'minlength', mensagem:'o campo deve conter no mínimo 3 caracteres'}
    ]
  };
  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      senha:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      cpf:['', Validators.compose([Validators.required,Validators.maxLength(11),Validators.minLength(11)])],
      confirmaSenha:['',Validators.compose([Validators.required, Validators.minLength(3)])]
    });
   }

  ngOnInit() {
  }

  salvarRegistro(){
    if(this.formRegistro.valid){
      this.registro.nome = this.formRegistro.value.nome;
      this.registro.email = this.formRegistro.value.email;
      this.registro.cpf = this.formRegistro.value.cpf;
      this.registro.senha = this.formRegistro.value.senha;
    }else{
      alert('formulário Inválido');
    }
  }
}
