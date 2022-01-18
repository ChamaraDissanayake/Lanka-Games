import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class LankaGamesService {

  public baseURL: string = "http://lankagames.lk/api/v1/";

  public userId: number = 0;
  public userPhone: string = "";
  public language: string = "en";
  public displayModal: boolean = true;
  
  public halfScreen: boolean = true; // Usage: Web view full screen when play a game in full screen

  public gameCategoryId: number = 0;
  constructor() { }
}
