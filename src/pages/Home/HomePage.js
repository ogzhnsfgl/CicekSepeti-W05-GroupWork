import { getData } from "../../services/api";
import { useState, useEffect } from "react";
import Item from "../../components/Item";
import "./HomePage.scss";
function HomePage() {
  const [allPosts, setAllPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await getData();
      setAllPosts(data);

      // setIsLoading(false);
    })();
  }, []);

  console.log("allPosts", allPosts);

  /*if (isLoading) {
    return <h1>Loading</h1>;
  }*/

  return (
    <div className="container">
        <div className="cards">
          {allPosts.map((post) => (
            <Item key={post.id} post={post} />
          ))}
          hello
        </div>
    </div>
  );
}
export default HomePage;
