export {};

export type Roles = "admin" | "moderator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}

//provides autocompletion and typescript error when working with roles throught our application
