
const tweeter = Tweeter()
const renderer = Renderer()
const input =$('#input')


const post = function(){
    const postText = input.val()
    let formattedInput = postText.replace(/\n/g, "<br>");
    tweeter.addPost(formattedInput)
    input.val('')
    renderer.renderPosts(tweeter.getPosts())
}


$("#posts").on('click',".delete", function() {
   const id =  $(this).attr('id')
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

const render = function(){
  renderer.renderPosts(tweeter.getPosts())
}

const greetingFunc = function(){
    const currentHour = new Date().getHours();
    // Check if it's morning (before 12 PM)
    if (currentHour < 12) {
      alert("Good morning!");
      $( "#title" ).append( "<p><greeting> Good morning!</gretting></p>" );
    } else { // It's afternoon or later
      alert("Good afternoon!");
      $( "#title" ).append( "<p><greeting> Good afternoon!</gretting></p>");
    }
  }

  greetingFunc()