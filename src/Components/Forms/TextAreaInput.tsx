import {useField} from 'formik';

interface TextAreInputProps{
  label: string,
  placeholder: string,
  name: string,
}

export function TextAreaInput({label, placeholder, name} : TextAreInputProps) {
  const [field, {error, touched}] = useField({
    name: name,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea className="form-input" {...field} placeholder={placeholder} />
      {
          touched && error ?
            (<div className="error">{error}</div>) :
           null
      }
    </>
  );
};
