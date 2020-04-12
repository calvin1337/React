import * as actionTypes from "./actionTypes";
import axios from "axios";



export const fetchPostsSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        post: post
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

export const fetchPosts = () =>  {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get("https://react-first-project-4e07c.firebaseio.com/Blog/Post.json")
        .then(res => {
            const fetchedPosts = [];
            for(let key in res.data){
                fetchedPosts.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchPostsSuccess(fetchedPosts));
        })
        .catch(err => {
            dispatch(fetchPostsFail(err))
        })
    }
}