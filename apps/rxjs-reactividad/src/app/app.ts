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
  contador$ = new Observable<number>(subscriber => {
    let cont = 0;

    const contar = setInterval(() => {
      cont++;
      subscriber.next(cont)
      console.log(cont)
    }, 1000);
    setTimeout(() => {
      subscriber.complete()
    }, 3000);
    return () => {
      clearInterval(contar);
      console.log("Intervalo eliminado")
    }
  }
  )
}