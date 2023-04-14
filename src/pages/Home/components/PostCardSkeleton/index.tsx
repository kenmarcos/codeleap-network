const PostCardSkeleton = () => {
  return (
    <div className="animate-pulse border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px]">
        <div className="h-3 bg-slate-200 rounded col-span-4"></div>
      </header>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-96">
          <div className="h-3 bg-slate-200 rounded col-span-1"></div>

          <div className="h-3 bg-slate-200 rounded col-span-1"></div>
        </div>

        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-3 bg-slate-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
