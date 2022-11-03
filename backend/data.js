import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Parth',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Hydrochloric Acid',
      slug: 'hydrochloric-acid',
      category: 'Acids',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Home Science Tools',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality acids',
    },
    {
      name: 'Isopropyl Alcohol',
      slug: 'isopropyl-alcohol',
      category: 'Alcohol',
      image: '/images/p2.jpg',
      price: 180,
      countInStock: 20,
      brand: 'Redcop',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Copper Sulphate Neela Thotha',
      slug: 'copper-sulphate-neela-thotha',
      category: 'Lab Chemicals',
      image: '/images/p3.jpg',
      price: 389,
      countInStock: 15,
      brand: 'Ases',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Boric Acid Powder',
      slug: 'boric-acid-powder',
      category: 'Lab Chemicals',
      image: '/images/p4.jpg',
      price: 199,
      countInStock: 5,
      brand: 'Varun Lifecare',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
