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
      src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
      src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
      src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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