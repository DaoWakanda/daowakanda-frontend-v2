'use client';
import { ChevronRight, Calendar, Clock, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

import { PageMaxWidth } from '@/components/page-max-width';
import { useEffect, useState } from 'react';
import AccessDeniedPage from '@/features/dev-challenges-details-page/access-denied';
import TaskWinners from '@/features/dev-challenges-details-page/task-winners';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { ITrivia, LeaderBoardItem } from '@/interface/challenge.interface';
import { useDeveloperActions } from '@/actions/developers/developer.action';
import { useWallet } from '@txnlab/use-wallet';
import { useNotify } from '@/hooks/useNotify';
import Skeleton from 'react-loading-skeleton';
import { createSanitizedMarkup } from '@/utils';
import toast from 'react-hot-toast';
import { ProfileAtom } from '@/state/profile.atom';
import { authAtom } from '@/state';

export const DevChallengesDetailPage = () => {
  const developerProfile = useRecoilValue(ProfileAtom);
  const authDeveloper = useRecoilValue(authAtom);

  const [trivia, setTrivia] = useState<ITrivia>();
  const [timeLeft, setTimeLeft] = useState<string>('00:00:00:00');

  const { fetchLeaderboard } = useDeveloperActions();
  const [leaderboardItems, setLeaderboardItems] = useState<LeaderBoardItem[]>();

  const { getTriviaById, submitTriviaAnswer } = useDeveloperActions();
  const { activeAddress } = useWallet();
  const { notify } = useNotify();
  const params = useParams();

  const [githubLink, setGithubLink] = useState('');
  const [loading, setLoading] = useState(false);


  const getLevelColor = (level: string) => {
    switch (level) {
      case 'novice':
        return 'bg-green-500';
      case 'amateur':
        return 'bg-yellow-500';
      case 'pro':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const fetchTrivia = async () => {
    if (!params?.id) return;

    const res = await getTriviaById(params?.id as string);

    if (res) {
      setTrivia(res);
    }
  };

  const makeSubmission = async () => {
    if (!activeAddress) {
      notify.error('Please connect your wallet to proceed');
      return;
    }

    if (!developerProfile) return;

    setLoading(true);
    toast.loading('Submitting your response...', { id: 'loader' });

    const res = await submitTriviaAnswer({
      triviaId: params?.title as string,
      githubRepoLink: githubLink,
      userId: developerProfile.id,
    });

    toast.dismiss('loader');
    setLoading(false);

    if (res) {
      notify.success('Your response has been submitted successfully');

      setGithubLink('');
    }
  };

  const getLeaderboard = async () => {
    const res = await fetchLeaderboard();

    if (res) {
      setLeaderboardItems(res);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  useEffect(() => {
    fetchTrivia();
  }, [params?.id]);

  useEffect(() => {
    const updateTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const difference = Number(trivia?.endTimeStamp) / 1000 - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (60 * 60 * 24));
        const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = Math.floor(difference % 60);

        const formattedTime = `${String(days).padStart(2, '0')} days ${String(hours).padStart(
          2,
          '0',
        )} hrs ${String(minutes).padStart(2, '0')}mins ${String(seconds).padStart(2, '0')}secs`;
        setTimeLeft(formattedTime);
      } else {
        setTimeLeft('00:00:00');
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [Number(trivia?.endTimeStamp)]);

  return (
    <PageMaxWidth>
      <div className="min-h-screen bg-black text-white pt-[100px] font-roboto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4 hover:text-white ">
            <Link href="/developers" className="  flex items-center gap-1 text-gray-500">
              Tasks
            </Link>
            <span>
              <ChevronRight />{' '}
            </span>
            <Link href="/">
              {trivia?.title || <Skeleton baseColor="#202020" highlightColor="#444" width={100} />}
            </Link>
          </div>
          {!authDeveloper && !developerProfile ? (
            <AccessDeniedPage isConnected={false} />
          ) : authDeveloper && !developerProfile ? (
            <AccessDeniedPage isConnected={true} />
          ) : (
            // <PageMaxWidth></PageMaxWidth>
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="p-6 md:p-10">
                <h1 className="text-3xl font-bold mb-4">{trivia?.title}</h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {' '}
                      {trivia ? (
                        new Date(trivia.createdAt).toDateString()
                      ) : (
                        <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>
                      {' '}
                      {!trivia ? (
                        <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
                      ) : trivia?.status === 'expired' ? (
                        'Ended'
                      ) : (
                        timeLeft
                      )}
                    </span>
                  </div>
                  <div
                    className={`${getLevelColor(
                      trivia?.difficulty || '',
                    )} text-black px-2 py-0.5 rounded text-xs`}
                  >
                    {trivia?.difficulty || (
                      <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
                    )}
                  </div>

                  <div className="md:ml-auto flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4 text-gray-400" />
                      <span>
                        Prize:{' '}
                        {trivia ? (
                          <strong> {trivia.prize} Algos</strong>
                        ) : (
                          <Skeleton baseColor="#202020" highlightColor="#444" width={100} />
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>
                        Max winners:{' '}
                        <strong>
                          {trivia ? (
                            <strong> {trivia?.maxWinners}</strong>
                          ) : (
                            <Skeleton baseColor="#202020" highlightColor="#444" width={100} />
                          )}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  {trivia?.description ? (
                    <div
                      dangerouslySetInnerHTML={createSanitizedMarkup(trivia?.description)}
                      className="text-gray-300"
                    ></div>
                  ) : (
                    <div className="text-gray-300">
                      <Skeleton
                        count={5}
                        baseColor="#202020"
                        highlightColor="#444"
                        width={'100%'}
                      />
                    </div>
                  )}

                </div>
                {trivia?.status !== 'expired' && (
                  <div className="mt-8">
                    <div className=" flex gap-2 items-center">
                      <input
                        type="url"
                        placeholder="Submit Github Repository link"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        required
                        className=" bg-gray-800 rounded-2xl md:rounded-[32px] py-3 px-4 text-white pr-24 w-[75%] md:w-[85%] outline-none"
                      />
                      <button
                        className=" bg-[#34C759] hover:bg-green-600 text-white text-sm flex-1 h-full rounded-2xl md:rounded-[32px] md:p-4 py-3"
                        disabled={!trivia || !githubLink || loading}
                        onClick={makeSubmission}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {developerProfile && authDeveloper && trivia?.status === 'expired' && (
          <div>
            <TaskWinners data={leaderboardItems} />
          </div>
        )}
      </div>
    </PageMaxWidth>
  );
};
