import { ApiResponse, IAppView, NewsItem, Source } from '../../types/types';
import News, { View } from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
  private news: View<NewsItem>;
  private sources: View<Source>;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: ApiResponse) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data?: ApiResponse) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
