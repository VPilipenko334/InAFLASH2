export const fetchComment = (commentId) => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${commentId}`
    })
);

export const fetchComments = (pictureId) => (
    $.ajax({
        method: 'GET',
        url: `/api/pictures/${pictureId}/comments`
    })
);


export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: comment
    })
);


export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);