import { Component, OnInit } from '@angular/core';
import { PhotListingInterface } from 'src/app/_models/photoModel';
import { PhotoListingService } from 'src/app/_services/api/photo-listing.service';

@Component({
  selector: 'app-photo-listing',
  templateUrl: './photo-listing.component.html',
  styleUrls: ['./photo-listing.component.scss'],
})
export class PhotoListingComponent implements OnInit {
  constructor(private service: PhotoListingService) {}

  photos: Array<PhotListingInterface> = [];

  ngOnInit(): void {
    this.service.getPhotos().subscribe({
      next: (result: Array<PhotListingInterface>) => {
        this.photos = result.splice(0, 100);
      },
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
