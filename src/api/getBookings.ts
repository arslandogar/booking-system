import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { supabase } from '@/lib/supabase';
import { definitions } from '@/types/supabase';

type Bookings = definitions['bookings'];

interface Booking extends Bookings {
  tour: definitions['tours'];
}

const getBookings = async () => {
  const response = await supabase.from<Booking>('bookings').select('*, tour:tours(*)').order('id');
  const { data, error } = response;

  if (error) {
    throw error;
  }
  return data;
};

type QueryFnType = typeof getBookings;

type UseOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useBookings = ({ config }: UseOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['bookings'],
    queryFn: () => getBookings(),
  });
};
