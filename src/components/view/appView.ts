import { ApiResponse, IAppView, NewsItem, Source } from '../../types/types';
import News, { View } from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
  private news: View<NewsItem>;
  private sources: View<Source>;
  private sourcesData: Source[] | [];

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.sourcesData = [];
  }

  drawNews(data?: ApiResponse) {
    console.log(data);
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data?: ApiResponse) {
    const values = data?.sources ? data?.sources : [];
    this.sourcesData = values;
    this.sources.draw(values);
  }

  filterSources(query: string) {
    if (this.sourcesData.length) {
      const values = this.sourcesData.filter((el) => el.name.toLowerCase().includes(query));
      this.sources.draw(values);
    }
  }
}

export default AppView;
