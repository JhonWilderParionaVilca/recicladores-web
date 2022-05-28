import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import { initialValueLoginForm, LoginUser, loginUserSchema } from '../schemas';

import { useAuth } from '../hooks';
import { InputController } from '../components/share';

export const Login = () => {
  const { loading, login } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginUserSchema),
    defaultValues: initialValueLoginForm,
    mode: 'all',
  });

  const onSubmit = async ({ email, password }: LoginUser) => {
    await login({ email, password });
    reset();
    navigate('/create');
  };

  return (
    <main className="my-24 main ">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__title">INGRESA</h2>

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

        <button
          data-testid="submit_button"
          type="submit"
          className="w-full btn btn--tertiary"
          disabled={isSubmitting || loading}
        >
          {loading ? 'Enviando...' : 'Iniciar Sesión'}
        </button>

        <hr className="my-10 border-grey-100" />
        <p className="text-center">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="btn-text">
            Regístrate
          </Link>
        </p>
      </form>
    </main>
  );
};
