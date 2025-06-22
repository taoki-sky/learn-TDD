import React from 'react'
import { Step } from '../types'

interface LearningPanelProps {
  step: Step
  currentPhase: 'red' | 'green' | 'refactor'
}

const LearningPanel: React.FC<LearningPanelProps> = ({ step, currentPhase }) => {
  const getPhaseDescription = () => {
    switch (currentPhase) {
      case 'red':
        return 'まず失敗するテストを書きます。これによって、実装すべき機能を明確にします。'
      case 'green':
        return 'テストを通すための最小限の実装を行います。過度な一般化は避けます。'
      case 'refactor':
        return 'テストを通したまま、コードの品質を向上させます。安全にリファクタリングできます。'
      default:
        return ''
    }
  }

  return (
    <div className="card-apple p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 学習ポイント */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            💡 学習ポイント
          </h3>
          <div className="bg-yellow-50 p-4 rounded-apple border-l-4 border-yellow-400">
            <p className="text-gray-700 font-medium mb-2">{step.learningPoint}</p>
            <p className="text-sm text-gray-600">{getPhaseDescription()}</p>
          </div>
        </div>

        {/* 解説・気づき */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            📚 解説
          </h3>
          <div className="bg-blue-50 p-4 rounded-apple border-l-4 border-apple-blue">
            <p className="text-gray-700 text-sm leading-relaxed">
              {step.insight}
            </p>
          </div>
        </div>
      </div>

      {/* ステップの目標 */}
      <div className="mt-6 bg-green-50 p-4 rounded-apple border-l-4 border-apple-green">
        <h4 className="font-semibold text-gray-800 mb-2">🎯 このステップの目標</h4>
        <p className="text-gray-700 text-sm">{step.objective}</p>
      </div>
    </div>
  )
}

export default LearningPanel