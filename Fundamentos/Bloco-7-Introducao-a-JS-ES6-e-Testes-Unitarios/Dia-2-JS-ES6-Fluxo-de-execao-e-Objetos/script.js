const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
  
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nro.: ${order.address.number} AP: ${order.address.apartment}`
  }
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
    order.name = 'Luiz Silva';
    order.payment = 50;
    let pizza = Object.keys(order.order.pizza)
  return `Ola ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${order.order.drinks.coke.type} e R$ ${order.payment}`
  }
  
  console.log(orderModifier(order));