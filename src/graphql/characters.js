import { gql } from '@apollo/client';

export const CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page, filter: null) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
