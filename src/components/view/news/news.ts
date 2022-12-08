import { HtmlEl, NewsItem, View } from '../../../types/types';
import Pagination from '../../utils/pagination';
import './news.css';

class News implements View<NewsItem> {
  constructor(
    private newsData: NewsItem[] = [],
    private page: number = 1,
    private limit = 10,
    private newsContainer: HtmlEl = document.querySelector('.news')
  ) {}
  draw(data: NewsItem[]): void {
    this.newsData = data;
    if (this.newsData.length) {
      const pagination = new Pagination(this.newsData.length, this.limit);
      const handleClick = (e: Event) => {
        const element = e.target as HTMLElement;
        if (!element.classList.contains('pagination__btn')) return;
        const page = Number(element.textContent);
        this.page = page;
        element.parentElement?.replaceWith(pagination.pagesElement(page, handleClick));
        this.render();
      };

      const paginationEl = pagination.pagesElement(1, handleClick);
      this.render();
      if (this.newsContainer?.querySelector('.pagination')) {
        this.newsContainer?.querySelector('.pagination')?.remove();
      }
      this.newsContainer?.append(paginationEl);
    }
  }
  render() {
    console.log(this);
    const coef = this.limit * (this.page - 1);
    const news: NewsItem[] =
      this.newsData.length >= this.limit
        ? this.newsData.filter((_item, idx) => idx >= 0 + coef && idx < 10 + coef)
        : this.newsData;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    news.forEach((item: NewsItem, idx) => {
      const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

      const newsItem: HtmlEl = newsClone.querySelector('.news__item');
      const newsPhoto: HtmlEl = newsClone.querySelector('.news__meta-photo');
      const newsAuthor: HtmlEl = newsClone.querySelector('.news__meta-author');
      const newsDate: HtmlEl = newsClone.querySelector('.news__meta-date');
      const newsTitle: HtmlEl = newsClone.querySelector('.news__description-title');
      const newsSource: HtmlEl = newsClone.querySelector('.news__description-source');
      const newsContent: HtmlEl = newsClone.querySelector('.news__description-content');
      const newsMoreLink: HtmlEl = newsClone.querySelector('.news__read-more a');

      if (idx % 2 && newsItem) newsItem.classList.add('alt');
      if (newsPhoto) newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;
      if (newsDate) newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      if (newsTitle) newsTitle.textContent = item.title;
      if (newsSource) newsSource.textContent = item.source.name;
      if (newsContent) newsContent.textContent = item.description;
      newsMoreLink?.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsContent = this.newsContainer?.querySelector('.news__content') as HTMLElement;

    newsContent.innerHTML = '';
    newsContent.append(fragment);
  }
}

export default News;
