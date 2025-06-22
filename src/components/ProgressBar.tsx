import React from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-apple-body font-medium">
          進捗: {currentStep + 1}/{totalSteps} ステップ完了
        </span>
        <span className="text-apple-caption">
          {Math.round(progress)}%
        </span>
      </div>
      
      <div className="w-full bg-apple-gray-5 rounded-full h-3">
        <div 
          className="bg-apple-blue h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div 
            key={index}
            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-apple-blue text-white shadow-apple' 
                : 'bg-apple-gray-4 text-apple-gray'
            }`}
          >
            {index < currentStep ? '●' : index === currentStep ? '●' : '○'}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar