import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {UserPaginationsInterface} from '@app/interfaces';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<UserPaginationsInterface> {
    return this.http.get('https://reqres.in/api/users?page=1').pipe(
      map((response: UserPaginationsInterface) => {
        return {
          total_pages: response.total_pages,
          per_page: response.per_page,
          total: response.total,
          page: response.page
        };
      })
    );
  }
}
