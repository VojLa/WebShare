import { useEffect, useState } from 'react';

export default function ChecklistSequentialAnimation() {
  const rows = [0, 1, 2, 3];
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    const timers = rows.map((_, index) =>
      window.setTimeout(() => setCheckedCount(index + 1), 600 + index * 650)
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <div className="flex justify-center py-6">
      <div className="w-[260px] rounded-[22px] border border-[rgba(150,190,240,0.22)] px-7 py-8">
        {rows.map((_, index) => {
          const checked = index < checkedCount;

          return (
            <div
              key={index}
              className={`flex items-center gap-4 ${index !== rows.length - 1 ? 'mb-[22px]' : ''}`}
            >
              <svg className="h-10 w-10 shrink-0" viewBox="0 0 40 40" aria-hidden="true">
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="8"
                  className="transition-colors duration-300 ease-out"
                  fill={checked ? 'rgba(120,170,255,0.13)' : 'rgba(130,180,255,0)'}
                />
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="8"
                  fill="none"
                  stroke="rgba(150,195,245,0.38)"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 21 L18 28 L29 13"
                  fill="none"
                  stroke="rgba(190,220,255,0.92)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-[stroke-dashoffset] duration-500 ease-out"
                  style={{
                    strokeDasharray: 32,
                    strokeDashoffset: checked ? 0 : 32,
                  }}
                />
              </svg>

              <div className="relative h-0.5 flex-1 overflow-hidden rounded-sm bg-white/10">
                <div
                  className="absolute inset-0 origin-left rounded-sm bg-[rgba(180,215,255,0.38)] transition-transform duration-500 ease-out delay-150"
                  style={{ transform: checked ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

