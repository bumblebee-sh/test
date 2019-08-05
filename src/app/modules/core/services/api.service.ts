import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface, UserPaginationsInterface } from '@app/interfaces';
import { PaginationApiService } from './pagination-api.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`).pipe(
      map( response => response.data )
    );
  }

}
