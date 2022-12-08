import { CallBack, RespOptions, ILoader, Options, Resp } from '../../types/types';

class Loader implements ILoader {
  constructor(public baseLink: string, public options: Options) {}

  getResp(
    { endpoint, options = {} }: RespOptions,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Readonly<Resp>): Readonly<Resp> {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Partial<Options>, endpoint: string): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    (Object.keys(urlOptions) as string[]).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof Options]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: CallBack, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
