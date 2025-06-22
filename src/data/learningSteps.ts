import { LearningStep } from '../types';

export const learningSteps: LearningStep[] = [
  {
    id: 1,
    title: "ステップ1: 基本数値出力",
    description: "FizzBuzzの基本機能から始めましょう",
    learningGoal: "「失敗するテストから始める」理由の理解",
    tddPhase: "Red",
    testCode: `// まずテストを書きます（失敗することを確認）
test('fizzbuzz(1) should return "1"', () => {
  expect(fizzbuzz(1)).toBe("1");
});`,
    implementationCode: `// 最小限の実装でテストを通します
function fizzbuzz(n: number): string {
  return "1";
}`,
    traditionalCode: `// 従来の方法：いきなり完成形を目指す
function fizzbuzz(n: number): string {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}`,
    learningPoint: "なぜわざと失敗させるのか？",
    insight: "実装前にゴールを明確にする効果",
    completed: false
  },
  {
    id: 2,
    title: "ステップ2: 3の倍数でFizz",
    description: "3の倍数の場合の処理を追加します",
    learningGoal: "「最小限の実装」の価値理解",
    tddPhase: "Green",
    testCode: `test('fizzbuzz(3) should return "Fizz"', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('fizzbuzz(1) should return "1"', () => {
  expect(fizzbuzz(1)).toBe("1");
});`,
    implementationCode: `function fizzbuzz(n: number): string {
  if (n === 3) return "Fizz";
  return "1";
}`,
    traditionalCode: `// 従来の方法では既に完成済み
// でも本当に正しく動いているか？`,
    learningPoint: "なぜn % 3 === 0と書かないのか？",
    insight: "最小実装が設計の理解を深める",
    completed: false
  },
  {
    id: 3,
    title: "ステップ3: 5の倍数でBuzz",
    description: "5の倍数の場合の処理を追加します",
    learningGoal: "段階的拡張の安全性",
    tddPhase: "Green",
    testCode: `test('fizzbuzz(5) should return "Buzz"', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

// 既存のテストも確認
test('fizzbuzz(3) should return "Fizz"', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('fizzbuzz(1) should return "1"', () => {
  expect(fizzbuzz(1)).toBe("1");
});`,
    implementationCode: `function fizzbuzz(n: number): string {
  if (n === 5) return "Buzz";
  if (n === 3) return "Fizz";
  return "1";
}`,
    traditionalCode: `// 従来の方法では変更が怖い
// 既存機能が壊れていないか不安...`,
    learningPoint: "既存機能が壊れないことの確認",
    insight: "テストが安全網として機能",
    completed: false
  },
  {
    id: 4,
    title: "ステップ4: 15の倍数でFizzBuzz",
    description: "15の倍数の特別なケースを処理します",
    learningGoal: "エッジケースとリファクタリングの重要性",
    tddPhase: "Refactor",
    testCode: `test('fizzbuzz(15) should return "FizzBuzz"', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

// 他のテストケースも追加
test('fizzbuzz(6) should return "Fizz"', () => {
  expect(fizzbuzz(6)).toBe("Fizz");
});

test('fizzbuzz(10) should return "Buzz"', () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});`,
    implementationCode: `function fizzbuzz(n: number): string {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}`,
    traditionalCode: `// 従来の方法でも同じコードだが...
// 条件の順序が重要だと気づけるか？`,
    learningPoint: "TDDがあるから安心してリファクタリングできる",
    insight: "条件の順序が重要（15は3の倍数でもある）",
    completed: false
  },
  {
    id: 5,
    title: "ステップ5: 配列対応とエラーハンドリング",
    description: "配列処理と不正入力への対応を追加します",
    learningGoal: "TDDによる機能拡張の安全性",
    tddPhase: "Green",
    testCode: `test('fizzbuzz with array input', () => {
  expect(fizzbuzz([1, 3, 5, 15])).toEqual(["1", "Fizz", "Buzz", "FizzBuzz"]);
});

test('fizzbuzz with invalid input', () => {
  expect(() => fizzbuzz("invalid" as any)).toThrow("入力は数値である必要があります");
  expect(() => fizzbuzz(-1)).toThrow("正の数を入力してください");
  expect(() => fizzbuzz(0)).toThrow("1以上の数を入力してください");
});`,
    implementationCode: `function fizzbuzz(input: number | number[]): string | string[] {
  if (typeof input === 'string') {
    throw new Error("入力は数値である必要があります");
  }
  
  if (Array.isArray(input)) {
    return input.map(n => fizzbuzz(n) as string);
  }
  
  if (input <= 0) {
    throw new Error(input < 0 ? "正の数を入力してください" : "1以上の数を入力してください");
  }
  
  if (input % 15 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input.toString();
}`,
    traditionalCode: `// 従来の方法では...
function fizzbuzz(n: number): string {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";  
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}
// エラーハンドリングが後回しになりがち`,
    learningPoint: "テストがあるから新機能追加が怖くない",
    insight: "機能拡張の容易さ",
    completed: false
  }
];