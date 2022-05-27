import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { MapPointRegister } from '../components/point/MapPointRegister';
import { InputController } from '../components/share/InputController';
import {
  createPointSchema,
  initialValuecreatePoint,
} from '../schemas/createPointSchema';

export const Point = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
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

  const changePointSelected = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__title">Punto de Recolección</h2>

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
          labelInput="Correo de la organización *"
        />
        <InputController
          control={control}
          nameInput="phone"
          typeField="phone"
          labelInput="Whatsaap de la organización *"
        />

        <fieldset className="mb-10">
          <legend className="text-base font-bold text-grey-500">
            <h2>Dirección</h2>
            <span className="text-sm">Marque una posición en el Mapa</span>
            <span className="block text-xs">
              {latitude} {longitude}
            </span>
          </legend>
          <MapPointRegister changePointSelected={changePointSelected} />
        </fieldset>

        <button
          data-testid="submit_button"
          type="submit"
          className="btn btn--tertiary  w-full"
          disabled={isSubmitting}
        >
          Registrar Punto
        </button>

        <input type="hidden" name="location" />
      </form>
    </>
  );
};
