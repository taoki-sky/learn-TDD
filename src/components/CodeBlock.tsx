import React from 'react'

interface CodeBlockProps {
  code: string
  language: 'typescript' | 'javascript'
  className?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className = '' }) => {
  const getLanguageLabel = () => {
    switch (language) {
      case 'typescript':
        return 'TypeScript'
      case 'javascript':
        return 'JavaScript'
      default:
        return 'Code'
    }
  }

  const getLanguageColor = () => {
    switch (language) {
      case 'typescript':
        return 'bg-blue-100 text-blue-800'
      case 'javascript':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`px-2 py-1 rounded text-xs font-medium ${getLanguageColor()}`}>
          {getLanguageLabel()}
        </span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-apple-gray hover:text-apple-blue transition-colors duration-200"
          title="コードをコピー"
        >
          📋 コピー
        </button>
      </div>
      
      <div className="bg-gray-900 rounded-apple p-4 overflow-x-auto">
        <pre className="text-sm">
          <code className="text-gray-100 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock