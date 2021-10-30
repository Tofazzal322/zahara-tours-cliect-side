import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    // fetch('/data.json')
    fetch("https://damp-castle-34013.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <p> Data Loading..........</p>;
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
