import { Layers, Users, Activity, Percent } from 'lucide-react';
import StatCard from '@/features/validator/components/stat-card';
import ValidatorDetails from '@/features/validator/components/validator-details';
import StakingDetails from '@/features/validator/components/staking-details';
import DelegationForm from '@/features/validator/components/delegation-form';
import BecomeValidator from './components/become-validator';

export const Validator = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 font-avenir">
          <h1 className="text-4xl font-semibold  text-gray-900 mb-2">Daowakanda.algo</h1>
          <p className="text-gray-600">Enterprise-grade staking made easy</p>
        </div>

        <div className="font-degularDisplay font-normal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Staked"
            value={
              <span className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770637532/lINT7W_r7wpx0.png"
                  alt="algo"
                  className="w-5 h-5"
                />
                34.42M
              </span>
            }
            icon={Layers}
          />

          <StatCard title="Stakers" value="163/235" icon={Users} />
          <StatCard title="Uptime" value="97.2 %" icon={Activity} />
          <StatCard title="Commission" value="10%" icon={Percent} />
        </div>

        <div className="grid grid-cols-[1fr_1.5fr] gap-8 w-full h-full">
          <div className="flex flex-col gap-8 h-full">
            <ValidatorDetails />
            <DelegationForm />
            <BecomeValidator />
          </div>

          <div className="h-full">
            <StakingDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
