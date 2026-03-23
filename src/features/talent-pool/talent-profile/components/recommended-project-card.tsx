import classNames from 'classnames';
import { TalentProfileIcons } from './icons';

export const RecommendedProjectCard = () => {
  return (
    <div className="rounded-2xl bg-white border-[#C6C5C5] border p-5 gap-3">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col">
          <h4 className="font-degularDisplay text-[24px] text-black leading-[32px]">
            Social Media Analytics
          </h4>
          <p className="text-base text-[#ABABAF] font-degularDisplay">Insightly</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            {['Wireframe', 'Data Visualization', 'React'].map((skill) => (
              <div
                className={classNames(
                  'p-1 rounded bg-[#F6F6F9] font-degularDisplay',
                  'text-sm text-[#ABABAF]',
                )}
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <div>
                <TalentProfileIcons.BadgeDollar />
              </div>
              <p className="text-[#ABABAF] font-degularDisplay text-[14px]">$5,500 - $9,000</p>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <TalentProfileIcons.Clock />
              </div>
              <p className="text-[#ABABAF] font-degularDisplay text-[14px]">4-6 weeks</p>
            </div>
          </div>
        </div>
      </div>

      <p className="font-degularDisplay text-base text-[#ABABAF]">
        Develop a tool that analyzes social media engagement and provides actionable insights.
      </p>
    </div>
  );
};
