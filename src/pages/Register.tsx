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
    <>
      <div className="m-auto flex h-full max-w-3xl items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white-500 rounded-2xl bg-primary-100 p-8 shadow-2xl"
        >
          <legend className="mb-10 text-center text-xl font-bold text-secondary-500">
            Regístrate
          </legend>
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
            className="btn btn--secondary mt-10 w-full"
            disabled={isSubmitting}
          >
            Iniciar Sesión
          </button>
          <hr className="my-6 border-grey-200" />
          <p className="text-center">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="btn-text">
              Logueate
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
