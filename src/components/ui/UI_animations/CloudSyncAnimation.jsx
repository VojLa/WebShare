import { useEffect, useRef, useState } from 'react';

export default function CloudSyncAnimation() {
  const dotRef = useRef(null);
  const dotGlowRef = useRef(null);
  const rafRef = useRef(null);
  const [activeNode, setActiveNode] = useState('cloud');

  useEffect(() => {
    const dot = dotRef.current;
    const dotGlow = dotGlowRef.current;

    if (!dot || !dotGlow) return undefined;

    const cx = 250;
    const cy = 215;
    const radius = 140;
    const degToRad = Math.PI / 180;
    const nodes = ['cloud', 'phone', 'doc'];
    const angles = { cloud: 270, phone: 150, doc: 30 };
    const hold = 1500;
    const travel = 900;

    let phase = 0;
    let mode = 'hold';
    let startedAt = null;

    function getPosition(angle) {
      return {
        x: cx + radius * Math.cos(angle * degToRad),
        y: cy + radius * Math.sin(angle * degToRad),
      };
    }

    function moveDot(x, y) {
      dot.setAttribute('cx', String(x));
      dot.setAttribute('cy', String(y));
      dotGlow.setAttribute('cx', String(x));
      dotGlow.setAttribute('cy', String(y));
    }

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function clockwiseLerp(from, to, value) {
      let delta = to - from;
      if (delta < 0) delta += 360;
      return from + delta * value;
    }

    function frame(timestamp) {
      if (startedAt === null) startedAt = timestamp;

      const elapsed = timestamp - startedAt;
      const current = nodes[phase];
      const next = nodes[(phase + 1) % nodes.length];

      if (mode === 'hold') {
        const position = getPosition(angles[current]);
        moveDot(position.x, position.y);

        if (elapsed >= hold) {
          mode = 'travel';
          startedAt = timestamp;
        }
      } else {
        const progress = Math.min(elapsed / travel, 1);
        const angle = clockwiseLerp(angles[current], angles[next], ease(progress));
        const position = getPosition(angle);
        moveDot(position.x, position.y);

        if (progress >= 1) {
          phase = (phase + 1) % nodes.length;
          mode = 'hold';
          startedAt = timestamp;
          setActiveNode(nodes[phase]);
        }
      }

      rafRef.current = window.requestAnimationFrame(frame);
    }

    const startPosition = getPosition(angles.cloud);
    moveDot(startPosition.x, startPosition.y);
    setActiveNode('cloud');
    rafRef.current = window.requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isCloudActive = activeNode === 'cloud';
  const isPhoneActive = activeNode === 'phone';
  const isDocActive = activeNode === 'doc';

  return (
    <div className="flex justify-center py-6">
      <div className="rounded-[22px]">
        <svg className="w-full max-w-[500px]" viewBox="0 0 500 420" aria-hidden="true">
          <circle cx="250" cy="215" r="140" fill="none" stroke="rgba(142,198,255,0.3)" strokeWidth="1.5" />

          <circle cx="250" cy="75" r="4.5" fill="rgba(175,218,255,0.85)" />
          <circle cx="371" cy="285" r="4.5" fill="rgba(175,218,255,0.85)" />
          <circle cx="129" cy="285" r="4.5" fill="rgba(175,218,255,0.85)" />

          <g className={`transition-opacity duration-300 ${isCloudActive ? 'opacity-100' : 'opacity-50'}`} transform="translate(250,56)">
            <g transform="translate(0,-6) scale(1.35)">
              <path
                d="m 65.426434,163.26597
                  c -7.928697,-1.041 -8.925217,-8.76354 -7.9232,-12.78517
                    1.002017,-4.02163 5.914463,-9.33733 13.445431,-5.34216
                  -1.935069,-6.64515 3.680586,-15.51167 13.445353,-15.41785
                    9.764768,0.0938 15.723652,6.66683 15.606382,13.97727
                    4.9996,-6.20249 12.80518,-0.16007 9.904,4.80194
                    6.61936,-3.10796 10.56684,0.23678 11.40462,4.98201
                    0.83779,4.74523 -1.21165,8.30854 -9.96403,9.30376
                    -8.75238,0.99521 -37.989859,1.5212 -45.918556,0.4802 z"
                transform="translate(-89.4,-146.5)"
                fill="rgba(116,174,238,0.9)"
                stroke="rgba(170,216,255,0.5)"
                strokeWidth="1.2"
              />
            </g>
          </g>

          <g className={`transition-opacity duration-300 ${isPhoneActive ? 'opacity-100' : 'opacity-50'}`} transform="translate(82,348)">
            <rect x="-27" y="-54" width="54" height="106" rx="10" fill="rgba(116,174,238,0.9)" stroke="rgba(170,216,255,0.5)" strokeWidth="1.2" />
            <rect x="-9" y="-45" width="18" height="3.5" rx="1.7" fill="rgba(170,216,255,0.62)" />
          </g>

          <g className={`transition-opacity duration-300 ${isDocActive ? 'opacity-100' : 'opacity-50'}`} transform="translate(418,348)">
            <rect x="-33" y="-50" width="64" height="94" rx="5" fill="rgba(116,174,238,0.9)" stroke="rgba(170,216,255,0.5)" strokeWidth="1.2" />
            <polygon points="11,-50 31,-50 31,-29" fill="#060710" />
            <path d="M11,-50 L11,-29 L31,-29" fill="rgba(155,208,255,0.5)" stroke="rgba(170,216,255,0.45)" strokeWidth="0.8" />
            <line x1="-20" y1="-8" x2="8" y2="-8" stroke="rgba(198,228,255,0.92)" strokeWidth="1.7" />
            <line x1="-20" y1="3" x2="20" y2="3" stroke="rgba(198,228,255,0.92)" strokeWidth="1.7" />
            <line x1="-20" y1="14" x2="16" y2="14" stroke="rgba(198,228,255,0.92)" strokeWidth="1.7" />
            <line x1="-20" y1="25" x2="12" y2="25" stroke="rgba(198,228,255,0.92)" strokeWidth="1.7" />
          </g>

          <circle ref={dotGlowRef} r="11" fill="rgba(175,215,255,0.22)" />
          <circle ref={dotRef} r="5.5" fill="rgba(215,238,255,0.95)" />
        </svg>
      </div>
    </div>
  );
}

