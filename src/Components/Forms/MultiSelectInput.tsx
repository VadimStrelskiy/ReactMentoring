import {useField, useFormikContext} from 'formik';
import {MultiSelect} from 'react-multi-select-component';

interface MultiSelectInputProps{
  label: string,
  placeholder: string,
  name: string,
  options: string[],
  errorClassName: string
}

export function MultiSelectInput({label, placeholder, name, options, errorClassName} : MultiSelectInputProps) {
  const {setFieldValue} = useFormikContext();
  const [field, {error, touched}] = useField({
    name: name,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>

      <MultiSelect hasSelectAll={false}
        options={options.map((g) => {
          return {label: g, value: g};
        })}
        value={field.value.map((g) => {
          return {label: g, value: g};
        })}
        onChange={(e) => {
          setFieldValue(field.name, e.map((g) => g.value));
        }}
        labelledBy={placeholder}/>
      {
          touched && error ?
            (<div className={errorClassName}>{error}</div>) :
           null
      }
    </>
  );
};
