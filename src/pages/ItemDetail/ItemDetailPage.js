import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";

const ItemDetailPage = (props) => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await getData(id);
      setFetchedData(data);
      setError(error);
      setIsLoading(false);
    })();
  }, []);

  console.log("log ozi", fetchedData);
  console.log("log ozi", id);

  if (error) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div> Loading.... </div>;
  }

  return (
    <div>
      <img src={`https://picsum.photos/id/${id}/400/600`} alt={"icon"+id}/>
      <h1> {fetchedData.title} </h1>
      <h1> {fetchedData.body} </h1>
    </div>
  );
};

export default ItemDetailPage;
