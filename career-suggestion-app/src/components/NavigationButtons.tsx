interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  currentQuestion: number;
  totalQuestions: number;
  hasAnswer: boolean;
}

export default function NavigationButtons({ onPrev, onNext, currentQuestion, totalQuestions, hasAnswer }: NavigationButtonsProps) {
  return (
    <div className="navigation flex justify-between items-center mt-6">
      <button
        id="prev-btn"
        onClick={onPrev}
        disabled={currentQuestion === 0}
        className="p-3 rounded-lg bg-neon-orange text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_15px_var(--neon-lime)]"
      >
        Previous
      </button>
      <button
        id="next-btn"
        onClick={onNext}
        disabled={!hasAnswer}
        className="p-3 rounded-lg bg-neon-orange text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_15px_var(--neon-lime)]"
      >
        {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}
