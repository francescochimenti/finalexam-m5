import SingleComment from '../singleComment/singleComment';
import AddComment from '../addComment/AddComment'

function CommentArea() {
  return (
    <div>
      <AddComment/>
        <SingleComment/>
    </div>
  );
}

export default CommentArea;
