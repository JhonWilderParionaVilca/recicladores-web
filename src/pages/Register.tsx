import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
  initialRegisterForm,
  registerFormSchema,
  RegisterUser,
} from '../schemas';

import { useAuth } from '../hooks';
import { InputController } from '../components/share';

export const Register = () => {
  const navigate = useNavigate();
  const { loading, register } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: initialRegisterForm,
    mode: 'all',
  });

  const onSubmit = async ({
    name,
    email,
    password,
    passwordConfirmation,
  }: RegisterUser) => {
    await register({
      name,
      email,
      password,
      passwordConfirmation,
    });
    reset();
    navigate('/login');
  };

  return (
    <main className="my-24 main">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__title">Regístrate</h2>

        <InputController
          control={control}
          nameInput="name"
          typeField="text"
          labelInput="Nombre *"
        />
        <InputController
          control={control}
          nameInput="email"
          typeField="email"
          labelInput="Correo *"
        />
        <InputController
          control={control}
          nameInput="password"
          typeField="password"
          labelInput="Contraseña *"
        />
        <InputController
          control={control}
          nameInput="passwordConfirmation"
          typeField="password"
          labelInput="Repita la Contraseña *"
        />

        <button
          data-testid="submit_button"
          type="submit"
          className="w-full btn btn--tertiary"
          disabled={isSubmitting || loading}
        >
          {loading ? 'Enviando...' : 'Crear Usuario'}
        </button>

        <hr className="my-10 border-grey-200" />

        <p className="text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="btn-text">
            Logueate
          </Link>
        </p>
      </form>
    </main>
  );
};
