const video = {
  title: 'How to Learn Suomi',
  description: 'Can I really speak Suomi like a native?',
  comments: [
    {
      userId: 'A',// nivel 1
      comment: 'Very useful video, thanks for sharing!',
    },
    {
      userId: 'B',// nivel 1
      comment: "I don’t like it...",
      comments: [
        {
          userId: 'C',// nivel 2
          comment: 'Why not?',
          comments: [
            {
              userId: 'B',// nivel 3
              comment: "Because it was too fast and I couldn’t follow.",
              comments: [
                {
                  userId: 'C',// nivel 4
                  comment: "I get it, but you can pause or slow down the video.",
                  comments: [
                    {
                      userId: 'B', // nivel 5
                      comment: "Yeah, maybe I’ll try that next time.",
                    },
                  ],
                },
              ],
            },
            {
              userId: 'D',
              comment: "I think the speed was fine, it felt natural.",
            },
          ],
        },
      ],
    },
    {
      userId: 'E', // nivel 1
      comment: "Great pronunciation tips, I’ll practice them today!",
    },
  ],
};

function showComments(comments, level = 0){

   for(const comment of comments){
      const space = " ".repeat(level * 2);
      console.log(`${space}${comment.userId}: ${comment.comment}`)

      if(comment.comments){
         showComments(comment.comments, level + 1);
      }
   }
}

showComments(video.comments);