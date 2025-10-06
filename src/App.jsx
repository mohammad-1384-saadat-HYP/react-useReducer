import React, {useEffect, useState} from 'react';
import SelectPost from "./Components/SelectPost/SelectPost.jsx";
import Loading from "./Components/Loading/Loading.jsx";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("");

    const plusPostId = () => setPostId(prevState => prevState + 1 <= posts.length ? prevState + 1 : prevState);
    const minusPostId = () => setPostId(prevState => prevState - 1 > 0 ? prevState - 1 : 1);

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                alert("Network ... is Bro...ke...n...!?");
                return;
            }
            const data = await response.json();
            setPosts(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            {
                isLoading
                    ?
                    <Loading/>
                    :
                    <>
                        <SelectPost postId={postId} plusFun={plusPostId} minusFun={minusPostId}/>
                        <h1>{title}</h1>
                    </>
            }
        </>
    );
};

export default App