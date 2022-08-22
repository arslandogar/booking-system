import { Box, BookingForm } from '@/components';
import { AppLayout } from '@/layouts';

import { CoverImage } from './bookTour.styles';

export const BookTour = () => {
  return (
    <AppLayout>
      <Box
        display="flex"
        width={1}
        flexDirection={['column', null, 'row']}
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" pl="5%" pr="20%" width={[1, null, 1 / 2]}>
          <h1>Confirm Your Booking</h1>
          <Box display="flex" flexDirection="column" pt={60}>
            <BookingForm />
          </Box>
        </Box>
        <Box width={[1, null, 1 / 2]}>
          <CoverImage src="https://source.unsplash.com/random?tour" />
        </Box>
      </Box>
    </AppLayout>
  );
};
