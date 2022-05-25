import * as yup from 'yup';

const REGEX_VALID_NAME = /^[a-zA-Z\s]*$/;

export const registerFormSchema = yup.object({
  name: yup
    .string()
    .matches(REGEX_VALID_NAME, {
      message: 'Ingrese un nombre válido',
      excludeEmptyString: false,
    })
    .lowercase()
    .trim()
    .required('El nombre es requerido'),
  email: yup
    .string()
    .lowercase()
    .trim()
    .email('Debe ingresar un email válido')
    .required('El correo es requerido'),
  password: yup
    .string()
    .min(8, 'El password debe ser de al menos 8 caracteres')
    .required('La contraseña es requerida'),
  passwordConfirmation: yup
    .string()
    .required('La confirmación de contraseña es requerida')
    .oneOf([yup.ref('password'), null], 'La contraseña no coincide'),
});

export const initialRegisterForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};
