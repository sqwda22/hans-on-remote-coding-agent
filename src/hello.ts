/**
 * Greeting utility module
 * Provides simple greeting functions for user interactions
 */

/**
 * Generates a personalized greeting message
 * @param name - The name to greet
 * @returns A greeting string in the format "Hello, [name]!"
 * @example
 * ```ts
 * greet("World") // returns "Hello, World!"
 * greet("Claude") // returns "Hello, Claude!"
 * ```
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
