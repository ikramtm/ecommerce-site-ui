const mockProducts = [
  {
    name: 'Hoodie',
    sku: '432432',
    brand: 'Nike',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.7',
    discount: 10,
    img: {
      src: 'https://images.unsplash.com/photo-1601917993872-16fc37c1f872?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3700&q=80',
      alt: 'hoodie'
    },
    price: 10.00
  },
  {
    name: 'Kurta',
    sku: '432432',
    brand: 'Nike',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.7',
    discount: 10,
    img: {
      src: 'https://images.unsplash.com/photo-1605777973555-888f9265d2c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'hoodie'
    },
    price: 10.00
  },
  {
    name: 'Jacket',
    sku: '432432',
    brand: 'Nike',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.7',
    discount: 10,
    img: {
      src: 'https://images.unsplash.com/photo-1603976245482-4d96773aa63a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fDMlM0E0JTIwY2xvdGhlc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: 'hoodie'
    },
    price: 10.00
  },
  {
    name: 'Dress',
    sku: '432432',
    brand: 'Nike',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.7',
    discount: 10,
    img: {
      src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'hoodie'
    },
    price: 10.00
  }
]

const bestSeller = [
  {
    name: 'Kurta',
    sku: '00116c-23',
    brand: 'Al-Halal',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.9',
    discount: 40,
    img: {
      src: 'https://images.unsplash.com/photo-1607095932579-2008e60334ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTZ8fDMlM0E0JTIwY2xvdGhlc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: 'hoodie'
    },
    price: 50.00
  },
  {
    name: 'Jacket',
    sku: '00215b-11',
    brand: 'Timberland',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.8',
    discount: 35,
    img: {
      src: 'https://images.unsplash.com/photo-1610802518553-d5e1093ada22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHwzJTNBNCUyMGNsb3RoZXN8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      alt: 'hoodie'
    },
    price: 200.00
  },
  {
    name: 'LA Cap',
    sku: '00211a-89',
    brand: 'Nike',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.7',
    discount: 50,
    img: {
      src: 'https://images.unsplash.com/photo-1598434901316-ad271e8b29af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA5fHwzJTNBNCUyMGNsb3RoZXN8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      alt: 'cap'
    },
    price: 300.00
  },
  {
    name: 'Denim Jacket',
    sku: '00211a-89',
    brand: 'Gucci',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'black'],
    rating: '4.9',
    discount: 50,
    img: {
      src: 'https://images.unsplash.com/photo-1605557834021-6d58b8f73e66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU1fHwzJTNBNCUyMGNsb3RoZXN8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      alt: 'coat'
    },
    price: 1000.00
  }
]

const saleVouchers = [
  {
    title: 'Monday Happy',
    code: 'MONHPY',
    discount: '20'
  },
  {
    title: 'Payday Surprise',
    code: 'SRPSPYDY',
    discount: '20'
  },
  {
    title: 'First Order',
    code: 'HPYFRST',
    discount: '20'
  },
  {
    title: 'Vegeterian Food',
    code: 'VEGANLOVE',
    discount: '20'
  }
]

export const getInventory = () => {
  return {
    flashSale: mockProducts,
    bestSeller,
    allProducts: mockProducts
  }
}

export const getSalesVouchers = () => {
  return { vouchers: saleVouchers }
}