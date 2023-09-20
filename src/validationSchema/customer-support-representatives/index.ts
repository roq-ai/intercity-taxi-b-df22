import * as yup from 'yup';

export const customerSupportRepresentativeValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
