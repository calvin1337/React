import React, {Component} from 'react'
import style from "./blog.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import BlogPost from "../../components/BlogPost/BlogPost";
import * as actions from "../../store/actions/blog";
import axios from "axios";


class Blog extends Component {

    state = {
        posts: []

        
    }


    componentDidMount() {
        console.log(this.state)
        axios.get("https://react-first-project-4e07c.firebaseio.com/Blog.json")
        .then(res => 
            {
                const postUpdate = res.data;
                console.log(res.data)
                var arr1 = []
                var arr2 = Object.keys(postUpdate).map(function (i) {
                    return arr1.push(postUpdate[i])
                    
                  });
                  console.log(arr1)
                  
                  this.setState({posts: arr1})
            });

            

        // axios.get( 'https://jsonplaceholder.typicode.com/posts' )
        // .then( response => {
        //     const posts = response.data.slice(0, 4);
        //     const updatedPosts = posts.map(post => {
        //         return {
        //             ...post,
                    
        //         }
        //     });
        //     this.setState({posts: updatedPosts});
            
        // } )

            
        
    }


  
    
    render(){

       let postsBlog = this.state.posts.map(post => {
            return (
            
                <BlogPost key={post.id} content={post.content} time={post.time} id={post.id} day={post.day} month={post.month} title={post.title} />

           
     
        );
        });
    
       
    
        return (
        
        <React.Fragment>
        <div className={style.BlogLandingPage}>
        <h1>Blog Landing Page</h1>
        </div>
        <div> 
        <div className={style.gridContainer}>


        <div className={style.BlogMainContent}>  
    
                   {postsBlog}

        
        </div>
        
        
        
        <div className={style.BlogSideBar}> 
             <div className={style.BlogSideBarContainer}> 
             <Link to="/" className={style.button}>Add Post</Link>

            <h4>*LINKS TO POST</h4>
            <h4>*LINKS TO POSTS*</h4>
            <h4>*LINKS TO POSTS*</h4>
            </div>
        </div>
        </div>
        </div>
        
        </React.Fragment>
    )}
    
}



const mapStateToProps = state => {
    return {
        
        loading: state.loading,
        
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog, axios);