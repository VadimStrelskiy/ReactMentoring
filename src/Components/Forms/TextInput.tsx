import {useField} from 'formik';

interface TextInputProps{
  label: string,
  placeholder: string,
  type: string,
  name: string,
}

export function TextInput({label, placeholder, type, name} : TextInputProps) {
  const [field, {error, touched}] = useField({
    name: name,
    type: type,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className="form-input" {...field} placeholder={placeholder} type={type} />
      {
          touched && error ?
            (<div className="error">{error}</div>) :
           null
      }
    </>
  );
};
