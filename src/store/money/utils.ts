interface Props {
  title: string;
}

export class CreateNewCategory {
  title: string;

  purchase: number[];

  constructor(props: Props) {
    this.title = props.title;
    this.purchase = [1];
  }

  createSubCategory() {
    console.log(`Hello, my name is ${this.title}`);
  }
}

// export const subcategory = new CreateNewCategory({ title: 'fuck' });
