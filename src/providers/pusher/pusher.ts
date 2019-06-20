import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('8dc6e3029d87c1c37df0', {
      cluster: 'eu',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}
