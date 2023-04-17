interface Props extends React.ComponentProps<'svg'> {
  radiusComp: number;
  strokeComp: number;
  progress: number;
  strokeColor?: string;
}

const ProgressRing = ({
  radiusComp,
  strokeComp,
  progress,
  strokeColor,
  ...props
}: Props) => {
  const normalizedRadius = radiusComp - strokeComp * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radiusComp * 2} width={radiusComp * 2} {...props}>
      <circle
        stroke='#6b7280'
        fill='transparent'
        strokeLinecap='round'
        strokeWidth={strokeComp}
        strokeDasharray={circumference + ' ' + circumference}
        // style={{ strokeDashoffset }}
        // stroke-width={strokeComp}
        r={normalizedRadius}
        cx={radiusComp}
        cy={radiusComp}
      />

      <circle
        // stroke={strokeColor}
        fill='transparent'
        strokeLinecap='round'
        strokeWidth={strokeComp}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        // stroke-width={strokeComp}
        r={normalizedRadius}
        cx={radiusComp}
        cy={radiusComp}
      />
    </svg>
  );
};

export default ProgressRing;
