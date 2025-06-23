import React from 'react';
import { PanelType, TestResult } from '../types';

interface CodePanelProps {
  type: PanelType;
  title: string;
  subtitle: string;
  testCode?: string;
  implementationCode: string;
  testResult: TestResult | null;
  phase?: string;
}

export function CodePanel({
  type,
  title,
  subtitle,
  testCode,
  implementationCode,
  testResult,
  phase
}: CodePanelProps) {
  const isPrimary = type === 'tdd';
  
  return (
    <div className={`card ${isPrimary ? 'border-apple-blue' : 'border-apple-orange'} flex-1`}>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-bold ${isPrimary ? 'text-apple-blue' : 'text-apple-orange'}`}>
            {title}
          </h3>
          {phase && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              phase === 'Red' ? 'bg-red-100 text-red-800' :
              phase === 'Green' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {phase}
            </span>
          )}
        </div>
        <p className="text-apple-gray-600">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {testCode && (
          <div>
            <h4 className="font-semibold text-apple-gray-900 mb-2 flex items-center">
              📋 テストコード
            </h4>
            <pre className="code-block text-xs overflow-x-auto">
              <code>{testCode}</code>
            </pre>
          </div>
        )}

        <div>
          <h4 className="font-semibold text-apple-gray-900 mb-2 flex items-center">
            💻 実装コード
          </h4>
          <pre className="code-block text-xs overflow-x-auto">
            <code>{implementationCode}</code>
          </pre>
        </div>

        {testResult && (
          <div>
            <h4 className="font-semibold text-apple-gray-900 mb-2 flex items-center">
              {testResult.passed ? '✅' : '⚠️'} 実行結果
            </h4>
            <div className={`p-3 rounded-lg text-sm ${
              testResult.passed 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className={`font-medium ${
                testResult.passed ? 'text-green-800' : 'text-red-800'
              }`}>
                {testResult.message}
              </div>
              {testResult.output && (
                <div className="mt-2 font-mono text-xs text-apple-gray-700">
                  出力: {testResult.output}
                </div>
              )}
              {testResult.error && (
                <div className="mt-2 font-mono text-xs text-red-700">
                  エラー: {testResult.error}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}