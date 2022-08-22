import { faHistory, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { definitions } from '@/types/supabase';

import { Box } from '../box';

import { Card, CardImg, CardContent, CardTitle, CardText } from './tourCard.styles';

interface Props {
  data: definitions['tours'];
}

export const TourCard: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { id, name, price, duration, description } = data;

  return (
    <Card onClick={() => navigate(`/book-tour/${id}`)}>
      <CardImg src={`https://source.unsplash.com/random/?${name}`} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Box display="flex" justifyContent="space-between">
          <IconWithText icon={faDollar} text={price ?? ''} />
          <IconWithText icon={faHistory} text={duration ?? ''} />
        </Box>
      </CardContent>
    </Card>
  );
};

const IconWithText = ({ icon, text }: { icon: FontAwesomeIconProps['icon']; text: string }) => {
  return (
    <Box display="flex" alignItems="center" color="grey">
      <FontAwesomeIcon icon={icon} />
      <span style={{ marginLeft: '10px' }}>{text}</span>
    </Box>
  );
};
