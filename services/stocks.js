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
    discount: 0,
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
    flashSale: mockProducts
  }
}

export const getSalesVouchers = () => {
  return { vouchers: saleVouchers }
}