import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <img src={detail.large_cover_image} alt={detail.title} />
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
