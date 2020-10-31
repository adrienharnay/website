/// <reference types="next" />
/// <reference types="next/types/global" />

type UnwrapPromise<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T;
