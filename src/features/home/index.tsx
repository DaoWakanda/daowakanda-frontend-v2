'use client';

import React, { useState } from 'react';
import styles from './index.module.scss';
import { BackgroundOverlay } from '@/components/background-overlay';
import { PageMaxWidth } from '@/components/page-max-width';

export function Home() {
  return (
    <div className={styles['container']}>
      <h1 className="text-white">Home</h1>
    </div>
  );
}



