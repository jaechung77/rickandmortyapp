import { gql } from '@apollo/client';

export const CHARACTER_DETAIL = gql`
  query Characters($id: ID!) {
    character(id: $id) {
      name
      status
      id
      species
      type
      gender
      image
    }
  }
`;
