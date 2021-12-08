import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class LankaGamesService {

  public nextQuestion1: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public nextQuestion2: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}