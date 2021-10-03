import { useHistory } from "react-router-dom";
import "./item.scss";

function Item({ post }) {
  let history = useHistory();
  const { id, title, body } = post;
  console.log("title", title);
  function handleClick() {
    history.push("/ItemDetailPage/" + id);
  }

  return (
    <div className="card-item" onClick={handleClick}>
      <div className="card-item-img">
        <img src={`https://picsum.photos/id/${id}/400/600`} alt={"icon"+id} />
      </div>
      <div className="card-item-text">
        {" "}
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Item;
