// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LankaGamesService } from './lanka-games.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    // private http: HttpClient,
    public service: LankaGamesService
  ) {
    this.storage.create();
  }
}
