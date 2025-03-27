import CommitModel from "../modles/commit.js";
import PostModel from "../modles/post.js";

const comments = async (req, res) => {
    try {
        const { PostId, UserId, comments } = req.body;
        const newComments = await CommitModel.create({
             PostId, UserId, comments
            });

        const findPost = await PostModel.findById(PostId);
        if (!findPost) 
            return res.status(400).json({ err: "true", msg: "Post" });

        findPost.comments.push(newComments._id);
        await findPost.save();
        res.status(200).json({ err: "false", msg: "Commented", newComments });

    } catch (error) {
      console.log(error);
        res.status(500).json({ err: "true", msg: "Internal Server Error" });
    }
}
export { comments }