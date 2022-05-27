import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { InferType } from 'yup';
import { initialValueLoginForm, loginUserSchema } from '../schemas/loginSchema';
import { InputController } from '../components/share/InputController';

export const Login = () => {
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

  const onSubmit = (formValues: InferType<typeof loginUserSchema>) => {
    console.log(formValues);
    reset();
  };
  return (
    <>
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
          disabled={isSubmitting}
        >
          Iniciar Sesión
        </button>
        <hr className="my-10 border-grey-100" />
        <p className="text-center">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="btn-text">
            Regístrate
          </Link>
        </p>
      </form>
    </>
  );
};
