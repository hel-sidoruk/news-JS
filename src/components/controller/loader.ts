import { ApiResponse } from '../view/appView';

type Options = {
  apiKey?: string;
  sources?: string;
};
export type cb = (data?: ApiResponse) => void;
type GetRespOptions = {
  endpoint: string;
  options?: Options;
};
type Response = { status: number; ok: boolean; statusText: string };

interface ILoader {
  getResp: (obj: GetRespOptions, callback: cb) => void;
  errorHandler: (res: Response) => Response;
  makeUrl: (options: Options, endpoint: string) => string;
  load: (method: string, endpoint: string, callback: cb, options: Options) => void;
}

class Loader implements ILoader {
  constructor(public baseLink: string, public options: Options) {}

  getResp(
    { endpoint, options = {} }: GetRespOptions,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: cb, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
