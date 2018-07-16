import { Component, Input, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})

export class ImageViewerComponent implements OnInit {

  @Input() images: object[];
  @Input() options: object;
  @Input() path: string;
  @Input() description: string;
  @Input() borderOn: boolean;
  @Input() textColor: string;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public galleryVisible: boolean = false;

  constructor() {}

  open(g): void {
    g.openPreview(0);
  }

  addImage(array, object): void {
    let image = {};

    _.set(image, 'big', object.path);
    _.set(image, 'description', object.description);

    array.push(image);
  }

  buildGalleryImages(array, addImage): void {
    if (this.images) {
      _.each(this.images, function(i) {
        addImage(array, i);
      });
    } else {
      addImage(array, this)
    }
  }

  buildCustomOptions(optionsObject, imageArray): void {
    if (imageArray.length === 1) {
      _.set(optionsObject, 'arrowNextIcon', 'arrow-off');
      _.set(optionsObject, 'arrowPrevIcon', 'arrow-off');
    }
  }

  ngOnInit(): void {
    this.galleryOptions = [
        {
          width: '0px',
          height: '0px',
          image: false,
          thumbnails: false,
          previewSwipe: true,
          previewCloseOnEsc: true,
          previewCloseOnClick: true,
          previewKeyboardNavigation: true,
          arrowNextIcon: 'fa fa-angle-right',
          arrowPrevIcon: 'fa fa-angle-left',
          // closeIcon: 'fa fa-times-circle-o'
        }
    ];
    this.galleryImages = [];

    this.buildGalleryImages(this.galleryImages, this.addImage);
    this.buildCustomOptions(this.galleryOptions[0], this.galleryImages);
  }
}
