import classNames from 'classnames';
import { DropZoneIcons } from './icon';

interface Props {
  title?: string;
  description?: string;
}

export function DropZone({
  title = 'Upload',
  description = 'Drag and drop documents to upload',
}: Props) {
  return (
    <div
      className={classNames(
        'flex flex-col items-center gap-2.5 p-[27px] border-2 border-[#E4E4E4] border-dashed',
        'bg-white rounded-xl',
      )}
    >
      <div>
        <DropZoneIcons.Upload />
      </div>
      <div className="flex flex-col items-center">
        <h4 className={classNames('font-degular font-medium text-[20px] text-[#939393]')}>
          {title}
        </h4>
        <p className={classNames('font-degular text-[14px] text-[#939393]')}>{description}</p>
      </div>
    </div>
  );
}
