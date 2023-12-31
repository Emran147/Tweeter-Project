const Renderer  = function(){
  
    const renderPosts = function(_posts){
        for (let i = 0; i < _posts.length; i++) {
             createPostTitle(_posts[i].text,_posts[i].id)
            if (_posts[i].comments.length > 0) {
                for (let j = 0; j < _posts[i].comments.length; j++) { 
                        createrCommentArea(_posts[i].id,_posts[i].comments[j].id,_posts[i].comments[j].text)
                    }
            } else {
                        $(`#${_posts[i].id}`).append(` <div id="noCommentDiv"> there is no comments  yet </div>`)
                }
                createBottomArea(_posts[i].id)         
        }
    }

    const createPostTitle = function(postText,postID){
        const dynamicDiv1= `<div class="containerdiv" id="${postID}"></div>`
        $("#posts").append($(dynamicDiv1))
        const dynamicH1 = `<div><h1> ${postText} </h1></div>`;
        $(`#${postID}`).append($(dynamicH1))
    }

    const createrCommentArea = function(postID,commentID,commentText){
    const dynamicDiv = `<div>
                        <Button class="comRemoveBtn" comment-id="${commentID}" post-id="${postID}" > </Button>
                        <h3 class="comments" > ${commentText}</h3>
                        </div>`
    $(`#${postID}`).append($(dynamicDiv))                    
    }

    const createBottomArea = function(postID){
    const dynamicDiv   =  `<div>
                            <textarea class="commentInput" name=" type="text" placeholder="write your comment here" ></textarea>
                            <button  id="${postID}" class="commentButton" type="button">Comment!</button>
                            <button id="${postID}"  class="delete">Delete post</button>
                            </div>`       
    $(`#${postID}`).append($(dynamicDiv)) 

    }
    
    const render = function (_posts){
        $('#posts').empty()
        renderPosts(_posts)
    }
    
    return {renderPosts: render }
}