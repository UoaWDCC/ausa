declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * The Firebase service account JSON string.
       */
      FIREBASE_SERVICE_ACCOUNT_JSON: string
    }
  }
}
export {}
