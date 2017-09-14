const frameSizes = {
  f17: {
    inches: 17,
    riderHeight: '1,67m - 1,82m'
  },
  f20: {
    inches: 20,
    riderHeight: '1,77m - 1,92m'
  }
};

const stromerOptions = {
  seatPost: {
    id: 'seatPost',
    name: 'Geveerde zadelpen',
    price: 199
  },
  frontSuspension: {
    id: 'frontSuspension',
    name: 'Geveerde voorvork',
    price: 560
  },
  lock: {
    id: 'lock',
    name: 'Abus ringslot',
    price: 35
  },
  licensePlate: {
    id: 'licensePlate',
    name: 'RDW leges en kenteken',
    price: 157.3
  },
  winterTyres: {
    id: 'winterTyres',
    name: 'Winterbanden',
    price: 159.9
  }
};

const mainProducts = {
  st1t: {
    id: 'stromer-st1-t',
    name: 'Stromer ST1 t',
    summary: 'De stijlvolle Audi bruin gespoten ST1 speed pedelec biedt een bijzondere rij-ervaring dankzij de vernieuwende Speed Drive, ontwikkeld door Schlumpf.',
    visual: 'https://static.webshopapp.com/shops/029847/files/042614420/stromer-stromer-st1-t.jpg',
    price: 3490,
    sizes: frameSizes,
    options: stromerOptions
  },
  st2s: {
    id: 'stromer-st2-s',
    name: 'Stromer ST2 S',
    summary: 'De Stromer ST2, maar dan uitgebreid met een super sterke 983Wh accu. De eerste speed pedelec met elektrische schakelen, en een super krachtige lichtset en remlicht.',
    visual: 'https://static.webshopapp.com/shops/029847/files/044440544/stromer-stromer-st2-s.jpg',
    price: 8990,
    sizes: frameSizes,
    options: stromerOptions
  }
};

export default mainProducts;
