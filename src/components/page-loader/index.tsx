import * as ReactSpinners from 'react-spinners';
import { BackgroundOverlay } from '../background-overlay';

interface Props {
  visible?: boolean;
  title?: string;
}

export const PageLoader = ({ visible = true, title = 'Loading...' }: Props) => {
  return (
    <BackgroundOverlay visible={visible}>
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <ReactSpinners.BeatLoader color="#c5ee4f" size={15} />
        <h1 className="text-[20px] font-avenir font-extrabold text-greenColor tracking-[-0.28px] lg:text-[20px] pb-3">
          {title}
        </h1>
      </div>
    </BackgroundOverlay>
  );
};
