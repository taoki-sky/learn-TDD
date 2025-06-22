import React from 'react'
import { Step } from '../types'
import CodeBlock from './CodeBlock'

interface TraditionalPanelProps {
  step: Step
}

const TraditionalPanel: React.FC<TraditionalPanelProps> = ({ step }) => {
  return (
    <div className="card-apple p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          ⚡ 従来開発
          <span className="ml-2 text-sm text-apple-gray">(比較用)</span>
        </h2>
      </div>

      {/* 実装コード */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          💻 実装コード
        </h3>
        <CodeBlock
          code={step.traditionalCode.implementation}
          language="javascript"
          className="mb-4"
        />
      </div>

      {/* 実行結果 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          🔍 実行結果
        </h3>
        <div className="p-4 rounded-apple bg-blue-50 border-l-4 border-apple-blue">
          <pre className="text-sm font-mono whitespace-pre-wrap">
            {step.traditionalCode.result}
          </pre>
        </div>
      </div>

      {/* 問題点 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          ⚠️ 問題点
        </h3>
        <div className="space-y-2">
          {step.traditionalCode.problems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-apple-orange text-sm mt-1">⚠️</span>
              <span className="text-sm text-gray-600">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TraditionalPanel