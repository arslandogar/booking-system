import { useFormik } from 'formik';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useParams } from 'react-router-dom';

import { useBookTour } from '@/api';
import { Box } from '@/components';

import { Input, Label, Button, ErrorMessage } from './bookingForm.styles';
import { bookingFormSchema } from './bookingFormSchema';

export const BookingForm = () => {
  const { tourId } = useParams();
  const { mutate, isLoading } = useBookTour();
  const formik = useFormik({
    validationSchema: bookingFormSchema,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      numOfAdults: 0,
      numOfChildren: 0,
      paymentMethod: '',
    },
    onSubmit: (values) => {
      mutate({ tourId: parseInt(tourId as string), ...values });
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  console.log(values);

  return (
    <LoadingOverlay active={isLoading}>
      <form onSubmit={handleSubmit}>
        {Object.keys(values).map((key) => {
          const value = values[key as keyof typeof values];
          const error = errors[key as keyof typeof errors];
          return (
            <Box key={key} display="flex" flexDirection="column" mb={10}>
              <Label htmlFor={key}>{_.capitalize(key)}</Label>
              <Input
                id={key}
                name={key}
                type={typeof value === 'string' ? 'text' : 'number'}
                value={value}
                onChange={handleChange}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </Box>
          );
        })}
        <Button type="submit">Confirm</Button>
      </form>
    </LoadingOverlay>
  );
};
