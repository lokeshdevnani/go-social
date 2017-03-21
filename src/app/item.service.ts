import { AuthHttp } from 'angular2-jwt';
import { Config } from './shared/config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { Item } from './item';
import { MOVIES } from './mock-items';

@Injectable()
export class MovieService {

  private URL = Config.url;

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }

  getCampaigns(): Observable<Item[]> {
    return this.authHttp
               .get(`${this.URL}/campaign`)
               .map( (r: Response) => {
                  let x = r.json();
                  if (x.success) {
                    return x.data as Item[];
                  }
                  return [];
                })
                .catch(error => {
                  console.log(error);
                  return Observable.of<Item[]>([]);
                });
  }


  addCampaign(item: any): Observable<Item[]> {
    item.token = localStorage.getItem('id_token');
    return this.authHttp
               .post(`${this.URL}/campaign`, item)
               .map( (r: Response) => {
                  let x = r.json();
                  if (x.success) {
                    return x.data;
                  }
                  return null;
                })
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  upvote(campaignId) {
    return this.authHttp
            .post(`${this.URL}/upvote`, {campaignId: campaignId, 'token': localStorage.getItem('id_token')}, this.jsonHeaders())
            .map( (r: Response) => {
                  let x = r.json();
                  if (x.success) {
                    return x.data as Item[];
                  }
                  return [];
                })
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMovie(id: Number): Observable<Item> {
    return this.http
               .get(`${this.URL}/movies/${id}`)
               .map( (r: Response) => r.json() as Item )
               .catch(error => {
                  console.log(error);
                  return Observable.of<Item>(null);
                });
  }

  addMovie(movie: Item): Observable<Item> {
    let bodyString = JSON.stringify(movie);
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.authHttp.post(`${this.URL}/movies`, bodyString, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  editMovie(movie: Item): Observable<Item> {
    let bodyString = JSON.stringify(movie);
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.authHttp.put(`${this.URL}/movies/${movie.id}`, bodyString, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteMovie(id: Number): Observable<any> {
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.authHttp.delete(`${this.URL}/movies/${id}`, { headers: headers });
  }

  jsonHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return headers;
  }

}
