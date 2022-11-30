import { Controller } from '../../types/types';
import AppController from '../controller/controller';
import { AppView, IAppView } from '../view/appView';

class App {
  private controller: Controller;
  private view: IAppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document.querySelector('.sources')?.addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => {
        if (data) this.view.drawNews(data);
      })
    );
    this.controller.getSources((data) => {
      if (data) this.view.drawSources(data);
    });
  }
}

export default App;
