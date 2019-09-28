import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';

//componente de mapeamento de rotas:
import { RouterModule, Routes } from '@angular/router';

//componente para executar chamadas para a API
import { HttpClientModule } from '@angular/common/http';

//componente para desenvolvimento de formulários dinâmicos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapear uma rota (path) para casa componente do projeto
const appRoutes: Routes = [
  { path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent },
  { path: 'consultaFuncionarios', component: ConsultaFuncionariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //registrar o mapeamento de rotas:
    RouterModule.forRoot(appRoutes),
    //registrando a biblioteca HTTP:
    HttpClientModule,
    //registrando a biblioteca para formulários
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
