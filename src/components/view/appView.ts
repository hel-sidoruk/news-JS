import News, { View, NewsItem } from './news/news';
import Sources, { Source } from './sources/sources';

interface ApiResponse {
  articles?: NewsItem[];
  sources?: Source[];
}

export class AppView {
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
