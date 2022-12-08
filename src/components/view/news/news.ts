import { NewsItem, View } from '../../../types/types';
import Pagination from '../../utils/pagination';
import './news.css';

class News implements View<NewsItem> {
  constructor(
    private newsData: NewsItem[] | [] = [],
    private page: number = 1,
    private limit: number = 10,
    private newsContainer = document.querySelector('.news') as HTMLDivElement
  ) {}

  draw(data: NewsItem[]): void {
    this.newsData = data;
    if (this.newsData.length) {
      const pagination: Pagination = new Pagination(this.newsData.length, this.limit);
      const handleClick = (e: Event): void => {
        const element = e.target as HTMLElement;
        if (!element.classList.contains('pagination__btn')) return;
        const page = Number(element.textContent);
        this.page = page;
        (element.parentElement as HTMLElement).replaceWith(pagination.pagesElement(page, handleClick));
        this.render();
      };

      const paginationEl: HTMLDivElement = pagination.pagesElement(1, handleClick);
      this.render();
      if (this.newsContainer.querySelector('.pagination')) {
        (this.newsContainer.querySelector('.pagination') as HTMLDivElement).remove();
      }
      this.newsContainer.append(paginationEl);
    }
  }

  render(): void {
    const coef: number = this.limit * (this.page - 1);
    const news: NewsItem[] =
      this.newsData.length >= this.limit
        ? this.newsData.filter((_, idx) => idx >= 0 + coef && idx < 10 + coef)
        : this.newsData;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: NewsItem, idx: number): void => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');
      (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone.querySelector('.news__meta-author') as HTMLLIElement).textContent = item.author || item.source.name;
      (newsClone.querySelector('.news__meta-date') as HTMLLIElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
      (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
      (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
      (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent = item.description;
      (newsClone.querySelector('.news__read-more a') as HTMLAnchorElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsContent = this.newsContainer.querySelector('.news__content') as HTMLDivElement;

    newsContent.innerHTML = '';
    newsContent.append(fragment);
  }
}

export default News;
