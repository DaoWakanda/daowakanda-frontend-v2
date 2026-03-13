export function TalentCardSkeleton() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-5 flex flex-col gap-4 animate-pulse">
      {/* Top section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-[6px] bg-gray-200" />

          <div className="flex flex-col gap-2">
            <div className="w-[120px] h-[12px] bg-gray-200 rounded" />
            <div className="w-[80px] h-[10px] bg-gray-200 rounded" />
          </div>
        </div>

        <div className="w-[60px] h-[18px] bg-gray-200 rounded-[6px]" />
      </div>

      {/* Skills */}
      <div className="flex gap-2">
        <div className="w-[50px] h-[16px] bg-gray-200 rounded-[6px]" />
        <div className="w-[60px] h-[16px] bg-gray-200 rounded-[6px]" />
        <div className="w-[40px] h-[16px] bg-gray-200 rounded-[6px]" />
      </div>

      {/* Location */}
      <div className="w-[140px] h-[10px] bg-gray-200 rounded" />

      <div className="w-full h-[1px] bg-[#EAECF0]" />

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full bg-gray-200" />
          <div className="w-[20px] h-[10px] bg-gray-200 rounded" />
        </div>

        <div className="w-[80px] h-[10px] bg-gray-200 rounded" />
      </div>
    </div>
  );
}
