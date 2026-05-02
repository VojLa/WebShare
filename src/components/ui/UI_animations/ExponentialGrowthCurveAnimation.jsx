export default function ExponentialGrowthCurveAnimation() {
  return (
    <>
      <style>{`
        @keyframes takeoverGrowthDraw {
          0%, 8% { stroke-dashoffset: 1; }
          70%, 100% { stroke-dashoffset: 0; }
        }

        .takeover-growth-line-main,
        .takeover-growth-line-soft {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: takeoverGrowthDraw 5.6s ease-in-out forwards;
        }

        @keyframes takeoverGrowthArrow {
          0%, 78% { opacity: 0; }
          92%, 100% { opacity: 1; }
        }

        .takeover-growth-arrow {
          opacity: 0;
          animation: takeoverGrowthArrow 5.6s ease-in-out forwards;
        }
      `}</style>

      <div className="flex justify-center py-6">
        <div className="w-full max-w-[480px] rounded-[22px]">
          <svg className="w-full" viewBox="0 0 480 500" aria-hidden="true">
            <line x1="60" y1="458" x2="60" y2="54" stroke="rgba(138,196,252,0.62)" strokeWidth="2" />
            <circle cx="60" cy="44" r="9" fill="none" stroke="rgba(138,196,252,0.75)" strokeWidth="2" />

            <line x1="60" y1="458" x2="432" y2="458" stroke="rgba(138,196,252,0.62)" strokeWidth="2" />
            <circle cx="441" cy="458" r="9" fill="none" stroke="rgba(138,196,252,0.75)" strokeWidth="2" />

            <path
              className="takeover-growth-line-main"
              pathLength="1"
              d="M 63,453 C 63,453 280,453 413,97"
              fill="none"
              stroke="rgba(126,192,252,0.9)"
              strokeWidth="6.5"
              strokeLinecap="round"
            />

            <path
              className="takeover-growth-line-soft"
              pathLength="1"
              d="M 63,453 C 63,453 280,453 413,97"
              fill="none"
              stroke="rgba(205,235,255,0.42)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <polygon
              className="takeover-growth-arrow"
              points="413,97 383,120 421,134"
              fill="rgba(126,192,252,0.9)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
