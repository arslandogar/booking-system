import { useBookings } from '@/api';
import { TourCard } from '@/components';
import { AppLayout } from '@/layouts';

import { ToursContainer } from './myTours.styles';

export const MyTours = () => {
  const { data } = useBookings();

  return (
    <AppLayout>
      <ToursContainer>
        {data?.map((booking) => (
          <TourCard key={booking.id} data={booking.tour} />
        ))}
      </ToursContainer>
    </AppLayout>
  );
};
