/**
 * Type utility to enforce a 100% exact, bidirectional match between translation files.
 * - If Target is missing a key present in Base -> TypeScript flags it as missing.
 * - If Target has an extra key not present in Base -> TypeScript flags it as invalid ('never').
 */
export type StrictlyMatched<Base, Target> = {
  [K in keyof Base]: K extends keyof Target
    ? Base[K] extends object
      ? Target[K] extends object
        ? StrictlyMatched<Base[K], Target[K]>
        : Base[K]
      : Base[K]
    : never;
} & {
  [K in keyof Target]: K extends keyof Base
    ? Target[K] extends object
      ? Base[K] extends object
        ? StrictlyMatched<Base[K], Target[K]>
        : Target[K]
      : Target[K]
    : never;
};

/**
 * Generates dot-notation string keys from a nested object schema.
 * e.g. { nav: { home: string } } -> "nav.home"
 */
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];
