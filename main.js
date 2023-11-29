
const tweeter = Tweeter()
const renderer = Renderer()


const post = function(){
    tweeter.addPost($('#input').val())
    $('#input').val('')
    renderer.renderPosts(tweeter.getPosts())
}
$("#posts").on('click',".delete", function() {
   let id =  $(this).attr('id')
   tweeter.removePost(id)
   renderer.renderPosts(tweeter.getPosts())
  })
$("#posts").on('click',".commentButton", function() {
    let postID =  $(this).attr('id')
    const commentID = $(this).siblings(".commentInput").val();
    tweeter.addComment(postID,commentID)
    renderer.renderPosts(tweeter.getPosts())

  })
  $("#posts").on('click',".comRemoveBtn", function() {
    let commentID =  $(this).attr('comment-id')
    let postID =  $(this).attr('post-id')
    tweeter.removeComment(postID,commentID)
   renderer.renderPosts(tweeter.getPosts())

  })

