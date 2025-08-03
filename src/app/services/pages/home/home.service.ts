import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  private populates = [
    'populate[0]=header.logo',
    'populate[1]=header.button',
    'populate[2]=banner',
    'populate[3]=banner.image',
    'populate[4]=banner.logo',
    'populate[5]=tabs',
    'populate[6]=tabs.blocks.components',
    // card
    'populate[7]=tabs.blocks.image',
    'populate[8]=tabs.blocks.isReverse',

    'populate[9]=footer',
    'populate[10]=footer.logo',
    'populate[11]=footer.contactInfo',
    'populate[12]=footer.contactInfo.contacts',
    'populate[13]=footer.contactInfo.contacts.icon',
    'populate[14]=footer.contactInfo.contacts.icon',
    'populate[15]=slider.slides',
  ];

  private url = `http://localhost:1337/api/home?${this.populates.join('&')}`;

  fetch(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
