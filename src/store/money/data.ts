import { CategoryTypes } from './types';

export const CATEGORIES: CategoryTypes[] = [
  {
    id: '001',
    title: 'pharmacy',
    type: 'GENERAL',
    total: 1520,
    mainPurchases: [],

    subcategories: [
      {
        id: '0001',
        title: 'vitamins and mineralas',
        type: 'SUB',
        color: 'green',
        subTotal: 1320,
        purchases: [
          { id: '000001', date: '01 11 2021', amount: 990, comment: false },
          { id: '000003', date: '18 11 2021', amount: 320, comment: 'vitamin E' },
        ],
      },
      {
        id: '0002',
        title: 'neurotransmitters',
        type: 'SUB',
        color: 'green',
        subTotal: 200,
        purchases: [{ id: '000004', date: '18 11 2021', amount: 200, comment: 'piracetam 400mg' }],
      },
    ],
  },

  {
    id: '002',
    title: 'food',
    type: 'GENERAL',
    total: 200,
    mainPurchases: [],

    subcategories: [
      {
        id: '0001',
        title: 'market',
        type: 'SUB',
        color: 'green',
        subTotal: 120,
        purchases: [
          { id: '000005', date: '18 11 2021', amount: 70, comment: false },
          { id: '000006', date: '18 11 2021', amount: 50, comment: false },
        ],
      },
      {
        id: '0002',
        title: 'shit market',
        type: 'SUB',
        color: 'green',
        subTotal: 80,
        purchases: [{ id: '000002', date: '12 11 2021', amount: 80, comment: false }],
      },
    ],
  },
  {
    id: '003',
    title: 'coffee shops',
    type: 'GENERAL',
    total: 64,
    color: 'orange',

    mainPurchases: [
      { id: '000007', date: '12 11 2021', amount: 32, comment: false },
      { id: '000008', date: '12 11 2021', amount: 32, comment: false },
    ],

    subcategories: [],
  },
];
