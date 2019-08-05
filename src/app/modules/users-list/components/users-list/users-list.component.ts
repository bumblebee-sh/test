import { Component, OnInit, ViewChild} from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material';

import { UserInterface } from '@app/interfaces';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;
  pageSize = 3;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) {}

  ngOnInit() {
    this.activatedRoute.data
    .subscribe((pagination: any) => {
      this.pagesCount = pagination.paginationInfo.total;
      this.paginator.pageIndex = pagination.users.page - 1;
      this.userList = pagination.users.data;
    });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.apiService.fetchUsers(page).subscribe(res => {
      this.userList = res.data;
    });
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
