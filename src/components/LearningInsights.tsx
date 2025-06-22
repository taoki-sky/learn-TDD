import React from 'react';
import { LearningStep } from '../types';

interface LearningInsightsProps {
  step: LearningStep;
  showComparison: boolean;
}

export function LearningInsights({ step, showComparison }: LearningInsightsProps) {
  return (
    <div className="space-y-4">
      <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-bold text-apple-gray-900 mb-2">
              学習ポイント: {step.learningPoint}
            </h4>
            <p className="text-apple-gray-700 leading-relaxed">
              {step.insight}
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">📚</div>
          <div>
            <h4 className="font-bold text-apple-gray-900 mb-2">
              解説: {step.learningGoal}
            </h4>
            <p className="text-apple-gray-700 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {showComparison && (
        <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h4 className="font-bold text-apple-gray-900 mb-2">
                TDD vs 従来開発の違い
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-medium">TDD:</span>
                  <span>適切なエラーハンドリングと明確な出力</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-medium">従来:</span>
                  <span>予期しない動作やエラーが発生しやすい</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}