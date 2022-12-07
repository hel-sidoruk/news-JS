import { Controller, IAppView } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: Controller;
  private view: IAppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    let timer: ReturnType<typeof setTimeout>;
    const searchInput = document.getElementById('search') as HTMLInputElement;
    const burger = document.querySelector('.burger') as HTMLElement;
    const sources = document.querySelector('.sources') as HTMLElement;

    document.querySelector('.sources')?.addEventListener('click', (e) => {
      const element = e.target as HTMLElement;
      if (!element.classList.contains('source__item')) return;
      document.querySelector('.source__item--active')?.classList.remove('source__item--active');
      element.classList.add('source__item--active');
      this.controller.getNews(e, (data) => data && this.view.drawNews(data));
    });

    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.view.filterSources(searchInput.value.trim().toLowerCase());
      }, 500);
    });

    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      sources.classList.add('sources--active');
      burger.classList.add('burger--active');
    });

    document.body.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      sources.classList.remove('sources--active');
    });

    this.controller.getSources((data) => data && this.view.drawSources(data));
    this.controller.getInitialNews((data) => {
      if (data) {
        this.view.drawNews(data);
        document.querySelector('.source__item')?.classList.add('source__item--active');
      }
    });
  }
}

export default App;
