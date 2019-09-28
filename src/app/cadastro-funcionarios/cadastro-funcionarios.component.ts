import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  //atributo
  mensagem:string;

  //injeção de dependência para a biblioteca HttpClient
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  //função que será executada pelo formulário
  cadastrarFuncionario(formularioCadastro){
    this.mensagem = "Processando, por favor aguarde.";
    this.httpClient.post('https://localhost:44301/api/Funcionario',
    formularioCadastro.value, { responseType: 'text' })
    .subscribe(
      data => { //promisse de sucesso!
        this.mensagem = data.toString();
        formularioCadastro.reset();
      },
      e => { //promisse de erro!
        console.log(e);
      }
    );

  }
}
