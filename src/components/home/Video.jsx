import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import videoSrc from '../../assets/file.mp4';

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export default function VideoSection() {
  const videoRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [indicator, setIndicator] = useState(null);

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

          {/* Rychlost přehrávání */}
          {unlocked && (
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/70 to-transparent flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <select
                value={speed}
                onChange={handleSpeed}
                className="bg-black/60 text-white text-xs rounded-lg px-2 py-1 border border-white/20 cursor-pointer"
              >
                {SPEEDS.map((s) => (
                  <option key={s} value={s}>{s}×</option>
                ))}
              </select>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
