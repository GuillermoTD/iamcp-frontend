import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  private url =
    'http://localhost:1337/api/home?populate[0]=header.logo&populate[1]=header.button&populate[2]=banner&populate[3]=banner.image&populate[4]=banner.logo&populate[5]=tabs&populate[6]=tabs.blocks&populate[7]=footer&populate[8]=footer.logo&populate[9]=footer.contactInfo&&populate[10]=footer.contactInfo.contacts&populate[11]=footer.contactInfo.contacts.icon&populate[12]=footer.contactInfo.contacts.icon';

  fetch(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
