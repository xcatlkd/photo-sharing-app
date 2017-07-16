/* globals $ */

var $likeButtons = $(".post-like")

$likeButtons.on("click", function(ev) {
 var $btn = $(ev.target);
 var postId = $btn.data("postid");
 $.ajax("/posts/" + postId + "/like", {
 method: "POST",
 success: function() {

 // If all went well, add a class that shows they liked it
 $btn.addClass("isLiked");
 },
 error: function() {

 // If it goes wrong, let them know, unlike button
 alert("Unable to like post");
 $btn.removeClass("isLiked");
 },
 });
});
