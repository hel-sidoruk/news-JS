import { cb, Controller } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader implements Controller {
  getSources(callback: cb) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: cb) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }

  getInitialNews(callback: cb) {
    fetch('https://newsapi.org/v2/everything?apiKey=3429168172e54064b53d38cfce9b9c22&sources=abc-news')
      .then((res) => res.json())
      .then((data) => callback(data));
  }
}

export default AppController;
