import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { MutationConfig } from '@/lib/react-query';
import { supabase } from '@/lib/supabase';
import { definitions } from '@/types/supabase';

export const bookTour = async (data: Omit<definitions['bookings'], 'id'>) => {
  const { error } = await supabase.from('bookings').insert([data]);
  if (error) {
    throw error;
  }
};

type UseOptions = {
  config?: MutationConfig<typeof bookTour>;
};

export const useBookTour = ({ config }: UseOptions = {}) => {
  return useMutation({
    onSuccess: () => {
      toast.success("You've booked the tour successfully!");
    },
    ...config,
    mutationFn: bookTour,
  });
};
