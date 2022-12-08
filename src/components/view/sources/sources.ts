import { Source, View } from '../../../types/types';
import './sources.css';

class Sources implements View<Source> {
  draw(data: Source[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    const sourcesContainer = document.querySelector('.sources__container') as HTMLDivElement;
    (sourcesContainer.querySelectorAll('.source__item') as NodeListOf<HTMLDivElement>).forEach((el): void =>
      el.remove()
    );

    if (!data.length) {
      const noItemsElem: HTMLParagraphElement = document.createElement('p');
      noItemsElem.classList.add('source__item', 'source__item--default');
      noItemsElem.textContent = 'No items found';
      sourcesContainer.append(noItemsElem);
      return;
    }

    data.forEach((item: Source): void => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
      const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement;

      sourceItemName.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sourcesContainer.append(fragment);
  }
}

export default Sources;
