type TimerCallback = (...args: any[]) => void;

export class Retimer {
  constructor(callback: TimerCallback, timeout: number, args?: any[]);

  reschedule(timeout?: number): void;
  clear(): void;
}

export default function retimer(
  callback: TimerCallback,
  timeout: number,
  ...args: any[]
): Retimer;


declare module 'retimer' {
    export = retimer;
  }