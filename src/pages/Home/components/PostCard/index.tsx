import { Post } from "@/redux/post/reducer";
import DeleteAlert from "./components/DeleteAlert";
import EditPostFormModal from "./components/EditPostFormModal";
import { usePostCard } from "./usePostCard";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { id, title, content, username, created_datetime } = props.post;

  const { user, open, setOpen, formattedCreatedDatetime } =
    usePostCard(created_datetime);

  return (
    <div className="border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px] flex justify-between">
        <h2 className="text-white">{title}</h2>
        {user.username === username && (
          <div className="flex space-x-5">
            <DeleteAlert postId={id} setOpen={setOpen} />

            <EditPostFormModal
              open={open}
              setOpen={setOpen}
              title={title}
              content={content}
              postId={id}
            />
          </div>
        )}
      </header>

      <div className="p-6 space-y-4">
        <div className="text-custom-gray-600 flex justify-between">
          <h3 className="font-bold">@{username}</h3>

          <h3 className="font-normal">
            <time>{formattedCreatedDatetime}</time>
          </h3>
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
