import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { MapPointRegister } from '../components/point/MapPointRegister';
import { InputController } from '../components/share/InputController';
import { items } from '../core/constants/items';
import {
  createPointSchema,
  initialValuecreatePoint,
} from '../schemas/createPointSchema';

export const Point = () => {
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [errorMap, setErrorMap] = useState(false);
  const [errorItems, setErrorItems] = useState(false);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
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
    if (errorItems || errorMap) {
      return;
    }
    console.log(formValues);
    reset();
    setSelectedItems([]);
  };

  const changePointSelected = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  useEffect(() => {
    if (!latitude || !longitude) {
      setErrorMap(true);
    } else {
      setErrorMap(false);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (selectedItems.length === 0) {
      setErrorItems(true);
    } else {
      setErrorItems(false);
    }
  }, [selectedItems]);

  const handlerSelectedItems = (id: number) => {
    console.table(selectedItems);
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      return setSelectedItems(filteredItems);
    }
    return setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
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
          <p data-testid="map_input_error" className="text-red">
            {errorMap && 'Seleccione un punto en el mapa'}
          </p>
        </fieldset>

        <fieldset className="mb-10">
          <legend className="text-base font-bold text-grey-500">
            <h2>Artículos de Recolección</h2>
          </legend>
          <ul className="grid grid-cols-2">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handlerSelectedItems(item.id)}
                className={`m-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-xl border-2 py-9 pt-14 pb-6 text-center ${
                  selectedItems?.includes(item.id)
                    ? 'border-tertiary-500 bg-primary-500'
                    : 'border-grey-300 bg-grey-100 '
                }`}
                aria-hidden="true"
              >
                <img src={item.image} alt={item.name} className="h-40" />
                <span className="mt-5 font-bold ">{item.name}</span>
              </li>
            ))}
          </ul>
          <p data-testid="items_input_error" className="text-red">
            {errorItems && 'Seleccioe al menos un articulo'}
          </p>
        </fieldset>

        <button
          data-testid="submit_button"
          type="submit"
          className="btn btn--tertiary  w-full"
          disabled={isSubmitting}
        >
          Registrar Punto
        </button>
      </form>
    </>
  );
};
