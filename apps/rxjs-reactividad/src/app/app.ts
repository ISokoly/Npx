import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  readonly contador$ = interval(1000);

  //readonly changeDetection = inject(ChangeDetectorRef)

  metodoCambiar() {
    console.log("Cambiando")
    return 55
  }

  //mensaje() {console.log("Hola")return 45;}

  //constructor() { setInterval(() => { this.contador++ console.log(this.contador);}, 1000);}
}