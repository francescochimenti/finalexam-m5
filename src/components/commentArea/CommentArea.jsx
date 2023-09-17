import SingleComment from '../singleComment/singleComment';
import AddComment from '../addComment/AddComment'

function CommentArea({selectedBookId}) {
  return (
    <div>
      <AddComment />
      <SingleComment selectedBookId={selectedBookId} />
    </div>
  );
}

export default CommentArea;
