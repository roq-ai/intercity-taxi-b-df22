import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
