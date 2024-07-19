import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { CHARACTERS } from '../../graphql/characters';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

function List() {
  const { data, loading, error } = useQuery(
    gql`
      ${CHARACTERS}
    `
  );

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return data?.characters?.results?.map((res) => (
    <div>
      <p>name: {res.name}</p>
    </div>
  ));
}

export default List;
