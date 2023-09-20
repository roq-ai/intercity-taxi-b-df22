import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerSupportRepresentativeInterface {
  id?: string;
  joined_at?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerSupportRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
