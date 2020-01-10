export interface Params {
  [key: string]: any,
}

export interface Payload {
  [key: string]: any,
}

export interface Headers {
  [key: string]: string,
}

export interface Configs {
  baseURL?: string,
}

export interface JsonApi {
  data?: any,
  error?: JsonError,
  meta?: object,
  links?: object,
  included?: any,
}

interface JsonError {
  id?: number,
  links?: object,
  status: number,
  code: number,
  title: string,
  detail: string,
  source?: object,
  meta?: object,
}