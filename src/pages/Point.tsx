import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InferType } from 'yup';
import { InputController } from '../components/share/InputController';
import {
  createPointSchema,
  initialValuecreatePoint,
} from '../schemas/createPointSchema';

export const Point = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(createPointSchema),
    defaultValues: initialValuecreatePoint,
    mode: 'all',
  });

  const onSubmit = (formValues: InferType<typeof createPointSchema>) => {
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
            Registra un Punto de Recolección
          </legend>
          <InputController
            control={control}
            nameInput="name"
            typeField="name"
            labelInput="Nombre de la Organización *"
          />
          <InputController
            control={control}
            nameInput="email"
            typeField="email"
            labelInput="Correo *"
          />
          <InputController
            control={control}
            nameInput="phone"
            typeField="phone"
            labelInput="Número celular *"
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
