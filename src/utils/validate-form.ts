import * as yup from 'yup';

interface IValidateForm {
  name: string;
  email: string;
  phone: string;
}

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .matches(/^[^\d]+$/, 'Only letters and symbols are allowed'),
  email: yup
    .string()
    .required('Required field')
    .email('Invalid email'),
  phone: yup
    .string()
    .required('Required field')
    .matches(/^(38)?\d{9}$|^380\d{9}$/, 'Invalid phone number (format: 380XXXXXXXXX)'),
});