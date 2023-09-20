import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  journey_date: yup.date().required(),
  journey_time: yup.date().required(),
  pickup_location: yup.string().required(),
  dropoff_location: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
