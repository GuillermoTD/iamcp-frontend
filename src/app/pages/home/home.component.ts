import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../services/pages/home/home.service';
import { CommonModule } from '@angular/common';
// import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private service = inject(HomeService);
  private cdr = inject(ChangeDetectorRef);
  data?: any;
  activeTabId?: string | null = null;

  serverUrl = 'http://localhost:1337';

ngOnInit(): void {
  this.service.fetch().subscribe({
    next: (res) => {
      this.data = res;
      if (this.data?.data?.tabs?.length) {
        this.activeTabId = this.data.data.tabs[0].id; // <-- usar id, no title
      }
      this.cdr.detectChanges();
      console.log('Data fetched successfully:', this.data);
    },
    error(err) {
      console.log('Fetch failed: ', err);
    },
  });
}


  get bannerImage(): string {
    const url = this.data?.data?.banner?.image?.url;
    return url ? `url(http://localhost:1337${url})` : '';
  }

  setActiveTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
