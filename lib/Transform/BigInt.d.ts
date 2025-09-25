/**
 * Serialize a `bigint` to a string
 */
declare const _default: {
  type: string;
  shouldTransform(_type: any, obj: any): boolean;
  toSerializable(value: bigint): string;
  fromSerializable(data: string): bigint;
};
export default _default;
