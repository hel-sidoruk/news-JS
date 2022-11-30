import './sources.css';

interface Source {
  id: string;
  name: string;
}

class Sources {
  draw(data: Source[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    const sourcesElement: HTMLDivElement | null = document.querySelector('.sources');

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

    sourcesElement?.append(fragment);
  }
}

export default Sources;
