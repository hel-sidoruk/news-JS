import './pagination.css';
class Pagination {
  constructor(private itemsCount: number, private limit: number) {}
  getPageCount(): number {
    return Math.ceil(this.itemsCount / this.limit);
  }

  getPagesArray(): number[] {
    const totalPages = this.getPageCount();
    return Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  setPages(num: number): number[] {
    const number = num;
    return [number - 1, number, number + 1];
  }

  pages(page: number): number[] {
    const lastPage = this.getPageCount();
    let beforePage = 2;
    let middlePage = 3;
    let afterPage = 4;

    if (page <= 2) {
      [beforePage, middlePage, afterPage] = this.setPages(3);
    }

    if (page > 2) {
      [beforePage, middlePage, afterPage] = this.setPages(page);
    }

    if (page >= lastPage - 1) {
      [beforePage, middlePage, afterPage] = this.setPages(lastPage - 2);
    }
    return [1, beforePage, middlePage, afterPage, lastPage];
  }

  pagesElement(page: number, callback: (e: Event) => void) {
    const pagination = document.createElement('div');
    pagination.addEventListener('click', callback);

    const paginationBtns = this.pages(page);
    const lastPage = this.getPageCount();
    pagination.classList.add('pagination');
    const buttons: Array<HTMLButtonElement> = paginationBtns.map((el) => {
      const buttonEl = document.createElement('button');
      buttonEl.classList.add(...(page === el ? ['pagination__btn', 'pagination__btn--current'] : ['pagination__btn']));
      buttonEl.textContent = String(el);
      return buttonEl;
    });
    pagination.append(...buttons);
    const dots1: HTMLSpanElement = document.createElement('span');
    dots1.classList.add(...(page > 3 ? ['dots', 'dots--active'] : ['dots']));
    dots1.textContent = '...';
    const dots2: HTMLSpanElement = document.createElement('span');
    dots2.classList.add(...(page < lastPage - 2 ? ['dots', 'dots--active'] : ['dots']));
    dots2.textContent = '...';
    pagination.append(dots1, dots2);
    return pagination;
  }
}

export default Pagination;
