import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

  private static readonly BASE_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(private jsonp: Jsonp) { }

  getFeed(service: string): Observable<any> {
    service = service.replace(/\:/g, '%3A');
    service = service.replace(/\//g, '%2F');
    console.info(service);
    return this.jsonp.get(NewsService.BASE_URL + service)
      .map(res => {
        console.info(res);
        res.json()
      })
      .map(data => {
        //console.info(data);
        if (data) return data;
      });
  }

}
