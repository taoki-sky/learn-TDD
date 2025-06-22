import React from 'react'

interface NavigationProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrevious: () => void
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrevious 
}) => {
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`flex items-center space-x-2 px-6 py-3 rounded-apple font-medium transition-all duration-200 ${
          isFirstStep
            ? 'bg-apple-gray-5 text-apple-gray cursor-not-allowed'
            : 'btn-apple-secondary hover:shadow-apple-lg'
        }`}
      >
        <span>⬅️</span>
        <span>前へ</span>
      </button>

      <div className="flex items-center space-x-4">
        <span className="text-apple-caption">
          ステップ {currentStep + 1} / {totalSteps}
        </span>
        
        {isLastStep && (
          <div className="bg-apple-green text-white px-4 py-2 rounded-apple text-sm font-medium">
            🎉 完了!
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={isLastStep}
        className={`flex items-center space-x-2 px-6 py-3 rounded-apple font-medium transition-all duration-200 ${
          isLastStep
            ? 'bg-apple-gray-5 text-apple-gray cursor-not-allowed'
            : 'btn-apple-primary hover:shadow-apple-lg'
        }`}
      >
        <span>次へ</span>
        <span>➡️</span>
      </button>
    </div>
  )
}

export default Navigation