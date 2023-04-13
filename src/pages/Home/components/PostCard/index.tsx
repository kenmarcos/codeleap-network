import Button from "@/components/Button";
import Edit from "@/icons/Edit";
import Trash from "@/icons/Trash";
import { Post } from "@/redux/post/reducer";
import { parseISO, formatDistanceToNow } from "date-fns";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { title, username, created_datetime, content } = props.post;

  const formattedCreatedDatetime = formatDistanceToNow(
    parseISO(created_datetime)
  );

  return (
    <div className="border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px] flex justify-between">
        <h2 className="text-white">{title}</h2>

        <div className="flex space-x-5">
          <Button>
            <Trash />
          </Button>

          <Button>
            <Edit />
          </Button>
        </div>
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
