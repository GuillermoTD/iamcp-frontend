import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../services/pages/home/home.service';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { MarkdownPipe } from '../../markdown.pipe';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MarkdownPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private service = inject(HomeService);
  private cdr = inject(ChangeDetectorRef);
  baseUrl = environment.baseUrl;
  apiUrl = environment.apiUrl;

  data?: any;
  activeTabId?: string | null = null;

  ngOnInit(): void {
    this.service.fetch().subscribe({
      next: (res) => {
        this.data = res;
        this.cdr.detectChanges();
        this.activeTabId = this?.data?.data?.tabs[0]?.id || null;
      },
      error(err) {
        console.log('Fetch failed: ', err);
      },
    });
  }

  get bannerImage(): string {
    const url = this.data?.data?.banner?.image?.url;
    return url ? `url(${this.apiUrl}${url})` : '';
  }

  setActiveTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
