import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-addroomtype',
  templateUrl: './addroomtype.component.html',
  styleUrls: ['./addroomtype.component.css']
})
export class AddroomtypeComponent implements OnInit {

  public addRoomTypeForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('token') == null) {
      this._router.navigateByUrl('');
    }

  }

  addRoomType() {
    const data = 'name=' + this.addRoomTypeForm.value.name;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.post('http://localhost/it255/addroomtype.php', data, { headers: headers}).subscribe((result) => {
      this._router.navigateByUrl('allrooms');
   },
    err => {
      const obj = JSON.parse(err._body);
      const element  = <HTMLElement> document.getElementsByClassName('alert')[0];
      element.style.display = 'block';
      element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
    }
  );

  }
}

