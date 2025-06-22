import { Step } from '../types'

export const steps: Step[] = [
  {
    id: 1,
    title: "ステップ1: 基本数値出力",
    objective: "「失敗するテストから始める」理由の理解",
    description: "まずは基本的な数値出力から始めます。テストを先に書いて、なぜ失敗するテストから始めるのかを体験しましょう。",
    tddCode: {
      red: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
})`,
        implementation: `// まだ実装されていません
function fizzbuzz(n: number): string {
  // TODO: 実装する
}`,
        result: "❌ テスト失敗: fizzbuzz is not defined"
      },
      green: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  return '1'
}`,
        result: "✅ テスト成功: 1 passing"
      }
    },
    traditionalCode: {
      implementation: `// いきなり完成形を目指してみた
function fizzbuzz(n) {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'  
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}`,
      result: "コンパイルエラーなし（見た目は良い）",
      problems: [
        "テストがないため、実際に動くかわからない",
        "要件を満たしているか確認できない",
        "バグがあっても気づけない"
      ]
    },
    learningPoint: "なぜ失敗するテストから始めるのか？",
    insight: "テストは設計を助けるツールです。実装前にゴールを明確にすることで、何を作るべきかが見えてきます。"
  },
  {
    id: 2,
    title: "ステップ2: 3の倍数でFizz",
    objective: "「最小限の実装」の価値理解",
    description: "3の倍数の場合に'Fizz'を返す機能を追加します。なぜ最小限の実装が重要なのかを体験しましょう。",
    tddCode: {
      red: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  return '1'
}`,
        result: "❌ テスト失敗: Expected 'Fizz', received '1'"
      },
      green: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n === 3) return 'Fizz'
  return '1'
}`,
        result: "✅ テスト成功: 2 passing"
      }
    },
    traditionalCode: {
      implementation: `// 最初から汎用的に実装
function fizzbuzz(n) {
  if (n % 3 === 0) return 'Fizz'
  return n.toString()
}`,
      result: "fizzbuzz(1) → '1', fizzbuzz(3) → 'Fizz'",
      problems: [
        "過度な一般化で複雑になりがち",
        "要件を満たしているか検証していない",
        "6, 9, 12でも'Fizz'になるが、それは本当に正しい？"
      ]
    },
    learningPoint: "なぜ`n % 3 === 0`と書かないのか？",
    insight: "最小実装は過度な一般化を防ぎ、要件の理解を深めます。段階的に進めることで設計の品質が向上します。"
  },
  {
    id: 3,
    title: "ステップ3: 5の倍数でBuzz",
    objective: "段階的拡張の安全性",
    description: "5の倍数の場合に'Buzz'を返す機能を追加します。既存の機能を壊さずに安全に拡張する方法を学びましょう。",
    tddCode: {
      red: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
  
  test('5を渡すと"Buzz"を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n === 3) return 'Fizz'
  return '1'
}`,
        result: "❌ テスト失敗: Expected 'Buzz', received '1'"
      },
      green: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
  
  test('5を渡すと"Buzz"を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n === 3) return 'Fizz'
  if (n === 5) return 'Buzz'
  return n.toString()
}`,
        result: "✅ テスト成功: 3 passing"
      }
    },
    traditionalCode: {
      implementation: `// 5の条件を追加
function fizzbuzz(n) {
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}`,
      result: "fizzbuzz(1) → '1', fizzbuzz(3) → 'Fizz', fizzbuzz(5) → 'Buzz'",
      problems: [
        "既存機能が壊れていないか確認していない",
        "15の場合はどうなる？（実は'Fizz'になってしまう）",
        "手動テストに頼っているため見落としがある"
      ]
    },
    learningPoint: "既存機能が壊れないことの確認",
    insight: "テストがあることで、新機能追加時も既存機能の動作を保証できます。これが安全網としての価値です。"
  },
  {
    id: 4,
    title: "ステップ4: 15の倍数でFizzBuzz",
    objective: "エッジケースとリファクタリングの重要性",
    description: "15の倍数の場合に'FizzBuzz'を返す機能を追加します。エッジケースの重要性と、テストがあることでリファクタリングが安全にできることを体験しましょう。",
    tddCode: {
      red: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
  
  test('5を渡すと"Buzz"を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })
  
  test('15を渡すと"FizzBuzz"を返す', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n === 3) return 'Fizz'
  if (n === 5) return 'Buzz'
  return n.toString()
}`,
        result: "❌ テスト失敗: Expected 'FizzBuzz', received '15'"
      },
      green: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
  
  test('5を渡すと"Buzz"を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })
  
  test('15を渡すと"FizzBuzz"を返す', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n === 15) return 'FizzBuzz'
  if (n === 3) return 'Fizz'
  if (n === 5) return 'Buzz'
  return n.toString()
}`,
        result: "✅ テスト成功: 4 passing"
      },
      refactor: {
        test: `describe('fizzbuzz', () => {
  test('1を渡すと"1"を返す', () => {
    expect(fizzbuzz(1)).toBe('1')
  })
  
  test('3を渡すと"Fizz"を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
  
  test('5を渡すと"Buzz"を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })
  
  test('15を渡すと"FizzBuzz"を返す', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}`,
        result: "✅ テスト成功: 4 passing（リファクタリング完了）"
      }
    },
    traditionalCode: {
      implementation: `// 15の条件を追加してみる
function fizzbuzz(n) {
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  if (n % 15 === 0) return 'FizzBuzz'
  return n.toString()
}`,
      result: "fizzbuzz(15) → 'Fizz' (期待値: 'FizzBuzz')",
      problems: [
        "条件の順序が間違っている（15は3の倍数でもある）",
        "手動テストでは気づきにくいバグ",
        "修正してもテストがないため不安"
      ]
    },
    learningPoint: "TDDがあるから安心してリファクタリングできる",
    insight: "テストがあることで、既存の動作を保ちながら安全にコードを改良できます。これがTDDの最大の価値の一つです。"
  },
  {
    id: 5,
    title: "ステップ5: 配列対応とエラーハンドリング",
    objective: "TDDによる機能拡張の安全性",
    description: "配列の処理と不正な入力のエラーハンドリングを追加します。テストがあることで新機能の追加が安全にできることを体験しましょう。",
    tddCode: {
      red: {
        test: `describe('fizzbuzz', () => {
  // 既存のテスト...
  
  test('配列を渡すと各要素を処理した配列を返す', () => {
    expect(fizzbuzz([1, 3, 5])).toEqual(['1', 'Fizz', 'Buzz'])
  })
  
  test('文字列を渡すとエラーメッセージを返す', () => {
    expect(fizzbuzz('abc')).toBe('入力は数値である必要があります')
  })
})`,
        implementation: `function fizzbuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}`,
        result: "❌ テスト失敗: 配列とエラーハンドリングに対応していない"
      },
      green: {
        test: `describe('fizzbuzz', () => {
  // 既存のテスト...
  
  test('配列を渡すと各要素を処理した配列を返す', () => {
    expect(fizzbuzz([1, 3, 5])).toEqual(['1', 'Fizz', 'Buzz'])
  })
  
  test('文字列を渡すとエラーメッセージを返す', () => {
    expect(fizzbuzz('abc')).toBe('入力は数値である必要があります')
  })
})`,
        implementation: `function fizzbuzz(input: number | number[] | string): string | string[] {
  // 入力検証
  if (typeof input === 'string') {
    return '入力は数値である必要があります'
  }
  
  // 配列の場合
  if (Array.isArray(input)) {
    return input.map(n => processSingleNumber(n))
  }
  
  // 単一の数値の場合
  return processSingleNumber(input)
}

function processSingleNumber(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}`,
        result: "✅ テスト成功: 6 passing（全機能対応）"
      }
    },
    traditionalCode: {
      implementation: `// 配列対応を追加してみる
function fizzbuzz(input) {
  if (Array.isArray(input)) {
    return input.map(n => {
      if (n % 15 === 0) return 'FizzBuzz'
      if (n % 3 === 0) return 'Fizz'
      if (n % 5 === 0) return 'Buzz'
      return n.toString()
    })
  }
  
  if (input % 15 === 0) return 'FizzBuzz'
  if (input % 3 === 0) return 'Fizz'
  if (input % 5 === 0) return 'Buzz'
  return input.toString()
}`,
      result: "fizzbuzz('abc') → NaN, fizzbuzz(null) → エラー",
      problems: [
        "エラーハンドリングがない",
        "不正な入力でクラッシュやNaNが発生",
        "既存機能への影響を確認していない",
        "コードの重複が発生している"
      ]
    },
    learningPoint: "テストがあるから新機能追加が怖くない",
    insight: "TDDでは、テストが安全網となることで、大胆な機能追加やリファクタリングが可能になります。これによって、より良い設計へと進化させることができます。"
  }
]