import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

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

    'populate[6]=tabs.blocks',
    'populate[7]=tabs.blocks.components',
    'populate[8]=tabs.blocks.image',
    'populate[9]=tabs.blocks.imageColumns',
    'populate[10]=tabs.blocks.imageColumns.image',
    'populate[11]=tabs.blocks.video',
    'populate[12]=tabs.blocks.textColumns',
    'populate[13]=tabs.blocks.textBlocks',

    'populate[14]=footer',
    'populate[15]=footer.logo',
    'populate[16]=footer.contactInfo',
    'populate[17]=footer.contactInfo.contacts',
    'populate[18]=footer.contactInfo.contacts.icon',
    'populate[19]=footer.contactInfo.contacts.icon',
    'populate[20]=footer.termsOfService',
    'populate[21]=footer.termsOfService.pdf',
    'populate[22]=slider.slides',
  ];

  private url = `${environment.apiUrl}/home?${this.populates.join('&')}`;

  fetch(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
