import { items } from '../../core/constants';

interface FilterArticlesPorps {
  selectedItems: string[];
  // eslint-disable-next-line no-unused-vars
  hadleSelectedItem: (item: string) => void;
}
// WIP: REFACTOR CREATE FILTER
export const FilterArticles = ({
  selectedItems,
  hadleSelectedItem,
}: FilterArticlesPorps) => (
  <div className="absolute -bottom-1 z-[99999] flex w-11/12 max-w-screen-sm flex-row items-center justify-between rounded-xl bg-grey-900 p-5 shadow-sm">
    <h3 className="text-lg font-extrabold text-center text-white">Articulos</h3>
    <ul className="grid grid-cols-4">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => hadleSelectedItem(item.name)}
          className={`m-2 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 py-9 pt-14 pb-6 text-center ${
            selectedItems?.includes(item.name)
              ? 'border-tertiary-500 bg-primary-500'
              : 'border-grey-300 bg-grey-300 '
          }`}
          aria-hidden="true"
        >
          <img src={item.image} alt={item.name} className="h-12" />
          <span className="mt-5 font-bold ">{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);
