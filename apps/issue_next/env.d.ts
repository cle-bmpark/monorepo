declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_API_TOKEN: string;
    readonly NEXT_PUBLIC_API_VERSION: string;
    readonly NEXT_PUBLIC_ISSUE_BOARD: string;
  }
}
