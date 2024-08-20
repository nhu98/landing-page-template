'use client';

import { motion } from 'framer-motion';

import { cn } from 'src/lib/utils';

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
                                       className, words, delay
                                     }: LetterPullupProps) {
  const letters = words.split('');

  const pullupVariant = {
    initial: { y: 100, opacity: 0 }, animate: (i: any) => ({
      y: 0, opacity: 1, transition: {
        delay: i * (delay ? delay : 0.05) // By default, delay each letter's animation by 0.05 seconds
      }
    })
  };

  return (<div>
    {letters.map((letter, i) => (<motion.span
      key={i}
      variants={pullupVariant}
      initial="initial"
      animate="animate"
      custom={i}
      className={cn('font-display tracking-[-0.02em] text-white drop-shadow-sm dark:text-white', className)}
    >
      {letter === ' ' ? <span>&nbsp;</span> : letter}
    </motion.span>))}
  </div>);
}
