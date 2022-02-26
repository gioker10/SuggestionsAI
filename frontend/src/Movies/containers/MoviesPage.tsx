import React from 'react';
import { PageMain } from '../../common/components/PageMain';

interface Props {
  title: string;
}

export const MoviesPage = ({ title }): Props => {
  return <PageMain title={title} />;
};
