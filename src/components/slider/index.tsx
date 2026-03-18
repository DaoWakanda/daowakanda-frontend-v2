import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  minAmount?: number;
  maxAmount?: number;
  currentValue?: number;
  unitPrefix?: string;
  unitSuffix?: string;
  onChange?: (value: number) => void;
}

export function Slider({
  minAmount = 0,
  maxAmount = 100,
  currentValue = 0,
  unitPrefix,
  unitSuffix,
  onChange,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const getValueFromClientX = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return currentValue;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      return Math.round(minAmount + ratio * (maxAmount - minAmount));
    },
    [minAmount, maxAmount, currentValue],
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    onChange?.(getValueFromClientX(e.clientX));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    onChange?.(getValueFromClientX(e.touches[0].clientX));
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      onChange?.(getValueFromClientX(e.clientX));
    };

    const handleTouchMove = (e: TouchEvent) => {
      onChange?.(getValueFromClientX(e.touches[0].clientX));
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, getValueFromClientX, onChange]);

  const fillPercent = ((currentValue - minAmount) / (maxAmount - minAmount)) * 100;

  return (
    <div className="flex flex-col gap-2 pt-2">
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={classNames('bg-[#F4F4F3] rounded-[140px] h-[14px] flex cursor-pointer')}
      >
        {/** slider */}
        <div
          style={{ width: `calc(${fillPercent}% - 8px)` }}
          className={classNames(
            'bg-[#000] rounded-[140px] h-[14px] relative flex items-center justify-end',
          )}
        >
          {/** Slider thumb */}
          <div
            style={{ position: 'absolute', right: -8 }}
            className="w-[30px] h-[30px] bg-black rounded-full justify-center items-center flex"
          >
            <div className="w-[14px] h-[14px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-degular text-sm text-[#939393]">
          {unitPrefix}
          {minAmount}
          {unitSuffix}
        </p>

        <p className="font-degular text-sm text-[#939393]">
          {unitPrefix}
          {maxAmount}
          {unitSuffix}
        </p>
      </div>
    </div>
  );
}
