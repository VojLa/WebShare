export default function PhoneSignalWavesAnimation() {
  return (
    <>
      <style>{`
        @keyframes takeoverPhoneWave1 {
          0% { stroke-dashoffset: 204; opacity: 0; }
          8% { opacity: .72; }
          48% { stroke-dashoffset: 0; opacity: .65; }
          78% { opacity: 0; }
          100% { stroke-dashoffset: 204; opacity: 0; }
        }

        @keyframes takeoverPhoneWave2 {
          0% { stroke-dashoffset: 361; opacity: 0; }
          8% { opacity: .58; }
          48% { stroke-dashoffset: 0; opacity: .52; }
          78% { opacity: 0; }
          100% { stroke-dashoffset: 361; opacity: 0; }
        }

        @keyframes takeoverPhoneWave3 {
          0% { stroke-dashoffset: 503; opacity: 0; }
          8% { opacity: .45; }
          48% { stroke-dashoffset: 0; opacity: .38; }
          78% { opacity: 0; }
          100% { stroke-dashoffset: 503; opacity: 0; }
        }

        .takeover-phone-wave-1 {
          animation: takeoverPhoneWave1 2.8s ease-out infinite;
        }

        .takeover-phone-wave-2 {
          animation: takeoverPhoneWave2 2.8s ease-out infinite;
          animation-delay: .78s;
        }

        .takeover-phone-wave-3 {
          animation: takeoverPhoneWave3 2.8s ease-out infinite;
          animation-delay: 1.56s;
        }

        @keyframes takeoverPhoneDotPulse {
          0%, 100% { opacity: 1; r: 3.5; }
          50% { opacity: .7; r: 2.8; }
        }

        .takeover-phone-dot {
          animation: takeoverPhoneDotPulse 1.6s ease-in-out infinite;
        }

        @keyframes takeoverPhoneGlow1 {
          0%, 100% { opacity: .18; }
          50% { opacity: .08; }
        }

        .takeover-phone-glow-1 {
          animation: takeoverPhoneGlow1 1.6s ease-in-out infinite;
        }

        @keyframes takeoverPhoneGlow2 {
          0%, 100% { opacity: .07; }
          50% { opacity: .03; }
        }

        .takeover-phone-glow-2 {
          animation: takeoverPhoneGlow2 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="flex justify-center py-6">
        <div className="w-full max-w-[500px] overflow-hidden rounded-3xl">
          <svg className="w-full" viewBox="0 0 500 310" aria-hidden="true">
            <g transform="rotate(-9, 195, 155)">
              <rect x="152" y="82" width="87" height="146" rx="14" fill="#07091c" />
              <rect x="152" y="82" width="87" height="146" rx="17" fill="none" stroke="rgba(148,202,255,0.68)" strokeWidth="1.7" />
              <rect x="182" y="92" width="30" height="4.5" rx="2.2" fill="none" stroke="rgba(148,202,255,0.42)" strokeWidth="1.2" />
              <rect x="239.8" y="116" width="4" height="24" rx="2" fill="rgba(148,202,255,0.28)" />
              <rect x="149.2" y="126" width="3.2" height="18" rx="1.6" fill="rgba(148,202,255,0.24)" />
              <rect x="149.2" y="149" width="3.2" height="18" rx="1.6" fill="rgba(148,202,255,0.24)" />
              <ellipse cx="195" cy="157" rx="30" ry="42" fill="rgba(70,130,210,0.065)" />
              <ellipse cx="210" cy="145" rx="12" ry="18" fill="rgba(160,210,255,0.04)" />
            </g>

            <circle className="takeover-phone-glow-2" cx="243" cy="143" r="16" fill="rgba(120,185,255,0.07)" />
            <circle className="takeover-phone-glow-1" cx="243" cy="143" r="9" fill="rgba(155,210,255,0.18)" />
            <circle className="takeover-phone-dot" cx="243" cy="143" r="3.5" fill="rgb(228,244,255)" />

            <path
              className="takeover-phone-wave-1"
              d="M243,78 A65,65 0 0 1 243,208"
              fill="none"
              stroke="rgba(188,224,255,0.72)"
              strokeWidth="1.45"
              strokeDasharray="204"
              strokeDashoffset="204"
            />

            <path
              className="takeover-phone-wave-2"
              d="M243,28 A115,115 0 0 1 243,258"
              fill="none"
              stroke="rgba(178,216,255,0.58)"
              strokeWidth="1.1"
              strokeDasharray="361"
              strokeDashoffset="361"
            />

            <path
              className="takeover-phone-wave-3"
              d="M243,-17 A160,160 0 0 1 243,303"
              fill="none"
              stroke="rgba(168,208,255,0.45)"
              strokeWidth="0.85"
              strokeDasharray="503"
              strokeDashoffset="503"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
