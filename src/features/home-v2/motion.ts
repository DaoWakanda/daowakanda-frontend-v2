/**
 * Shared Framer Motion config for HomeV2 animations.
 * Spring-like feel: bouncy but not excessive.
 */
export const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 14,
  mass: 0.8,
};

export const springStiff = {
  type: 'spring' as const,
  stiffness: 120,
  damping: 16,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -80px 0px',
};
