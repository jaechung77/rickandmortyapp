import React, { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { CHARACTERS } from '../../graphql/characters';

function List() {
  const client = useApolloClient();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await client.query({
          query: CHARACTERS,
          variables: { page },
        });
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [client, page]);

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {data?.characters?.results?.map((res) => (
        <div key={res.id}>
          <p>name: {res.name}</p>
        </div>
      ))}
      {console.log(page)}
      {page > 1 && (
        <button onClick={() => setPage((prevPage) => prevPage - 1)}>
          Prev Page
        </button>
      )}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Next Page
      </button>
    </>
  );
}

export default List;
