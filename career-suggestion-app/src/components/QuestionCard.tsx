
interface Question {
  id: number;
  text: string;
  weights: { [key: string]: number };
}

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onSelect: (value: string) => void;
  selectedAnswer?: string;
}

export default function QuestionCard({ question, currentQuestion, totalQuestions, onSelect, selectedAnswer }: QuestionCardProps) {
  const options = ['STRONGLY_AGREE', 'AGREE', 'NEUTRAL', 'DISAGREE', 'STRONGLY_DISAGREE'];

  return (
    <div className="neon-card p-6 rounded-lg">
      <p id="question-text" className="text-lg mb-4">{question.text}</p>
      <p id="question-number" className="text-sm mb-4">Question {currentQuestion + 1} of {totalQuestions}</p>
      <div className="options flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            data-value={option}
            onClick={() => onSelect(option)}
            className={`option p-3 border-2 border-neon-orange rounded-lg bg-transparent text-white cursor-pointer transition-all duration-300 ${selectedAnswer === option ? 'bg-neon-green text-white' : ''} hover:bg-[rgba(255,95,0,0.1)] hover:shadow-[0_0_10px_var(--neon-white)]`}
          >
            {option.replace('_', ' ')}
          </button>
        ))}
      </div>
    </div>
  );
}

