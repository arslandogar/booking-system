import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { supabase } from '@/lib/supabase';
import { definitions } from '@/types/supabase';

const getTours = async () => {
  const response = await supabase.from<definitions['tours']>('tours').select().order('id');
  const { data, error } = response;

  if (error) {
    throw error;
  }
  return data;
};

type QueryFnType = typeof getTours;

type UseOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTours = ({ config }: UseOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['tours'],
    queryFn: () => getTours(),
  });
};
