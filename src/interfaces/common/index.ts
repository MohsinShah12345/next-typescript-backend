export interface voidFunction {
  (): void;
} //interface that return a void function
export interface returnVoid extends Promise<void> {}
export interface service {
  [index: string]: any;
}
export interface returnAny extends Promise<any> {}
