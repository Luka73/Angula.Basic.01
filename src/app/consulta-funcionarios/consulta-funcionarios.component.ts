import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-funcionarios',
  templateUrl: './consulta-funcionarios.component.html',
  styleUrls: ['./consulta-funcionarios.component.css']
})
export class ConsultaFuncionariosComponent implements OnInit {

  //atributo
  funcionarios = []

  //injeção de dependência para HttpClient
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://localhost:44301/api/Funcionario')
      .subscribe(
        (data : any[]) => {
          //console.log(data);
          //armazenar no atributo
          this.funcionarios = data;
        }
      );
  }

}
