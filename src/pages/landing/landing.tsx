import { useTours } from '@/api';
import { TourCard } from '@/components';
import { AppLayout } from '@/layouts';

import { ToursContainer } from './landing.styles';

export const Landing = () => {
  const { data } = useTours();

  return (
    <AppLayout>
      <ToursContainer>
        {data?.map((tour) => (
          <TourCard key={tour.id} data={tour} />
        ))}
      </ToursContainer>
    </AppLayout>
  );
};
