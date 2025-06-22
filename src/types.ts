export interface Step {
  id: number
  title: string
  objective: string
  description: string
  tddCode: {
    red: {
      test: string
      implementation: string
      result: string
    }
    green: {
      test: string
      implementation: string
      result: string
    }
    refactor?: {
      test: string
      implementation: string
      result: string
    }
  }
  traditionalCode: {
    implementation: string
    result: string
    problems: string[]
  }
  learningPoint: string
  insight: string
}

export interface TestResult {
  input: string | number | (string | number)[]
  expected: string
  actual: string
  passed: boolean
}