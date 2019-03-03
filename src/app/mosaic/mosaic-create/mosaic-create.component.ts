import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { EnvService } from '../../env.service';

import { FormsModule } from '@angular/forms';

import { Message } from '../message';

import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mosaic-create',
  templateUrl: './mosaic-create.component.html',
  styleUrls: ['./mosaic-create.component.scss']
})

export class MosaicCreateComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.env.AT,
      'Content-Type':  'application/json'
    })
  };

  entries = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };

  model = new Message('thinking', '');

  submitted = false;

  onSubmit() {
    let body = {
      "fields": {
        "type": this.selectedEntry.description,
        "content": this.model.messageContent
      }
    };

    this.http.post(this.env.ATU, body, this.httpOptions)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );

    this.submitted = true;
  }

  onSelectionChange(entry) {
    // clone the object for immutability
    this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }

  newMessage() {
    this.model = new Message('', '');
  }

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) {}

  ngOnInit(): void {
    this.entries = [
      {
        description: 'thinking',
        id: 1
      },
      {
        description: 'seeing',
        id: 2
      },
      {
        description: 'feeling',
        id: 3
      },
      {
        description: 'other',
        id: 4
      }
    ];

    // select the first one
    if(this.entries) {
      this.onSelectionChange(this.entries[0]);
    }
  }

}
