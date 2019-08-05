import {UserInterface} from './user.interface';

export interface UserPaginationsInterface {
  total_pages: number;
  per_page: number;
  total: number;
  page: number;
  data?: UserInterface[]; // todo data?
}
