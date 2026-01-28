import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const NotificationSkeleton = ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="bg-[#313030] rounded-md p-4 mb-3">
            <Skeleton
              baseColor="#404040"
              highlightColor="#505050"
              width="70%"
              height={20}
              className="mb-2"
            />
            <Skeleton baseColor="#404040" highlightColor="#505050" count={2} height={14} />
            <div className="mt-3">
              <Skeleton baseColor="#404040" highlightColor="#505050" width="40%" height={16} />
            </div>
          </div>
        ))}
    </>
  );
};
