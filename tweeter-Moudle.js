const Tweeter = function(){
    const _posts = []
    let postIdCounter = 1
    let commentIdCounter = 1

    const getPosts = function(){
        return _posts
    }

    const addPost = function(text){
    if (!text.replace(/\s/g, '').length) {return}
    let newpost = {id:"p"+postIdCounter,text:text,comments : []}
    _posts.push(newpost)
    postIdCounter++
    return true
    } 

    const removePost = function(postID){
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                indexToRemove = i;
                break;
            }
        }  
        if (indexToRemove !== -1) {
            _posts.splice(indexToRemove, 1);
        }
    }

    const addComment = function(postID,text ){
        if (!text.replace(/\s/g, '').length) {return}
        let newcomment = {id :"c"+commentIdCounter , text : text}
        for (let i = 0; i < _posts.length; i++){
            if (_posts[i].id == postID)
            {
                _posts[i].comments.push(newcomment)
                commentIdCounter++
            }
        }       
    }

   const removeComment =  function (postID, commentID) {
        let postIndex = -1        
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                postIndex = i
                break
            }
        }    
        if (postIndex !== -1) {
            let comments = _posts[postIndex].comments;
            let commentIndex = -1    
            for (let j = 0; j < comments.length; j++) {
                if (comments[j].id === commentID) {
                    commentIndex = j
                    break
                }
            }    
            if (commentIndex !== -1) {
                comments.splice(commentIndex, 1)
            } else {
            }
        } else {
            console.log(`Post with ID ${postID} not found`)
        }
    }
    
    return {  getPosts,addPost,removePost,addComment,removeComment }
}