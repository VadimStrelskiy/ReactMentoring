import {useField} from 'formik';

interface TextAreInputProps{
  label: string,
  placeholder: string,
  name: string,
  className: string,
  errorClassName: string
}

export function TextAreaInput({label, placeholder, name, className, errorClassName} : TextAreInputProps) {
  const [field, {error, touched}] = useField({
    name: name,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea className={className} {...field} placeholder={placeholder} />
      {
          touched && error ?
            (<div className={errorClassName}>{error}</div>) :
           null
      }
    </>
  );
};
