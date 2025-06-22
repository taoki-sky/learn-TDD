import React from 'react';

interface InteractiveTestProps {
  userInput: string;
  onInputChange: (value: string) => void;
  onRunTests: () => void;
  onReset: () => void;
  hasResults: boolean;
}

const sampleInputs = [
  { label: '基本ケース', values: ['1', '3', '5', '15'] },
  { label: 'エッジケース', values: ['0', '-1', '"abc"', 'null'] },
  { label: '大きな数', values: ['100', '1000'] },
  { label: '配列', values: ['[1,3,5,15]', '[1,2,3,4,5]'] }
];

export function InteractiveTest({
  userInput,
  onInputChange,
  onRunTests,
  onReset,
  hasResults
}: InteractiveTestProps) {
  return (
    <div className="card bg-apple-gray-50">
      <h3 className="text-lg font-bold text-apple-gray-900 mb-4">
        🔍 インタラクティブテスト
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-apple-gray-700 mb-2">
            入力値を試してみよう
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-full px-3 py-2 border border-apple-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent"
            placeholder="例: 15 または [1,3,5,15]"
          />
        </div>

        <div className="flex space-x-2">
          <button
            onClick={onRunTests}
            className="btn-primary flex-1"
          >
            🚀 両方実行してみる
          </button>
          {hasResults && (
            <button
              onClick={onReset}
              className="btn-secondary"
            >
              リセット
            </button>
          )}
        </div>

        <div>
          <h4 className="text-sm font-medium text-apple-gray-700 mb-2">
            サンプル入力
          </h4>
          <div className="space-y-2">
            {sampleInputs.map((group, groupIndex) => (
              <div key={groupIndex}>
                <span className="text-xs text-apple-gray-600 font-medium">
                  {group.label}:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {group.values.map((value, valueIndex) => (
                    <button
                      key={valueIndex}
                      onClick={() => onInputChange(value)}
                      className="px-2 py-1 text-xs bg-white border border-apple-gray-300 rounded hover:bg-apple-gray-100 transition-colors duration-200"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}