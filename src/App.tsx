import React, { useState } from 'react'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import DualPanel from './components/DualPanel'
import LearningPanel from './components/LearningPanel'
import Navigation from './components/Navigation'
import { Step } from './types'
import { steps } from './data/steps'

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currentPhase, setCurrentPhase] = useState<'red' | 'green' | 'refactor'>('red')

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setCurrentPhase('red')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setCurrentPhase('red')
    }
  }

  const handlePhaseChange = (phase: 'red' | 'green' | 'refactor') => {
    setCurrentPhase(phase)
  }

  const step = steps[currentStep]

  return (
    <div className="h-screen bg-apple-gray-6 font-apple flex flex-col">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col h-full">
        {/* ヘッダー部分 - 固定サイズ */}
        <div className="flex-shrink-0 py-6">
          <Header />
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
          />
        </div>

        {/* メインコンテンツ - スクロール可能 */}
        <div className="flex-1 overflow-y-auto pb-4">
          <DualPanel 
            step={step}
            currentPhase={currentPhase}
            onPhaseChange={handlePhaseChange}
          />

          <LearningPanel 
            step={step}
            currentPhase={currentPhase}
          />
        </div>

        {/* フッター - 固定サイズ */}
        <div className="flex-shrink-0 py-4 bg-apple-gray-6 border-t border-apple-gray-4">
          <Navigation 
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  )
}

export default App