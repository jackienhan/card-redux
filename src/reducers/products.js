var initialState = [
  {
    id: 1,
    name: 'Iphone 7 Plus',
    image: 'https://cdn.nguyenkimmall.com/images/companies/_1/Content/vien-thong/dien%20thoai/apple/dien-thoai-iphone-7-plus-32gb-rose-gold-1.jpg',
    description: 'Do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 5
  },
  {
    id: 2,
    name: 'samSung Galaxy S7',
    image: 'https://caremobile.vn/wp-content/uploads/2017/12/samsung-s7-2-e1537700752836.jpg',
    description: 'Do SamSung sản xuất',
    price: 300,
    inventory: 15,
    rating: 3
  },
  {
    id: 3,
    name: 'Xaomi Note 8',
    image: 'https://didongviet.vn/pub/media/catalog/product//r/e/redmi-note-8-pro-8gb-128gb-didongviet.jpg',
    description: 'Do Xaomi sản xuất',
    price: 200,
    inventory: 18,
    rating: 1
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
