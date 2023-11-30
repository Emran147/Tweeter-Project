
const tweeter = Tweeter()
const renderer = Renderer()


const post = function(){
    const postText =$('#input').val()
    var formattedInput = postText.replace(/\n/g, "<br>");
    tweeter.addPost(formattedInput)
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
    const commentText = $(this).siblings(".commentInput").val();
    var formattedInput = commentText.replace(/\n/g, "<br>");
    tweeter.addComment(postID,formattedInput)
    renderer.renderPosts(tweeter.getPosts())

  })
  $("#posts").on('click',".comRemoveBtn", function() {
    let commentID =  $(this).attr('comment-id')
    let postID =  $(this).attr('post-id')
    tweeter.removeComment(postID,commentID)
   renderer.renderPosts(tweeter.getPosts())

  })

