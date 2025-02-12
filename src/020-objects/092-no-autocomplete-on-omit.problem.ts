type OmitStrict<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
> = T extends T ? Omit<T, K> : never;

type User = {
  id: number;
  name: string;
  email: string;
};

// You CAN'T omit properties which don't exist!
// @ts-expect-error
type UserWithoutPhoneNumber = OmitStrict<User, "phoneNumber">;

// But you CAN'T pick properties which don't exist
// @ts-expect-error
type UserWithOnlyPhoneNumber = Pick<User, "phoneNumber">;

// More information:

// The original discussion to add Omit: https://github.com/microsoft/TypeScript/issues/30455
// The PR to add Omit: https://github.com/microsoft/TypeScript/pull/30552
// Final word on discussion: https://github.com/microsoft/TypeScript/issues/30825#issuecomment-523668235
