import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PHOTOS_URL } from 'src/app/_constants/apiUrlConstants';
import { PhotListingInterface } from 'src/app/_models/photoModel';

@Injectable({
  providedIn: 'root',
})
export class PhotoListingService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Array<PhotListingInterface>>(PHOTOS_URL);
  }
}
