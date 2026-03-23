import { PageMaxWidth } from '@/components/page-max-width';
import { OverviewCard } from './components/overview-card';
import { TalentProfileIcons } from './components/icons';
import Link from 'next/link';
import { RecommendedProjectCard } from './components/recommended-project-card';
import { MyApplications } from './components/my-applications';
import { Reputation } from './components/reputation';

export function TalentProfile() {
  return (
    <main className="flex flex-col flex-1 bg-[#FAFAFA] lg:pt-[140px] lg:pb-[100px] ">
      <PageMaxWidth>
        <main className="flex flex-col gap-4 lg:gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-degularDisplay font-bold text-[#00484F] text-[32px] leading-[40px]">
              Welcome back, Amara 👋
            </h1>
            <p className="font-degularDisplay text-[20px] leading-[24px]">
              Here's what's happening with your projects.
            </p>
          </div>

          <div className="flex gap-5">
            <OverviewCard
              title="Active Projects"
              value="03"
              icon={<TalentProfileIcons.Briefcase />}
            />
            <OverviewCard
              title="Total Earned"
              value="$12,450"
              icon={<TalentProfileIcons.DollarSign />}
            />
            <OverviewCard title="Ratings" value="4.8" icon={<TalentProfileIcons.Star />} />
          </div>

          <div className="flex gap-9">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-degularDisplay font-medium text-[#231E15] text-[20px]">
                  Recommended Projects
                </h4>

                <Link
                  href="/talent-pool?tab=projects"
                  className="font-degularDisplay text-[20px] text-[#ABABAF]"
                >
                  View all
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <RecommendedProjectCard key={index} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-[380px] pt-[35px]">
              <MyApplications />
              <Reputation />
            </div>
          </div>
        </main>
      </PageMaxWidth>
    </main>
  );
}
