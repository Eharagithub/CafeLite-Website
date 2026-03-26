export interface MenuItem {
  id: number
  name: string
  desc: string
  price: number
  category: string
  tag?: string
  image?: string
}

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Espresso', desc: 'Double shot, rich and bold', price: 3.50, category: 'Coffee', tag: 'Classic',image: '/assets/3.jpg'  },
  { id: 2, name: 'Flat White', desc: 'Velvety microfoam, single origin', price: 4.80, category: 'Coffee', tag: 'Signature', image: '/assets/4.jpg' },
  { id: 3, name: 'Cold Brew', desc: '18-hour steep with vanilla finish', price: 5.20, category: 'Coffee', tag: 'Cold', image: '/assets/5.jpg' },
  { id: 4, name: 'Cardamom Latte', desc: 'Spiced latte with oat milk', price: 5.50, category: 'Coffee', tag: 'Signature', image: '/assets/6.jpg' },
  { id: 5, name: 'Americano', desc: 'Espresso with still water', price: 4.00, category: 'Coffee', image: '/assets/7.jpg' },
  { id: 6, name: 'Matcha Latte', desc: 'Ceremonial grade, steamed oat milk', price: 5.50, category: 'Drinks', tag: 'Popular', image: '/assets/8.jpg' },
  { id: 7, name: 'Masala Chai', desc: 'House blend spices, whole milk', price: 4.80, category: 'Drinks', tag: 'Signature', image: '/assets/9.jpg' },
  { id: 8, name: 'Hibiscus Fizz', desc: 'Sparkling hibiscus, rose water', price: 4.50, category: 'Drinks', tag: 'Cold', image: '/assets/10.jpg' },
  { id: 9, name: 'Avocado Toast', desc: 'Sourdough, feta, chili flakes, egg', price: 12.00, category: 'Food', tag: 'Brunch', image: '/assets/3.jpg' },
  { id: 10, name: 'Butter Croissant', desc: 'Freshly baked, flaky and golden', price: 4.50, category: 'Food', image: '/assets/5.jpg' },
  { id: 11, name: 'Banana Bread', desc: 'Dark chocolate chips, walnut', price: 5.00, category: 'Food', image: '/assets/7.jpg' },
  { id: 12, name: 'Granola Bowl', desc: 'House granola, seasonal fruit, yogurt', price: 9.50, category: 'Food', tag: 'Healthy', image: '/assets/8.jpg' },
  
]

export const categories = ['All', ...Array.from(new Set(menuItems.map(i => i.category)))]