import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InferType } from 'yup';
import { InputController } from '../components/share/InputController';
import {
  initialRegisterForm,
  registerFormSchema,
} from '../schemas/registerSchema';

export const Register = () => {
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

  const onSubmit = (formValues: InferType<typeof registerFormSchema>) => {
    console.log(formValues);
    reset();
  };

  return (
    <main className="main my-24">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__title">Regístrate</h2>

        <InputController
          control={control}
          nameInput="name"
          typeField="name"
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
          typeField="passwordConfirmation"
          labelInput="Repita la Contraseña *"
        />

        <button
          data-testid="submit_button"
          type="submit"
          className="btn btn--tertiary  w-full"
          disabled={isSubmitting}
        >
          Iniciar Sesión
        </button>

        <hr className="border-grey-200 my-10" />

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
