// SkeletonCard.jsx

const SkeletonCard = () => {
  return (
    <div className="border rounded-xl p-5 animate-pulse">
      <div className="h-4 bg-gray-200 w-1/2 mb-3 rounded"></div>
      <div className="h-3 bg-gray-200 w-full mb-2 rounded"></div>
      <div className="h-3 bg-gray-200 w-3/4 mb-4 rounded"></div>

      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
      </div>

      <div className="h-3 bg-gray-200 w-1/3 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
