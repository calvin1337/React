import React, {Component} from 'react'
import style from "./blog.module.css"
import { connect } from "react-redux";
import BlogPost from "../../components/BlogPost/BlogPost";
import * as actions from "../../store/actions/blog";
import BlogLink from "../../components/BlogPost/BlogLink/BlogLink";
import axios from "axios";
import Modal from "../../components/Modal/Modal";


class Blog extends Component {

    state = {
        posts: [],
        showPost: false,
        showModal: false,
        key: "",
        currentPost: {},
        defaultPost: {
            title: "Welcome To My Blog",
            content: "Their Seems to be no posts try adding one",
        }
    }


    componentDidMount() {
        
       this.getPosts()
            
    }   

    getPosts = () => {
        axios.get("https://react-first-project-4e07c.firebaseio.com/Blog.json")
        .then(res => 

            {    
            

                const postUpdate = [];

                for(let key in res.data){
                    postUpdate.push({
                        ...res.data[key],
                        id: key,
                        key: key
                    });
                }

                console.log(postUpdate, "before push")

                if(postUpdate.length !== 0){
                    this.setState({testing: res.data})
                     var arr1 = []
                    var arr2 = Object.keys(postUpdate).map(function (i) {
                    return arr1.push(postUpdate[i])
                    
                  });
                  console.log(arr2)
                 
                  
                  this.setState({posts: arr1})
                  this.setState({key: arr1[0].key})
                  this.setState({currentPost: arr1[0]})
                  console.log(arr1)
            } else return this.setState({currentPost: this.state.defaultPost});
                
            });
    }
    
    

    

    postDeletedHandler = (key) => {
        console.log(this.state.posts, "delete")
        axios.delete(`https://react-first-project-4e07c.firebaseio.com/Blog/${key}.json`)
        .then(res => this.setState({ posts:[...this.state.posts.filter
            (post => post.key !== key)]}))  
            
            this.postChanged(key)

        }

        postChanged = (key) => {

            for(let i = 0; i < this.state.posts.length; i++){
                if(this.state.posts[i].id !== key) {
                   return (
                        this.setState({currentPost: this.state.posts[i], key:this.state.posts[i].key})
                   )
                   
            } else  {
                this.setState({currentPost: this.state.defaultPost})
            }
            
        }
    }

    
    postSelectedHandler = (key) => {
           this.setState({key: key})
        //    this.setState({currentPost: this.state.posts.map(post =>{
        //     if(post.id === key){
        //       console.log(post)
    //     //     } 
    //         return post;
    //       })});
    // }
     for(let i = 0; i < this.state.posts.length; i++){
         if(this.state.posts[i].id === key) {
             this.setState({currentPost: this.state.posts[i]})
         }
     }

    }


    postCloseHandler = () => {
        console.log("hello")
    }

    

   

    toggleModal = () => {
        this.setState(prevState => ({
          showModal: !prevState.showModal
          
        }));
      };

      
      closeModal = (e) => {
        if(e.target.className == "modal"){
           this.setState({showModal : !this.state.showModal})
            
        }
     }

      
    
    render(){

        

    //    let postsBlog = this.state.posts.slice(0,1).map(post => {
    //         return (
                
    //             <BlogPost key={post.id} content={post.content} time={post.time} id={post.id} day={post.day} month={post.month} title={post.title} >

                
                
    //         )})
     
       
    
        let postsLinks = this.state.posts.map(post => {
        return (
        
        <BlogLink clicked={() => this.postSelectedHandler(post.id)} key={post.id} id={post.id} title={post.title} dateposted={(post.day + " " + post.month)}/>
        
        )


        })

        
       
    
        return (
        
        <React.Fragment>
        <div className={style.BlogLandingPage}>
        <h1>Blog Landing Page</h1>
        </div>
        <div onClick={this.closeModal} > 
            <Modal submitted={this.props.submitted}  className="modal"  showModal={this.state.showModal} toggle={this.toggleModal}> </Modal>
        <div className={style.gridContainer}>


        <div className={style.BlogMainContent}>  
        <BlogPost key={this.state.keys} content={this.state.currentPost.content} time={this.state.currentPost.time} id={this.state.currentPost.id} day={this.state.currentPost.day} month={this.state.currentPost.month} title={this.state.currentPost.title} />
        </div>
        
        
        
        <div className={style.BlogSideBar}> 
             <div className={style.BlogSideBarContainer}> 

             <div className={style.BlogSideBarLinks}>
                <h3 className={style.LatestPost}>Latest Posts:</h3><br></br>
                {postsLinks}
             </div>
             <a onClick={this.toggleModal} className={style.button}>Add Post</a>
             <a className={style.buttonEdit}>Edit Post</a>
             <a onClick={() => this.postDeletedHandler(this.state.key)} className={style.buttonDelete}>Delete Post</a>


            </div>
            </div>
            
            {/* <div className={style.BlogSidePost}>
                <div className={style.BlogSideBarPostContainer}>
                <h1>Intro Blog</h1>


                </div>
            </div> */}
            
       
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