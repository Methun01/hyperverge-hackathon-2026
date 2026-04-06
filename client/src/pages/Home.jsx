import { useEffect } from 'react';
import API from "../services/api";

function Home(){
    useEffect(() => {
        API.get("/")
            .then((res) => console.log(res.data))
            .catch((err) => console.error("Error calling API: ", err));
    }, []);
    return <h1>Home Page</h1>;
};
export default Home;