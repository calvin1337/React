import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPosts = () =>  {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get("https://react-first-project-4e07c.firebaseio.com/Blog.json")
        .then(res => {
            const fetchedPosts = [];
            for(let key in res.data){
                fetchedPosts.push({
                    ...res.data[key],
                });
            }
            dispatch(fetchPostsSuccess(fetchedPosts));
        })
        .catch(err => {
            dispatch(fetchPostsFail(err))
        })
    }
}

export const fetchPostsSuccess = (fetchedPosts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: JSON.data
    } 
}

export const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error:error
    }
};

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START
    }
};

