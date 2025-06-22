export interface LearningStep {
  id: number;
  title: string;
  description: string;
  learningGoal: string;
  tddPhase: 'Red' | 'Green' | 'Refactor';
  testCode: string;
  implementationCode: string;
  traditionalCode: string;
  learningPoint: string;
  insight: string;
  completed: boolean;
}

export interface TestResult {
  passed: boolean;
  message: string;
  output?: string;
  error?: string;
}

export interface AppState {
  currentStep: number;
  steps: LearningStep[];
  testResults: {
    tdd: TestResult | null;
    traditional: TestResult | null;
  };
  userInput: string;
  showComparison: boolean;
}

export interface FizzBuzzFunction {
  (input: number | number[]): string | string[];
}

export type PanelType = 'tdd' | 'traditional';