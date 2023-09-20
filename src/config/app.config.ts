interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Support Representative'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Support Representative'],
  tenantName: 'Organization',
  applicationName: 'Intercity Taxi Booking',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View organization details',
    'Book intercity journeys',
    'Manage booking details',
    'View booking details',
  ],
  ownerAbilities: ['Manage organizations.', 'Manage bookings on behalf of customers.'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f7772681-b703-45fc-9f5a-9e197b1c5689',
};
