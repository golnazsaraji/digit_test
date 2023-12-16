import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule]
})
export class GalleryComponent {

  imageUrl: string = '';
  // For Nav-Bar
 
  links: any[] = [
    
    {
      title: "Image 1", src: "https://www.10wallpaper.com/wallpaper/medium/1601/Bike_glare_blurring-High_Quality_Desktop_Wallpaper_medium.jpg"
    },
    {
      title: "Image 2", src: "https://images.pexels.com/photos/12361695/pexels-photo-12361695.jpeg?cs=srgb&dl=pexels-tom-w-12361695.jpg&fm=jpg"
    },
    {
      title: "Image 3", src: "https://images.pexels.com/photos/9318496/pexels-photo-9318496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]
  ////fillerNav = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  //fillerContent = Array.from(
  //  { length: 3 },
  //  () =>
  //    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  //);

  //private _mobileQueryListener: () => void;

  constructor() {
    
  }

  ngOnDestroy(): void {
   
  }

  LoadImage(index: number) {
    this.imageUrl = this.links[index-1].src
  }
}
