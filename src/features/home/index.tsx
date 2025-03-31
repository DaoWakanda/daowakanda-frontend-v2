'use client';

import React, { useState } from 'react';
import styles from './index.module.scss';
import HeroSection from '@/features/home/landing-page-components/hero-section';
import MainSection from '@/features/home/landing-page-components/main-Section';
import BlogSection from '@/features/home/landing-page-components/blog-section';
import CommunitySection from './landing-page-components/community-section';
import NotificationBot from './landing-page-components/notification-bot-section';

export function Home() {
  return (
    <div className={`${styles['container']}`}>
      <HeroSection />
      <MainSection />
      <BlogSection />
      <CommunitySection />
      <NotificationBot />
    </div>
  );
}
