export interface Environment {
  production: boolean,
  api: string,
  auth?: string,
  envName: string,
}

export interface ApiEnvironment {
  url: string,
  key: string,
  contentType: string,
}
