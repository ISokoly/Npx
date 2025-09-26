import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App {
  readonly contador$ = interval(2000);

  hola: string = "Hola";
  readonly HOLA = signal(10);

  readonly observer: Observer<any> = {
    next: value => console.log('Siguiente ', value),
    error: value => console.log("Error", value),
    complete: () => console.log("Observable completado")
  }

  readonly obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");
    subs.next("Hola");
    subs.next("Mundo");

    subs.complete();

    subs.next("Hola");
    subs.next("Mundo");
  })

}