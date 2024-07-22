import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { CHARACTER_DETAIL } from '../../graphql/character';
import classes from './index.module.scss';

function Detail() {
  const client = useApolloClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await client.query({
          query: CHARACTER_DETAIL,
          variables: { id },
        });
        console.log('Data fetched:', data);
        setData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [client, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { character } = data;

  return (
    <div className={classes.detail}>
      <h1>{character?.name}</h1>
      <img src={character?.image} alt={character?.name} loading="lazy" />
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Type: {character?.type}</p>
      <p>Gender: {character?.gender}</p>
      <p>Created: {character?.created}</p>
    </div>
  );
}

export default Detail;
