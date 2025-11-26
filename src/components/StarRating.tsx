import { starPaths } from '../data/svgPaths';

interface StarRatingProps {
  rating: number;
  size?: 'small' | 'large';
  className?: string;
}

export function StarRating({ rating, size = 'small', className = '' }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const getStarFill = (starNumber: number) => {
    if (starNumber <= fullStars) return '#F4D300';
    if (starNumber === fullStars + 1 && hasHalfStar) return '#F4D300';
    return '#FBF5CE';
  };

  if (size === 'large') {
    return (
      <div className={`h-[27px] w-[128px] ${className}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 27">
          <g>
            <path d={starPaths.large.star1} fill={getStarFill(1)} />
            <path d={starPaths.large.star2} fill={getStarFill(2)} />
            <path d={starPaths.large.star3} fill={getStarFill(3)} />
            <path d={starPaths.large.star4} fill={getStarFill(4)} />
            <path d={starPaths.large.star5} fill={getStarFill(5)} />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={`h-[13px] w-[65px] ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g>
          <path d={starPaths.small.star1} fill={getStarFill(1)} />
          <path d={starPaths.small.star2} fill={getStarFill(2)} />
          <path d={starPaths.small.star3} fill={getStarFill(3)} />
          <path d={starPaths.small.star4} fill={getStarFill(4)} />
          <path d={starPaths.small.star5} fill={getStarFill(5)} />
        </g>
      </svg>
    </div>
  );
}
