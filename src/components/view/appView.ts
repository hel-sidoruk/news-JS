import News, { View, NewsItem } from './news/news';
import Sources, { Source } from './sources/sources';

export interface ApiResponse {
  articles?: NewsItem[];
  sources?: Source[];
}

type DrawFunc = (data: ApiResponse) => void;

export interface IAppView {
  drawNews: DrawFunc;
  drawSources: DrawFunc;
}

export class AppView implements IAppView {
  private news: View<NewsItem>;
  private sources: View<Source>;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: ApiResponse) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ApiResponse) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
