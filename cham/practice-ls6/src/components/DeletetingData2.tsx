import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Albums {
  id: number;
  title: string;
}

const DeletetingData2 = () => {
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const deleteAlbum = (album: Albums) => {
    const originalAlbums = [...albums];
    setAlbums(albums.filter((a) => a.id != album.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/photos" + album.id)
      .catch((err) => {
        setError(err);
        setAlbums(originalAlbums);
      });
  };

  const addAlbum = () => {
    const originalAlbums = [...albums];

    const newAlbum: Albums = {
      id: 0,
      title: "mama",
    };

    setAlbums([newAlbum, ...albums]);

    axios
      .post("https://jsonplaceholder.typicode.com/albums", newAlbum)
      .then(({ data: savedAlbums }) => setAlbums([savedAlbums, ...albums]))
      .catch((err) => {
        setError(err.message);
        setAlbums(originalAlbums);
      });
  };

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    axios
      .get<Albums[]>("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setAlbums(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controler.abort();
  }, []);
  return (
    <>
      <h2>DeletetingData2</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <button className="btn btn-primary mb-3" onClick={addAlbum}>
            Add
          </button>
          {albums.map((album) => (
            <tr key={album.id}>
              <th scope="col">{album.id}</th>
              <td>{album.title}</td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteAlbum(album)}
              >
                Del
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className=" spinner-border"></div>}
    </>
  );
};

export default DeletetingData2;
