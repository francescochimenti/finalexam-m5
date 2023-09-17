import React from "react";

const CommentArea = () => {
    return (
        <div className="comment-area">
            <div className="comment-area__title">
                <h3>Comments</h3>
            </div>
            <div className="comment-area__form">
                <form>
                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea className="form-control" id="comment" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="comment-area__comments">
                <div className="comment-area__comments__comment">
                    <div className="comment-area__comments__comment__user">
                        <div className="comment-area__comments__comment__user__avatar">
                            <img src="https://via.placeholder.com/50" alt="avatar" />
                        </div>
                        <div className="comment-area__comments__comment__user__name">
                            <h5>Username</h5>
                        </div>
                    </div>
                    <div className="comment-area__comments__comment__content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
                <div className="comment-area__comments__comment">
                    <div className="comment-area__comments__comment__user">
                        <div className="comment-area__comments__comment__user__avatar">
                            <img src="https://via.placeholder.com/50" alt="avatar" />
                        </div>


                        <div className="comment-area__comments__comment__user__name">
                            <h5>Username</h5>
                        </div>
                    </div>
                    <div className="comment-area__comments__comment__content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
                <div className="comment-area__comments__comment">
                    <div className="comment-area__comments__comment__user">
                        <div className="comment-area__comments__comment__user__avatar">
                            <img src="https://via.placeholder.com/50" alt="avatar" />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
    );
}
    
export default CommentArea;