import React from 'react';

const MagicButton = ({ children }: { children?: React.ReactNode }) => (
  <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-px focus:outline-none md:mt-8 md:w-60">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex size-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
      {children}
    </span>
  </button>
);

export default MagicButton;
