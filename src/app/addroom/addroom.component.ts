import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  public room_types: any[];
  public addRoomForm = new FormGroup({
    roomname: new FormControl(),
    tv: new FormControl(),
    beds: new FormControl(),
    room_type: new FormControl()
  });
  constructor(private _router: Router, private _http: Http) { }

  ngOnInit() {
    this._getRoomTypes();
  }


  private _getRoomTypes() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.get('http://localhost/it255/getroomtypes.php', {headers: headers}).subscribe((data): any => {
          this.room_types = JSON.parse(data['_body']).room_types;
        },
        err => {
          this._router.navigateByUrl('');
        }
      );
  }

  public addRoom() {
    // tslint:disable-next-line:max-line-length
    const data = 'roomName=' + this.addRoomForm.value.roomname + '&hasTV=' + this.addRoomForm.value.tv + '&beds=' + this.addRoomForm.value.beds + '&room_type_id=' + this.addRoomForm.value.room_type;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.post('http://localhost/it255/addroomservice.php', data, {headers: headers}).subscribe((result) => {
      this._router.navigateByUrl('allrooms');
    }, (error) => {
      this._router.navigateByUrl('home');
    });
  }

}
