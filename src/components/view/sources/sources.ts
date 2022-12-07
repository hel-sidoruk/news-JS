import { Source } from '../../../types/types';
import { View } from '../news/news';
import './sources.css';

class Sources implements View<Source> {
  draw(data: Source[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    const sourcesContainer: HTMLDivElement | null = document.querySelector('.sources__container');
    sourcesContainer?.querySelectorAll('.source__item').forEach((el) => el.remove());
    if (!data.length) {
      const noItemsElem: HTMLElement = document.createElement('p');
      noItemsElem.classList.add('source__item', 'source__item--default');
      noItemsElem.textContent = 'No items found';
      sourcesContainer?.append(noItemsElem);
      return;
    }

    data.forEach((item: Source) => {
      if (sourceItemTemp) {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

        const sourceItemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
        const sourceItem: HTMLDivElement | null = sourceClone.querySelector('.source__item');

        if (sourceItemName) sourceItemName.textContent = item.name;
        if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    sourcesContainer?.append(fragment);
  }
}

export default Sources;
