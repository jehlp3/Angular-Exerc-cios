import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "Tom";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/Tom.jpg";
  mostrarDataNascimento(){
    alert(`A data de nacsimento do ${this.nome} é: ${this.dataNascimento}`)
  };
}
