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
    <div className="min-h-screen bg-apple-gray-6 font-apple">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Header />
        
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={steps.length} 
        />

        <DualPanel 
          step={step}
          currentPhase={currentPhase}
          onPhaseChange={handlePhaseChange}
        />

        <LearningPanel 
          step={step}
          currentPhase={currentPhase}
        />

        <Navigation 
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  )
}

export default App