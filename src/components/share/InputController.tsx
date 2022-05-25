import { Control, useController } from 'react-hook-form';

interface InputControllerProps {
  control: Control<any>;
  nameInput: string;
  typeField: string;
  labelInput: string;
}

export const InputController = ({
  control,
  nameInput,
  typeField,
  labelInput,
}: InputControllerProps) => {
  const {
    field: { name, onChange, ref, value },
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({
    name: nameInput,
    control,
    rules: { required: true },
  });
  return (
    <div className="mb-10">
      <label
        data-testid={`${name}_input_label`}
        htmlFor={name}
        className="block text-lg font-bold text-grey-500"
      >
        {labelInput}
        <input
          type={typeField}
          id={name}
          disabled={isSubmitting}
          name={name}
          ref={ref}
          onChange={onChange}
          value={value}
          data-testid={`${name}_input_field`}
          className={`h-full w-full rounded-lg border-2 border-grey-600 bg-white  px-3 py-3 text-grey-800 transition duration-500 ${
            error?.message ? ' focus:border-red' : ' focus:border-primary-500'
          } focus:outline-none ${error && 'border-red'}`}
        />
      </label>
      <p data-testid={`${name}_input_error`} className="text-red">
        {error?.message && error.message}
      </p>
    </div>
  );
};
