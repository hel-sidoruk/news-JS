export type HtmlEl = HTMLElement | null;
export type Options = {
  apiKey?: string;
  sources?: string;
};
export type cb = (data?: ApiResponse) => void;
export type GetRespOptions = {
  endpoint: string;
  options?: Options;
};
export interface Resp extends Response {
  status: number;
  ok: boolean;
  statusText: string;
}

export interface ILoader {
  getResp: (obj: GetRespOptions, callback: cb) => void;
  errorHandler: (res: Resp) => Resp;
  makeUrl: (options: Options, endpoint: string) => string;
  load: (method: string, endpoint: string, callback: cb, options: Options) => void;
}

export interface Controller {
  getSources: (cb: cb) => void;
  getNews: (e: Event, cb: cb) => void;
  getInitialNews: (cb: cb) => void;
}

export interface NewsItem {
  title: string;
  description: string;
  source: Source;
  publishedAt: string;
  author: string;
  url: string;
  urlToImage: string;
}

export interface View<T> {
  draw: (arr: T[]) => void;
}

export interface Source {
  id: string;
  name: string;
}

export interface ApiResponse {
  articles?: NewsItem[];
  sources?: Source[];
}

export interface IAppView {
  drawNews: cb;
  drawSources: cb;
  filterSources: (s: string) => void;
}
