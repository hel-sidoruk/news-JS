import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '3429168172e54064b53d38cfce9b9c22', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
