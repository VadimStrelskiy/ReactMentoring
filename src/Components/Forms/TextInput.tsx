import {useField} from 'formik';

interface TextInputProps{
  label: string,
  placeholder: string,
  type: string,
  name: string,
  className: string,
  errorClassName: string
}

export function TextInput({label, placeholder, type, name, className, errorClassName} : TextInputProps) {
  const [field, {error, touched}] = useField({
    name: name,
    type: type,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className={className} {...field} placeholder={placeholder} type={type} />
      {
          touched && error ?
            (<div className={errorClassName}>{error}</div>) :
           null
      }
    </>
  );
};
