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
      <div className="m-auto flex h-full max-w-3xl items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white-500 rounded-2xl bg-primary-100 p-8 shadow-2xl"
        >
          <legend className="mb-10 text-center text-xl font-bold text-secondary-500">
            LOGIN
          </legend>
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
            className="btn btn--secondary mt-10 w-full"
            disabled={isSubmitting}
          >
            Iniciar Sesión
          </button>
          <hr className="my-6 border-grey-200" />
          <p className="text-center">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="btn-text">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
