import { TestResult } from '../types';

export function fizzbuzzTDD(input: number | number[]): string | string[] {
  if (typeof input === 'string') {
    throw new Error("入力は数値である必要があります");
  }
  
  if (Array.isArray(input)) {
    return input.map(n => fizzbuzzTDD(n) as string);
  }
  
  if (input <= 0) {
    throw new Error(input < 0 ? "正の数を入力してください" : "1以上の数を入力してください");
  }
  
  if (input % 15 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input.toString();
}

export function fizzbuzzTraditional(input: number | number[]): string | string[] {
  // 従来の実装（エラーハンドリングが不十分）
  if (Array.isArray(input)) {
    return input.map(n => {
      if (typeof n !== 'number' || isNaN(n)) return "NaN";
      if (n % 15 === 0) return "FizzBuzz";
      if (n % 3 === 0) return "Fizz";
      if (n % 5 === 0) return "Buzz";
      return n.toString();
    });
  }
  
  if (typeof input !== 'number' || isNaN(input)) {
    return "NaN";
  }
  
  if (input % 15 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input.toString();
}

export function runTest(input: string, implementation: 'tdd' | 'traditional'): TestResult {
  try {
    let parsedInput: number | number[];
    
    // 入力をパース
    if (input.startsWith('[') && input.endsWith(']')) {
      // 配列として解析
      parsedInput = JSON.parse(input);
    } else {
      // 単一の値として解析
      parsedInput = parseFloat(input);
      if (isNaN(parsedInput)) {
        parsedInput = input as any; // 文字列として渡す
      }
    }
    
    const result = implementation === 'tdd' 
      ? fizzbuzzTDD(parsedInput)
      : fizzbuzzTraditional(parsedInput);
    
    return {
      passed: true,
      message: "実行成功",
      output: Array.isArray(result) 
        ? `[${result.map(r => `"${r}"`).join(', ')}]`
        : `"${result}"`
    };
  } catch (error) {
    return {
      passed: false,
      message: implementation === 'tdd' ? "適切なエラーハンドリング" : "予期しないエラー",
      error: error instanceof Error ? error.message : String(error)
    };
  }
}