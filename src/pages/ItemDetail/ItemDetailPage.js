import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";
import './ItemDetailPage.scss'
import { useHistory } from "react-router-dom";

const ItemDetailPage = (props) => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();
  useEffect(() => {
    (async () => {
      const { data, error } = await getData(id);
      setFetchedData(data);
      setError(error);
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div> Loading.... </div>;
  }
  const returnToCardList = () => {
    history.push("/home");
  }
  return (
    <div className="item-wrapper">
      
      <img className="return-icon" onClick={returnToCardList} src="data:image/png;base64,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" alt=""/>
      <span className="return-text">Return To List</span>
      <div className="content-wrapper">
        <h1> {fetchedData.title} </h1>
        <h2> {fetchedData.body} </h2>
      </div>
      <img src={`https://picsum.photos/id/${id}/400/600`} alt="post"/>
      
    </div>
  );
};

export default ItemDetailPage;
