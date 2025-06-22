import React from 'react';
import { Header } from './components/Header';
import { CodePanel } from './components/CodePanel';
import { InteractiveTest } from './components/InteractiveTest';
import { LearningInsights } from './components/LearningInsights';
import { StepNavigation } from './components/StepNavigation';
import { useLearningState } from './hooks/useLearningState';

function App() {
  const { state, actions } = useLearningState();
  const currentStep = state.steps[state.currentStep];
  const hasTestResults = state.testResults.tdd !== null || state.testResults.traditional !== null;

  return (
    <div className="min-h-screen bg-apple-gray-50">
      <Header 
        currentStep={state.currentStep} 
        totalSteps={state.steps.length}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Step Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-apple-gray-900 mb-2">
            {currentStep.title}
          </h2>
          <p className="text-apple-gray-600">
            {currentStep.description}
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <CodePanel
            type="tdd"
            title="📝 TDD開発"
            subtitle="あなたの体験"
            testCode={currentStep.testCode}
            implementationCode={currentStep.implementationCode}
            testResult={state.testResults.tdd}
            phase={currentStep.tddPhase}
          />
          
          <CodePanel
            type="traditional"
            title="⚡ 従来開発"
            subtitle="比較用"
            implementationCode={currentStep.traditionalCode}
            testResult={state.testResults.traditional}
          />
        </div>

        {/* Interactive Test Section */}
        <div className="mb-8">
          <InteractiveTest
            userInput={state.userInput}
            onInputChange={actions.setUserInput}
            onRunTests={actions.runTests}
            onReset={actions.resetTests}
            hasResults={hasTestResults}
          />
        </div>

        {/* Learning Insights */}
        <LearningInsights 
          step={currentStep}
          showComparison={state.showComparison}
        />
      </main>

      {/* Step Navigation */}
      <StepNavigation
        currentStep={state.currentStep}
        totalSteps={state.steps.length}
        onPrevStep={actions.prevStep}
        onNextStep={actions.nextStep}
        onCompleteStep={actions.completeStep}
        canGoNext={hasTestResults}
        isCompleted={currentStep.completed}
      />
    </div>
  );
}

export default App;