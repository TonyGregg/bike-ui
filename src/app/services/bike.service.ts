import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

const SERVER_URL = '/server/api/v1/bikes/';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    return this.http.get(SERVER_URL);
  }
  getBike(id: number) {
    return this.http.get(SERVER_URL + id);
  }
  createBike(bike) {
    const body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions );
  }

}
