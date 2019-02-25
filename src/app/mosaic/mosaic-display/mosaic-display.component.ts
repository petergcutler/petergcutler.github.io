import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-mosaic-display',
  templateUrl: './mosaic-display.component.html',
  styleUrls: ['./mosaic-display.component.scss']
})

export class MosaicDisplayComponent implements OnInit {

  private sheetsReadUrl = 'https://spreadsheets.google.com/feeds/cells/1xGp8gww59dEO7SDvr8Ww6nRcvxFmx28A-_jPSxsdmNc/od6/public/basic?alt=json';

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
    let message = {
      'id': null,
      'messageType': null,
      'messageContent': null
    };
    let messages = [];

    _.each(data.feed.entry, function(i, n) {
      if (
        i.content["$t"] === 'thinking' ||
        i.content["$t"] === 'feeling' ||
        i.content["$t"] === 'seeing' ||
        i.content["$t"] === 'other'
      ) {
        message.messageType = i.content["$t"];
      } else {
        var order: number = +n + 1;
        message.messageContent = i.content["$t"]
        message.id =  order / 2;
        messages.push(message);
        message = {
          'id': null,
          'messageType': null,
          'messageContent': null
        }
      }
    });

    if (!_.isEqual(messages, that.messages)) {
      that.messages = messages;
      that.messagesDisplay = _.shuffle( _.clone(messages) );
      _.pull(that.messages, 0);
    }
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.change();

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.http.get(this.sheetsReadUrl))
      )
      .subscribe(data => {
        this.buildMessages(data);
        console.log('built');
      });
  }
}
