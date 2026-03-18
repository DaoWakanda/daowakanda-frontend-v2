'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { Progress } from './components/progress';
import { useState } from 'react';
import { OnboardingLevel } from '@/interface/profile.interface';
import { BasicInfo } from './components/basic-info';
import { YourSkills } from './components/your-skills';
import { YourPortfolio } from './components/your-portfolio';
import { WorkPreferences } from './components/work-preference';

export function SetUpProfile() {
  const [level, setLevel] = useState<OnboardingLevel>('Basic Info');

  return (
    <main className="flex flex-col flex-1 bg-[#FAFAFA] lg:pt-[140px] lg:pb-[100px]">
      <PageMaxWidth>
        <div className="flex flex-col w-full max-w-[472px] self-center gap-[83px]">
          <Progress activeLevel={level} />

          {level === 'Basic Info' && <BasicInfo onContinue={() => setLevel('Skills')} />}

          {level === 'Skills' && (
            <YourSkills
              onContinue={() => setLevel('Portfolio')}
              onReturn={() => setLevel('Basic Info')}
            />
          )}

          {level === 'Portfolio' && (
            <YourPortfolio
              onContinue={() => setLevel('Preference')}
              onReturn={() => setLevel('Skills')}
            />
          )}

          {level === 'Preference' && (
            <WorkPreferences onContinue={() => setLevel('Portfolio')} onReturn={() => null} />
          )}
        </div>
      </PageMaxWidth>
    </main>
  );
}
