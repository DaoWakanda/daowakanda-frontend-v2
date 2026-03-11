'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { TabToggler } from '@/components/tab-toggler';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pool } from './pool';
import { Projects } from './projects';

export function TalentPoolLayout() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'talent-pool';
  const router = useRouter();

  const onChangeTab = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', value);

    router.push(url.toString());
  };

  return (
    <main className="flex flex-col flex-1 bg-[#FAFAFA] lg:pt-[140px] lg:pb-[100px] ">
      <PageMaxWidth>
        <main className="flex flex-col gap-6 lg:gap-12">
          <div className="flex justify-center items-center">
            <TabToggler
              options={[
                { label: 'Talent Pool', value: 'talent-pool' },
                { label: 'Projects', value: 'projects' },
              ]}
              onSelect={(option) => onChangeTab(option)}
              selectedOption={currentTab}
            />
          </div>

          {currentTab === 'talent-pool' && <Pool />}

          {currentTab === 'projects' && <Projects />}
        </main>
      </PageMaxWidth>
    </main>
  );
}
