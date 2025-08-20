interface Order {
  id: number;
  customer: string;
  menu: string;
  qty: number;
  price: number;
}

const orders: Order[] = [
  { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
  { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
  { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
  { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 },
];

//SOAL 1

const ordertotalharga = orders.map((order) => ({
  ...order,
  total: order.qty * order.price,
}))
console.log("Total Harga per Order:", ordertotalharga); 

//SOAL 2

const ordercustomer = ordertotalharga.map((order) => ({
  customer: order.customer,
  total: order.total,
}));  
console.log(`\n Array customer dan total`);
console.log(ordercustomer);

//SOAL 3

const quantytylbh1 = orders.filter((order) => order.qty > 1)
console.log(`\n Array order dengan qty > 1`);
console.log(quantytylbh1);