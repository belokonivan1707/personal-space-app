interface PurchasesTypes {
  id: string;
  date: string;
  amount: number;
  comment: string | boolean;
}

interface SubCategoryTypes {
  id: string;
  title: string;
  color: string;
  subTotal: number;
  purchases: PurchasesTypes[];
}

interface CategoryTypes {
  id: string;
  title: string;
  color?: string;
  total: number;
  purchases?: PurchasesTypes[];
  subcategories: SubCategoryTypes[];
}

export const CATEGORIES: CategoryTypes[] = [
  {
    id: '001',
    title: 'pharmacy',
    total: 1520,

    subcategories: [
      {
        id: '0001',
        title: 'vitamins and mineralas',
        color: 'green',
        subTotal: 1320,
        purchases: [
          { id: '000001', date: '18 11 2021', amount: 990, comment: false },
          { id: '000002', date: '18 11 2021', amount: 320, comment: 'vitamin E' },
        ],
      },
      {
        id: '0002',
        title: 'neurotransmitters',
        color: 'green',
        subTotal: 200,
        purchases: [{ id: '000003', date: '18 11 2021', amount: 200, comment: 'piracetam 400mg' }],
      },
    ],
  },
  {
    id: '001',
    title: 'pharmacy',
    total: 990,

    subcategories: [
      {
        id: '0001',
        title: 'vitamins and mineralas',
        color: 'green',
        subTotal: 990,
        purchases: [{ id: '000001', date: '18 11 2021', amount: 990, comment: false }],
      },
    ],
  },
  //   {
  //     id: '002',
  //     title: 'food',
  //     total: 0,

  //     subcategories: [
  //       {
  //         id: '0001',
  //         title: 'vitamins and mineralas',
  //         color: 'green',
  //         subTotal: 1320,
  //         purchases: [
  //           { id: '000001', date: '18 11 2021', amount: 990, comment: false },
  //           { id: '000002', date: '18 11 2021', amount: 320, comment: 'vitamin E' },
  //         ],
  //       },
  //       {
  //         id: '0002',
  //         title: 'neurotransmitters',
  //         color: 'green',
  //         subTotal: 200,
  //         purchases: [{ id: '000003', date: '18 11 2021', amount: 200, comment: 'piracetam 400mg' }],
  //       },
  //     ],
  //   },
  //   {
  //     id: '001',
  //     title: 'pharmacy',
  //     total: 990,

  //     subcategories: [
  //       {
  //         id: '0001',
  //         title: 'vitamins and mineralas',
  //         color: 'green',
  //         subTotal: 990,
  //         purchases: [{ id: '000001', date: '18 11 2021', amount: 990, comment: false }],
  //       },
  //     ],
  //   },
];
