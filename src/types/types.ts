export type Options = {
  apiKey?: string;
  sources?: string;
};
export type CallBack = (data?: ApiResponse) => void;
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
  getResp: (obj: GetRespOptions, callback: CallBack) => void;
  errorHandler: (res: Resp) => Resp;
  makeUrl: (options: Options, endpoint: string) => string;
  load: (method: string, endpoint: string, callback: CallBack, options: Options) => void;
}

export interface Controller {
  getSources: (cb: CallBack) => void;
  getNews: (e: Event, cb: CallBack) => void;
  getInitialNews: (cb: CallBack) => void;
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
  render?: () => void;
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
  drawNews: CallBack;
  drawSources: CallBack;
  filterSources: (s: string) => void;
}
