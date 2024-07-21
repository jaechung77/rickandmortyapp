import { gql } from '@apollo/client';

export const CHARACTERS = gql`
  query Characters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
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
