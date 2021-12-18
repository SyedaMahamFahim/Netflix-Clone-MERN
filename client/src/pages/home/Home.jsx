import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWQ4ZTcyODViNzU4YWUxOTM1MGI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzU0MDg0NSwiZXhwIjoxNjMzOTcyODQ1fQ.BKfboIFiOI-1g-xWXHOpTK62UpEhtoQ9q-Cr97NV4-8",
            },
          }
        );
        console.log(res.data)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
    <Navbar />
    <Featured type={type} setGenre={setGenre} />
    {lists.map((list,index) => (
      <List list={list} key={index}/>
    ))}
  </div>
  );
};

export default Home;
