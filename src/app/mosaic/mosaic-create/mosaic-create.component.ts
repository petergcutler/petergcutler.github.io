import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { Message } from '../message';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

@Component({
  selector: 'app-mosaic-create',
  templateUrl: './mosaic-create.component.html',
  styleUrls: ['./mosaic-create.component.scss']
})

export class MosaicCreateComponent implements OnInit {

  lenses = [
    'thinking',
    'feeling',
    'seeing',
    'other'
  ];

  model = new Message('thinking', '');

  submitted = false;

  onSubmit() {
    // this.http.post(this.sheetsuCreateUrl, {
    //   'messageType': this.model.messageType,
    //   'messageContent': this.model.messageContent
    // }, httpOptions)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log('Error occured');
    //     }
    //   );

    this.submitted = true;
  }

  newMessage() {
    this.model = new Message('', '');
  }


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // adding the lifecycle hook ngOnInit
    // this.http.get(this.sheetsUrl).subscribe(data => {
    //   console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    // });


  }

}
