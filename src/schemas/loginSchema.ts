import * as yup from 'yup';

export const loginUserSchema = yup.object({
  email: yup
    .string()
    .email('Debe ingresar un email válido')
    .required('El correo es requerido'),
  password: yup
    .string()
    .min(8, 'El password debe ser de al menos 8 caracteres')
    .required('La contraseña es requerida'),
});

export const initialValueLoginForm = {
  email: '',
  password: '',
};
