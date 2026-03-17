'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { Progress } from './components/progress';
import { useState } from 'react';
import { OnboardingLevel } from '@/interface/profile.interface';
import { BasicInfo } from './components/basic-info';

export function SetUpProfile() {
  const [level, setLevel] = useState<OnboardingLevel>('Basic Info');
  return (
    <main className="flex flex-col flex-1 bg-[#FAFAFA] lg:pt-[140px] lg:pb-[100px]">
      <PageMaxWidth>
        <div className="flex flex-col w-full max-w-[472px] self-center gap-[83px]">
          <Progress activeLevel={level} />

          {level === 'Basic Info' && <BasicInfo onContinue={() => setLevel('Skills')} />}
        </div>
      </PageMaxWidth>
    </main>
  );
}
