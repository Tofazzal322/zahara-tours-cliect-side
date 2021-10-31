import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const useData = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // fetch('/data.json')
    fetch("https://damp-castle-34013.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>;
        } else {
          setData(data);
        }
      });
  }, []);

  return {
    data,
    setData,
  };
};
export default useData;
