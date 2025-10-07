import React, {useEffect, useState} from 'react';
import SelectPost from "./Components/SelectPost/SelectPost.jsx";
import Loading from "./Components/Loading/Loading.jsx";

const App = () => {
    const [postId, setPostId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("");

    const plusPostId = () => setPostId(prevState => prevState + 1);
    const minusPostId = () => setPostId(prevState => prevState - 1 > 0 ? prevState - 1 : 1);

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
                setIsLoading(false);
                alert("Network...is...not...O...K!?");
            } else {
                const data = await response.json();
                setTitle(data.title);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [postId]);

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