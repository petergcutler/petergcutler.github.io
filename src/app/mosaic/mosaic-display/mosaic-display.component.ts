import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { EnvService } from '../../env.service';

import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-mosaic-display',
  templateUrl: './mosaic-display.component.html',
  styleUrls: ['./mosaic-display.component.scss']
})

export class MosaicDisplayComponent implements OnInit {
  public messages: any = [];
  public messagesDisplay: any = [];

  change(this) {
    let that = this;

    setInterval(function() {
      that.messages.push(0);
    }, 30000);
  };

  buildMessages(data) {
    let that = this;
    let messages = [];

    _.each(data.records, function(i, n) {
      let message = {
        'id': n,
        'messageType': i.fields.type,
        'messageContent': i.fields.content
      }
      messages.push(message);
    });

    if (!_.isEqual(messages, that.messages)) {
      that.messages = messages;
      that.messagesDisplay = _.shuffle( _.clone(messages) );
      _.pull(that.messages, 0);
    }
  }

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) {}

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.env.AT,
        'Content-Type':  'application/json'
      })
    };

    this.change();

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.http.get(this.env.ATU, httpOptions))
      )
      .subscribe(data => {
        this.buildMessages(data);
        console.log('built');
      });
  }
}
