import {useField, useFormikContext} from 'formik';
import DatePicker from 'react-datepicker';

interface DatePickerInputProps{
  label: string,
  placeholder: string,
  name: string,
}

export function DatePickerInput({label, placeholder, name} : DatePickerInputProps) {
  const {setFieldValue} = useFormikContext();
  const [field, {error, touched}] = useField({
    name: name,
  });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <DatePicker className='form-input' selected={(field.value && new Date(field.value)) || null}
        onChange={(v) => {
          setFieldValue(field.name, v);
        }} placeholder={placeholder} />
      {
          touched && error ?
            (<div className="error">{error}</div>) :
           null
      }
    </>
  );
};
