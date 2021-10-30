import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    // fetch('/data.json')
    fetch("http://localhost:5000/packages")
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
