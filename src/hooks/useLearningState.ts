import { useState, useCallback } from 'react';
import { AppState, TestResult } from '../types';
import { learningSteps } from '../data/learningSteps';
import { runTest } from '../utils/fizzbuzz';

export function useLearningState() {
  const [state, setState] = useState<AppState>({
    currentStep: 0,
    steps: learningSteps,
    testResults: {
      tdd: null,
      traditional: null
    },
    userInput: '1',
    showComparison: false
  });

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, prev.steps.length - 1),
      testResults: { tdd: null, traditional: null },
      userInput: '1'
    }));
  }, []);

  const prevStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
      testResults: { tdd: null, traditional: null },
      userInput: '1'
    }));
  }, []);

  const completeStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      steps: prev.steps.map(step => 
        step.id === prev.currentStep + 1 
          ? { ...step, completed: true }
          : step
      )
    }));
  }, []);

  const setUserInput = useCallback((input: string) => {
    setState(prev => ({
      ...prev,
      userInput: input
    }));
  }, []);

  const runTests = useCallback(() => {
    const tddResult = runTest(state.userInput, 'tdd');
    const traditionalResult = runTest(state.userInput, 'traditional');
    
    setState(prev => ({
      ...prev,
      testResults: {
        tdd: tddResult,
        traditional: traditionalResult
      },
      showComparison: true
    }));
  }, [state.userInput]);

  const resetTests = useCallback(() => {
    setState(prev => ({
      ...prev,
      testResults: { tdd: null, traditional: null },
      showComparison: false
    }));
  }, []);

  return {
    state,
    actions: {
      nextStep,
      prevStep,
      completeStep,
      setUserInput,
      runTests,
      resetTests
    }
  };
}