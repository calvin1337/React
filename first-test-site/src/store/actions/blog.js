import * as actionTypes from "./actionTypes";
import axios from "axios";



export const fetchPostSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        post: post
    }
}

export const fetchPostFail = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAIL,
        error:error
    }
};

export const fetchPostStart = () => {
    return {
        type: actionTypes.FETCH_POST_START
    }
};

export const fetchPosts = () =>  {
    return dispatch => {
        dispatch(fetchPostStart());
        axios.get("https://react-first-project-4e07c.firebaseio.com/Blog/Post.json")
        .then(res => {
            const fetchedPosts = [];
            for(let key in res.data){
                fetchedPosts.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchPostSuccess(fetchedPosts));
        })
        .catch(err => {
            dispatch(fetchPostFail(err))
        })
    }
}