# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TDD (Test-Driven Development) Interactive Learning Simulator designed to help developers understand the essential value of TDD through hands-on experience. The project aims to solve the common misconception that TDD is just "tedious work" by providing experiential learning.

**Core Value Proposition**: Enable developers to understand "why write tests first" through practical experience rather than theoretical explanations.

## Project Architecture

### Learning Experience Design
The application follows a "体験駆動学習" (Experience-Driven Learning) approach with progressive disclosure:
1. Concept explanation → 2. Practical experience → 3. Difference realization → 4. Value understanding

### Main UI Structure
- **Dual Panel Design**: TDD development (left) vs Traditional development (right)
- **Step-by-step Progress**: 5-stage TDD cycle visualization
- **Interactive Testing**: Users can input values to test both approaches
- **Real-time Comparison**: Side-by-side quality difference demonstration

### Technical Stack
- **React + TypeScript**: Component-based architecture for step-by-step visualization
- **Jest**: TDD examples and testing framework
- **Tailwind CSS**: Rapid prototyping and responsive design
- **Netlify**: Deployment platform

## Learning Content: FizzBuzz Case Study

The main educational content uses FizzBuzz as the teaching example, structured in 5 learning steps:

1. **Step 1**: Basic number output - Understanding "why start with failing tests"
2. **Step 2**: Multiples of 3 → "Fizz" - Value of minimal implementation
3. **Step 3**: Multiples of 5 → "Buzz" - Safety of incremental expansion
4. **Step 4**: Multiples of 15 → "FizzBuzz" - Edge cases and refactoring importance
5. **Step 5**: Array support and error handling - Safe feature expansion with TDD

### Key Learning Moments
Each step is designed to create "aha moments" where learners realize:
- Tests help with design
- Minimal implementation has value
- Existing functionality safety
- Refactoring confidence
- Easy feature expansion

## Development Commands

**Note**: This project is in early planning phase. No package.json or build scripts exist yet. When implementing:
- Use React development server for hot reloading
- Implement Jest for testing examples
- Use npm/yarn for dependency management
- Set up linting with ESLint + Prettier for code quality

## Quality Comparison Features

The application demonstrates quality differences between TDD and traditional approaches:

### Input Validation Comparison
- **TDD version**: Proper error messages for invalid inputs (strings, negative numbers, zero)
- **Traditional version**: NaN errors, unexpected behavior, crashes

### Code Maintainability
- **TDD version**: Independent, testable functions
- **Traditional version**: Monolithic if-else blocks

### Bug Discovery Timing
- **TDD version**: Issues caught during implementation
- **Traditional version**: Issues discovered during user interaction

## Development Phases

1. **Phase 1**: Learning content design (3 days)
2. **Phase 2**: Basic functionality implementation (5 days)  
3. **Phase 3**: Comparison features implementation (5 days)
4. **Phase 4**: Learning experience enhancement (3 days)

## Success Metrics

- Completion rate: 85%+
- Step comprehension: 4.5/5 average
- "Want to practice TDD": 80%+
- Qualitative: Understanding TDD's essential value in the AI era

## Key Principles

- **Learning experience over technical complexity**: Hide technical details to focus on TDD concepts
- **Interactive discovery**: Let users experience differences rather than explaining them
- **Progressive disclosure**: Reveal information step-by-step to avoid cognitive overload
- **Concrete examples**: Use specific, relatable scenarios rather than abstract concepts