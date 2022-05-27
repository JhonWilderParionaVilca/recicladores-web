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
  items: yup.string().lowercase().trim().required('ingrese un item'),
  longitude: yup
    .number()
    .min(-199, 'valor minimo longitud -199')
    .max(180, 'valor maximo longitud 180')
    .required('la latitud es requerido'),
  latitude: yup
    .number()
    .min(-90, 'valor minimo latitud -90')
    .max(90, 'valor maximo de latitud 90')
    .required('La longitud es requerido'),
});

export const initialValuecreatePoint = {
  name: '',
  email: '',
  phone: '',
  items: '',
  longitude: 0,
  latitude: 0,
};
