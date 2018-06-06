import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allrooms',
  templateUrl: './allrooms.component.html',
  styleUrls: ['./allrooms.component.css']
})
export class AllroomsComponent implements OnInit {

  public data: any = [];

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.get('http://localhost/it255/getrooms.php', {headers: headers})
      .subscribe(data => {
          this.data = JSON.parse(data['_body']).rooms;
        },
        err => {
          this._router.navigate(['']);
        }
      );

  }
}
