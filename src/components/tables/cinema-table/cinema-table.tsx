import { useState, useEffect } from 'react';
import { FilmsType } from 'store/cinema/data/data';
import TableLine from '../table-line/table-line';
import TableFilter from './table-filter/table-filter';
import style from './styles.module.css';

export interface Props {
  props: FilmsType[];
}

interface SortConfig {
  key: keyof typeof Object | string;
  direction: string;
}

const CinemaTable = ({ props }: Props) => {
  const [cinema, setCinema] = useState<FilmsType[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: '',
  });

  useEffect(() => {
    return setCinema(() => [...props]);
  }, [props]);

  const sortBy = (key: keyof typeof Object | string) => {
    if (sortConfig.direction === 'ascending') {
      setSortConfig({ key, direction: 'descending' });
    } else {
      setSortConfig({ key, direction: 'ascending' });
    }

    const sorted: FilmsType[] = props.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }

      return 0;
    });

    setCinema(() => [...sorted]);
  };

  const array = ['id', 'title', 'year', 'director', 'country', 'rating'];

  return (
    <div>
      <div className={style.sortmenu}>
        {array.map(el => (
          <TableFilter key={el} title={el} handleClick={sortBy} />
        ))}
      </div>
      {cinema.map((el: FilmsType) => (
        <TableLine key={el.id} info={el} />
      ))}
    </div>
  );
};

export default CinemaTable;
