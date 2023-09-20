const mapping: Record<string, string> = {
  bookings: 'booking',
  'business-owners': 'business_owner',
  'customer-support-representatives': 'customer_support_representative',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
