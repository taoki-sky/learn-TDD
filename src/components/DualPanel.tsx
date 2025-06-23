import React from 'react'
import { Step } from '../types'
import TDDPanel from './TDDPanel'
import TraditionalPanel from './TraditionalPanel'

interface DualPanelProps {
  step: Step
  currentPhase: 'red' | 'green' | 'refactor'
  onPhaseChange: (phase: 'red' | 'green' | 'refactor') => void
}

const DualPanel: React.FC<DualPanelProps> = ({ step, currentPhase, onPhaseChange }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <TDDPanel 
        step={step}
        currentPhase={currentPhase}
        onPhaseChange={onPhaseChange}
      />
      
      <TraditionalPanel 
        step={step}
      />
    </div>
  )
}

export default DualPanel