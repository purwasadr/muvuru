import ProgressRing from '@/components/ui/ProgressRing';
import { cn } from '@/utils';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  score: number;
  radius?: number;
  fontSize?: 'sm' | 'base' | 'lg' | 'xl';
  stroke?: number;
}

const ScoreShow = ({
  className,
  score,
  radius = 19,
  fontSize = 'sm',
  stroke = 2,
}: Props) => {
  let strokeColor;
  const roundedScore = Math.round(score);
  if (roundedScore >= 0 && roundedScore <= 3) {
    strokeColor = 'stroke-red-500';
  } else if (roundedScore >= 4 && roundedScore <= 7) {
    strokeColor = 'stroke-yellow-500';
  } else {
    strokeColor = 'stroke-green-500';
  }

  return (
    <div
      className={twMerge(
        'relative w-fit rounded-full bg-slate-800 p-[1px]',
        className
      )}
    >
      <ProgressRing
        className={twMerge(strokeColor, '-rotate-90')}
        strokeComp={stroke}
        radiusComp={radius}
        progress={score * 10}
      />
      <p
        className={cn(
          `absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`,
          [
            fontSize === 'sm' && 'text-sm',
            fontSize === 'base' && 'text-base',
            fontSize === 'lg' && 'text-lg',
            fontSize === 'xl' && 'text-xl',
          ]
        )}
      >
        {score?.toPrecision(2)}
      </p>
    </div>
  );
};

export default ScoreShow;
