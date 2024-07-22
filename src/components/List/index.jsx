import React, { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { CHARACTERS } from '../../graphql/characters';
import { Link } from 'react-router-dom';

function List() {
  const client = useApolloClient();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await client.query({
        query: CHARACTERS,
        variables: { page, name: searchTerm },
      });
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await client.query({
          query: CHARACTERS,
          variables: { page, name: searchTerm },
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
      <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {console.log(searchTerm)}
      <button onClick={handleClick}>Search</button>
      {data?.characters?.results?.map((res) => (
        <div key={res.id}>
          <p>
            name:
            <Link to={`/detail/${res.id}`}>{res.name}</Link>
          </p>
        </div>
      ))}

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
