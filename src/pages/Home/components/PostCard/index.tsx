import Button from "@/components/Button";
import Edit from "@/icons/Edit";
import Trash from "@/icons/Trash";

const PostCard = () => {
  return (
    <div className="border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px] flex justify-between">
        <h2 className="text-white">CodeLeap Network</h2>

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
          <h3 className="font-bold">@Victor</h3>

          <h3 className="font-normal">
            <time>25 minutes ago</time>
          </h3>
        </div>

        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
