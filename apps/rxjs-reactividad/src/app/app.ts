import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  contador = 0;

  readonly changeDetection = inject(ChangeDetectorRef)

  metodoCambiar() {

  }

  mensaje(){
    console.log("Hola")
    return 45;
  }
  
  constructor() {
    setInterval(() => {
      this.contador++
      console.log(this.contador);
    }, 1000);
  }
}