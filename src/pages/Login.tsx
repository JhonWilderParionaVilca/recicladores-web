import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { initialValueLoginForm, LoginUser, loginUserSchema } from '../schemas';
import { loginUser } from '../services';

import { useFetch } from '../hooks';
import { InputController } from '../components/share';

export const Login = () => {
  const navigate = useNavigate();
  const { callEndpoint, loading } = useFetch();

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
    const response = await callEndpoint(loginUser({ email, password }));
    console.log(response.data.data);
    toast.success('Bievenido!!!');
    reset();
    navigate('/create');
  };
  return (
    <main className="main my-24 ">
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
          className="btn btn--tertiary w-full"
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
