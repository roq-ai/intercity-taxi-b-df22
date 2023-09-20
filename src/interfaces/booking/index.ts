import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  journey_date: any;
  journey_time: any;
  pickup_location: string;
  dropoff_location: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  pickup_location?: string;
  dropoff_location?: string;
  user_id?: string;
  organization_id?: string;
}
