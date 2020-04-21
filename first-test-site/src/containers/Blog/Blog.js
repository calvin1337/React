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
        selectedPost : 0,
        currentContent: "",
        currentTitle: "Welcome To My Blog",
        month: "",
        day: 0,
        showPost: false,
        showModal: false,
        testing: ""
        
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
                        id: key
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
                  this.setState({selectedPost: arr1[0].id})
                  this.setState({currentContent: arr1[0].content})
                  this.setState({currentTitle: arr1[0].title})
                  this.setState({day: arr1[0].day})
                  this.setState({month: arr1[0].month})
                  console.log(arr1)
            } else return null;
                
            });
    }
    
    

    postSelectedHandler = (key) => {
        // console.log(this.state.testing[key].title, key)
        
        this.setState({currentContent: this.state.testing[key].content})
        this.setState({currentTitle: this.state.testing[key].title})
        this.setState({month: this.state.testing[key].month})
        this.setState({day: this.state.testing[key].day})

    }

    postDeletedHandler = (key) => {
        console.log(this.state.posts, "delete")
        axios.delete(`https://react-first-project-4e07c.firebaseio.com/Blog/${key}.json`)
        .then(res => this.setState({ posts:[...this.state.posts.filter
            (post => post.id !== key)]}))
            delete this.state.testing[key]
            console.log(this.state.testing)
        }
    
    postCloseHandler = () => {
        console.log("hello")
    }

    // currentPost = () => {
    //     console.log(this.state.posts.length)
    //     if(this.state.posts.length >= 1){
    //         this.setState({currentContent: this.state.posts[0].content})
    //         this.setState({currentTitle: this.state.posts[0].title})
    //         this.setState({month: this.state.posts[0].month})
    //         this.setState({day: this.state.posts[0].day})
    //         this.setState({selectedPost: this.state.posts[0].id})

    //     } else if(this.state.posts.length === 0) {
    //         this.setState({currentContent: "New Posts Coming Soon!"})
    //         this.setState({currentTitle: "Welcome To My Blog"})
    //         this.setState({month: "April"})
    //         this.setState({day: 20})
    //     }

    // }

   

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
                
    //             <BlogPost selectedPost={this.state.selectedPost} key={post.id} content={post.content} time={post.time} id={post.id} day={post.day} month={post.month} title={post.title} />

                
                
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
                 <BlogPost day={this.state.day} month={this.state.month} currentContent={this.state.currentContent} currentTitle={this.state.currentTitle} currentPost={this.state.selectedPost} />
                   {/* {postsBlog} */}
        </div>
        
        
        
        <div className={style.BlogSideBar}> 
             <div className={style.BlogSideBarContainer}> 

             <div className={style.BlogSideBarLinks}>
                <h3 className={style.LatestPost}>Latest Posts:</h3><br></br>
                {postsLinks}
             </div>
             <a onClick={this.toggleModal} className={style.button}>Add Post</a>
             <a className={style.buttonEdit}>Edit Post</a>
             <a onClick={() => this.postDeletedHandler(this.state.selectedPost)} className={style.buttonDelete}>Delete Post</a>


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