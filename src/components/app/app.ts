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
    document.querySelector('.sources')?.addEventListener('click', (e) => {
      const element = e.target as HTMLElement;
      console.log(element.classList);
      if (!element.classList.contains('source__item')) return;
      document.querySelector('.source__item--active')?.classList.remove('source__item--active');
      element.classList.add('source__item--active');
      this.controller.getNews(e, (data) => {
        if (data) this.view.drawNews(data);
      });
    });
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.view.filterSources(searchInput.value.trim().toLowerCase());
      }, 500);
    });
    this.controller.getSources((data) => {
      if (data) this.view.drawSources(data);
    });
  }
}

export default App;
