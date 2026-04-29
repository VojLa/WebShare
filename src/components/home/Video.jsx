import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import videoSrc from '../../assets/file.mp4';
import useTranslation from '../../hooks/useTranslation';
import { scrollTo as smoothScrollTo } from '@/utils/scrollTo';



const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

const Stars = ({ rating = 5, size = 18 }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} viewBox="0 0 24 24" width={size} height={size}>
        <path
          fill={star <= rating ? '#FBBC05' : '#E0E0E0'}
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    ))}
  </div>
);

const GoogleG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-label="Google" className="shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function VideoSection() {
  const videoRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [indicator, setIndicator] = useState(null);
  const { t, language } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  

  const flash = (type) => {
    setIndicator(type);
    setTimeout(() => setIndicator(null), 550);
  };

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!unlocked) {
      video.muted = false;
      video.loop = false;
      video.currentTime = 0;
      video.play();
      setUnlocked(true);
      setPlaying(true);
      flash('play');
      return;
    }

    if (video.paused) {
      video.play();
      setPlaying(true);
      flash('play');
    } else {
      video.pause();
      setPlaying(false);
      flash('pause');
    }
  };

  const handleHashLink = (e, link) => {
    if (!link.hash) {
      setOpen(false);
      return;
    }

    e.preventDefault();

    const [targetPath, targetHash] = link.to.split('#');
  
    if (location.pathname === targetPath) {
      if (targetHash) smoothScrollTo(targetHash);
    } else {
      navigate(targetPath);

      setTimeout(() => {
        if (targetHash) smoothScrollTo(targetHash);
      }, 150);
    }
  
    setOpen(false);
  };

  const handleSpeed = (e) => {
    e.stopPropagation();
    const s = parseFloat(e.target.value);
    setSpeed(s);
    if (videoRef.current) videoRef.current.playbackRate = s;
  };

  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            Video
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 text-foreground leading-tight">
            Vše co o nás potřebujete vědět v&nbsp;1&nbsp;minutě
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10 cursor-pointer group"
          onClick={handleClick}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block"
          />

          {/* Overlay před odemknutím */}
          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-primary fill-primary ml-1" />
              </div>
            </div>
          )}

          {/* Overlay při pauze */}
          {unlocked && !playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                <Play className="h-8 w-8 text-primary fill-primary ml-1" />
              </div>
            </div>
          )}

          {/* Blikající indikátor po kliknutí */}
          <AnimatePresence>
            {indicator && (
              <motion.div
                key={indicator}
                initial={{ opacity: 0.85, scale: 0.8 }}
                animate={{ opacity: 0, scale: 1.5 }}
                exit={{}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                  {indicator === 'play'
                    ? <Play className="h-7 w-7 text-white fill-white ml-1" />
                    : <Pause className="h-7 w-7 text-white fill-white" />
                  }
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center text-center text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-3 mb-1.5 mt-8">
            <span className="text-2xl font-bold text-foreground">{t('references.excellent')}</span>
            <Stars rating={5} size={26} />
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <span>{t('references.rating_text')}</span>
            <GoogleG />
            <span className="font-semibold text-foreground">Google</span>
          </div>
          <Link
            to="/#poptavka"
            onClick={(e) => handleHashLink(e, { to: '/#poptavka', hash: true })}
            className="px-4 py-2 mt-4 text-lg font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t('nav.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
