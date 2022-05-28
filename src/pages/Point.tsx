import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { InferType } from 'yup';
import { MapPointRegister } from '../components/point/MapPointRegister';
import Dropzone from '../components/share/DropZone';
import { InputController } from '../components/share/InputController';
import { items } from '../core/constants/items';
import { useFetch } from '../hooks';
import {
  createPointSchema,
  initialValuecreatePoint,
} from '../schemas/createPointSchema';
import { createPoint } from '../services';
import { insertDeleteStringArray } from '../utilities';

export const Point = () => {
  const { callEndpoint, loading } = useFetch();
  const [cookie] = useCookies(['jwt']);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [errorMap, setErrorMap] = useState(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [errorItems, setErrorItems] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File>();
  const [errorFile, setErrorFile] = useState(false);

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

  const onSubmit = async ({
    email,
    name,
    phone,
  }: InferType<typeof createPointSchema>) => {
    if (errorItems || errorMap) {
      return;
    }

    const newPoint = new FormData();

    newPoint.append('name', name.trim().toLocaleLowerCase());
    newPoint.append('email', email.trim().toLocaleLowerCase());
    newPoint.append('phone', phone.trim().toLocaleLowerCase());
    newPoint.append('items', selectedItems.join(','));
    newPoint.append('longitude', String(longitude));
    newPoint.append('latitude', String(latitude));

    if (selectedFile) {
      newPoint.append('image', selectedFile);
    }

    await callEndpoint(createPoint(newPoint, cookie.jwt));

    toast.success('punto creado');

    reset();
    setSelectedItems([]);
    setSelectedFile(undefined);
  };

  const changePointSelected = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handlerSelectedItems = (item: string) => {
    setSelectedItems((currentSelectedItems) =>
      insertDeleteStringArray(currentSelectedItems, item)
    );
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

  useEffect(() => {
    if (!selectedFile) {
      setErrorFile(true);
    } else {
      setErrorFile(false);
    }
  }, [selectedFile]);

  return (
    <main className="my-24 main">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__title">Punto de Recolección</h2>

        <fieldset className="mb-10">
          <legend className="text-base font-bold text-grey-500">
            <h2>Seleccione una Imagen de la Organización *</h2>
          </legend>
          <Dropzone
            onFileUploaded={setSelectedFile}
            selectedFile={selectedFile}
          />
          <p data-testid="map_input_error" className="text-red">
            {errorFile && 'Seleccione una Imagen'}
          </p>
        </fieldset>

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
                onClick={() => handlerSelectedItems(item.name)}
                className={`m-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-xl border-2 py-9 pt-14 pb-6 text-center ${
                  selectedItems?.includes(item.name)
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
          className="w-full btn btn--tertiary"
          disabled={isSubmitting || loading}
        >
          Registrar Punto
        </button>
      </form>
    </main>
  );
};
