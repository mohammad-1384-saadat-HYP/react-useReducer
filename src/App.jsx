import React, {useEffect, useReducer, useState} from 'react';
import SelectPost from "./Components/SelectPost/SelectPost.jsx";
import Loading from "./Components/Loading/Loading.jsx";

const reducerFun = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return {count: 0};
        default:
            return state;
    }
}

const initialState = {count: 0}

const App = () => {
    // دوره 7learn
    // const [postId, setPostId] = useState(1);
    // const [isLoading, setIsLoading] = useState(true);
    // const [title, setTitle] = useState("");
    //
    // const plusPostId = () => setPostId(prevState => prevState + 1);
    // const minusPostId = () => setPostId(prevState => prevState - 1 > 0 ? prevState - 1 : 1);
    //
    // const fetchPosts = async () => {
    //     try {
    //         setIsLoading(true)
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    //         if (!response.ok) {
    //             setIsLoading(false);
    //             alert("Network...is...not...O...K!?");
    //         } else {
    //             const data = await response.json();
    //             setTitle(data.title);
    //             setIsLoading(false);
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchPosts();
    // }, [postId]);

    // const [count, setCount] = useState(0);
    //
    // function increment() {
    //     setCount(count + 1);
    // }
    //
    // function decrement() {
    //     setCount(count - 1);
    // }
    //
    // function reset() {
    //     setCount(0);
    // }

    const [state, dispatch] = useReducer(reducerFun, initialState);

    return (
        // دوره 7learn
        // <>
        //     {
        //         isLoading
        //             ?
        //             <Loading/>
        //             :
        //             <>
        //                 <SelectPost postId={postId} plusFun={plusPostId} minusFun={minusPostId}/>
        //                 <h1>{title}</h1>
        //             </>
        //     }
        // </>
        <div className="counter">
            {/*<h2>Counter: {count}</h2>*/}
            {/*<div className="buttons">*/}
            {/*    <button onClick={increment}>+</button>*/}
            {/*    <button onClick={decrement}>−</button>*/}
            {/*    <button onClick={reset}>Reset</button>*/}
            {/*</div>*/}
            <h2>Counter: {state.count}</h2>
            <div className="buttons">
                <button onClick={() => dispatch({type: "increment"})}>+</button>
                <button onClick={() => dispatch({type: "decrement"})}>−</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </div>
        </div>
    );
};

export default App