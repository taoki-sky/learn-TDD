import React from 'react'
import { Step } from '../types'
import CodeBlock from './CodeBlock'

interface TDDPanelProps {
  step: Step
  currentPhase: 'red' | 'green' | 'refactor'
  onPhaseChange: (phase: 'red' | 'green' | 'refactor') => void
}

const TDDPanel: React.FC<TDDPanelProps> = ({ step, currentPhase, onPhaseChange }) => {
  const getCurrentPhaseData = () => {
    switch (currentPhase) {
      case 'red':
        return step.tddCode.red
      case 'green':
        return step.tddCode.green
      case 'refactor':
        return step.tddCode.refactor || step.tddCode.green
      default:
        return step.tddCode.red
    }
  }

  const phaseData = getCurrentPhaseData()
  const showRefactor = step.tddCode.refactor !== undefined

  return (
    <div className="card-apple p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          📝 TDD開発
          <span className="ml-2 text-sm text-apple-gray">(あなたの体験)</span>
        </h2>
      </div>

      {/* フェーズ選択ボタン */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => onPhaseChange('red')}
          className={`px-4 py-2 rounded-apple text-sm font-medium transition-all duration-200 ${
            currentPhase === 'red'
              ? 'bg-apple-red text-white shadow-apple'
              : 'bg-apple-gray-6 text-apple-gray hover:bg-apple-gray-5'
          }`}
        >
          🔴 Red
        </button>
        <button
          onClick={() => onPhaseChange('green')}
          className={`px-4 py-2 rounded-apple text-sm font-medium transition-all duration-200 ${
            currentPhase === 'green'
              ? 'bg-apple-green text-white shadow-apple'
              : 'bg-apple-gray-6 text-apple-gray hover:bg-apple-gray-5'
          }`}
        >
          🟢 Green
        </button>
        {showRefactor && (
          <button
            onClick={() => onPhaseChange('refactor')}
            className={`px-4 py-2 rounded-apple text-sm font-medium transition-all duration-200 ${
              currentPhase === 'refactor'
                ? 'bg-apple-blue text-white shadow-apple'
                : 'bg-apple-gray-6 text-apple-gray hover:bg-apple-gray-5'
            }`}
          >
            🔄 Refactor
          </button>
        )}
      </div>

      {/* テストコード */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          📋 テストコード
        </h3>
        <CodeBlock
          code={phaseData.test}
          language="typescript"
          className="mb-4"
        />
      </div>

      {/* 実装コード */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          💻 実装コード
        </h3>
        <CodeBlock
          code={phaseData.implementation}
          language="typescript"
          className="mb-4"
        />
      </div>

      {/* 実行結果 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          ✅ 実行結果
        </h3>
        <div className={`p-4 rounded-apple border-l-4 ${
          phaseData.result.includes('❌') 
            ? 'bg-red-50 border-apple-red'
            : 'bg-green-50 border-apple-green'
        }`}>
          <pre className="text-sm font-mono whitespace-pre-wrap">
            {phaseData.result}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default TDDPanel