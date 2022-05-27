import { useState } from 'react';
import { FilterArticles, MapView } from '../components/home';
import { insertDeleteStringArray } from '../utilities';

export const Home = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const hadleSelectedItem = (item: string) => {
    setSelectedItems((currentSelectedItems) =>
      insertDeleteStringArray(currentSelectedItems, item)
    );
  };

  return (
    <main className="relative flex flex-col main">
      <MapView items={selectedItems} />
      <FilterArticles
        selectedItems={selectedItems}
        hadleSelectedItem={hadleSelectedItem}
      />
    </main>
  );
};
