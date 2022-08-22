import * as Yup from 'yup';

export const bookingFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  phone: Yup.string().required('Phone is required'),
  numOfAdults: Yup.number()
    .min(1, 'Number of adults must be greater than or equal to 1')
    .required('Number of adults is required'),
  numOfChildren: Yup.number()
    .min(0, "Number of children can't be less than 0")
    .required('Number of children is required'),
  paymentMethod: Yup.string().required('Payment method is required'),
});
