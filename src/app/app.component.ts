import { Component } from '@angular/core';
import { Usuario } from 'src/shared/model/usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  titulo: string = 'Minha primeira Aplicação';
  usuario: Usuario;
  usuarios: Array<Usuario>;

enviar(): void {
  console.log("Enviado com sucesso!")
}

constructor () {
  this.usuario = new Usuario;
  this.usuarios = new Array<Usuario>;
}

inserirUsuario () {
  this.usuarios.push(this.usuario);
  this.usuario = new Usuario;
}


}
