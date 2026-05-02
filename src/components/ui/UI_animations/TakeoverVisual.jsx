import { motion, AnimatePresence } from 'framer-motion';
import CloudSyncAnimation from './CloudSyncAnimation';
import ChecklistSequentialAnimation from './ChecklistSequentialAnimation';
import PhoneSignalWavesAnimation from './PhoneSignalWavesAnimation';
import ExponentialGrowthCurveAnimation from './ExponentialGrowthCurveAnimation';

export default function TakeoverVisual({ activeStep }) {
  const visuals = [
    PhoneSignalWavesAnimation,
    ChecklistSequentialAnimation,
    CloudSyncAnimation,
    ExponentialGrowthCurveAnimation,
  ];

  const Visual = visuals[activeStep % visuals.length];

  return (
    <div className="w-full max-w-lg min-h-[330px] sm:min-h-[420px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <Visual />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
