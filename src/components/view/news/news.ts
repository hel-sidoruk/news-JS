import { Source } from '../sources/sources';
import './news.css';

export interface NewsItem {
  title: string;
  description: string;
  source: Source;
  publishedAt: string;
  author: string;
  url: string;
  urlToImage: string;
}

type HtmlEl = HTMLElement | null;

export interface View<T> {
  draw: (arr: T[]) => void;
}

class News implements View<NewsItem> {
  draw(data: NewsItem[]): void {
    const news: NewsItem[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    const newsElement: HtmlEl = document.querySelector('.news');

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

    if (newsElement) newsElement.innerHTML = '';
    newsElement?.appendChild(fragment);
  }
}

export default News;
