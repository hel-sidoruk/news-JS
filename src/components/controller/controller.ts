import { CallBack, Controller } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader implements Controller {
  getSources(callback: CallBack) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: CallBack) {
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

  getInitialNews(callback: CallBack) {
    fetch(`${this.baseLink}everything?apiKey=${this.options.apiKey}&sources=abc-news`)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default AppController;
