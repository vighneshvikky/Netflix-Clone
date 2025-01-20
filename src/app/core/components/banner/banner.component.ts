import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnChanges{
@Input({required: true}) bannerTitle = '';
@Input() bannerOverview = '';
@Input() key = '';
private sanitizer = inject(DomSanitizer)
videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/qSu6i2iFMO0?autoplay=1&mute=1&loop=1&controls=0`)

ngOnChanges(changes: SimpleChanges): void {
  if(changes['key']){
  
  }
}
}
