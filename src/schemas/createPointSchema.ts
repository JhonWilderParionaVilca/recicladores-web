import * as yup from 'yup';

const VALID_PHONE_REGEX = /^(9(\d){8}){0,1}$/;

export const createPointSchema = yup.object({
  name: yup.string().lowercase().trim().required('El nombre es requerido'),
  email: yup
    .string()
    .lowercase()
    .trim()
    .email('Debe ingresar un email válido')
    .required('El correo es requerido'),
  phone: yup
    .string()
    .matches(VALID_PHONE_REGEX, {
      message: 'Ingrese un telefono válido',
      excludeEmptyStrings: false,
    })
    .trim()
    .required('Ingresa un telefono'),
});

export const initialValuecreatePoint = {
  name: '',
  email: '',
  phone: '',
};
