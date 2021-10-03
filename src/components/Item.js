import { useHistory } from "react-router-dom";
import "./item.scss";

function Item({ post }) {
  let history = useHistory();
  const { id, title, body } = post;

  function handleClick() {
    history.push("/ItemDetailPage/" + id);
  }

  return (
    <div className="card-item" onClick={handleClick}> 
      
      <div className="card-item-text">
        
              <h2>{title}</h2>
              <p>{body}</p>
            </div>  
            <div className="card-item-img">
                <img src={`https://picsum.photos/id/${id}/200/300`}  alt="post"/>
            </div>

        
    </div>
  );
}

export default Item;
