import { Component, Input, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
})

export class ImageViewerComponent implements OnInit {

  constructor() {}

  @Input() images: object[];
  @Input() options: object;
  @Input() imageSrc: string;
  @Input() description: string;
  @Input() borderOn: boolean;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  private galleryVisible: boolean = false;

  open(g): void {
    this.galleryVisible = !this.galleryVisible;
    g.openPreview(0);
  }

  setImagePaths(o, v): void {
    _.set(o, 'small', v);
    _.set(o, 'medium', v);
    _.set(o, 'big', v);
  };

  buildGalleryImages(imageArray, setter): void {
    let imageObject = {};

    if (this.images) {
      _.each(this.images, function(i) {
        setter(imageObject, i);
        imageArray.push(imageObject);
      });
    } else if (this.imageSrc) {
      setter(imageObject, this.imageSrc);

      if (this.description) {
        _.set(imageObject, 'description', this.description);
      }

      imageArray.push(imageObject)
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
          arrowNextIcon: 'fa fa-arrow-circle-right',
          arrowPrevIcon: 'fa fa-arrow-circle-left',
        }
    ];
    this.galleryImages = [];

    this.buildGalleryImages(this.galleryImages, this.setImagePaths);
    this.buildCustomOptions(this.galleryOptions[0], this.galleryImages);
  }
}
