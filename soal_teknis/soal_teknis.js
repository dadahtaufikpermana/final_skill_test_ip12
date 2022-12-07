// Dadah Taufik 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let resto, datePrint, cashier
let dataItems = []
let priceItems = []

function items() {
  rl.question('Masukan Item : ', function(item) {
    rl.question('Masukan Harga : ', function(price) {
      dataItems = [...dataItems, item]
      priceItems = [...priceItems, price]
      
      rl.question('Apakan  anda ingin menambah item lagi ?(y/n)', function(addItem) {
        if(addItem == "y") {
          items()
        } else {
          rl.close()
        }
      })
    })
  })
}

rl.question('Masukan Nama Resto: ', function (restoName) {
  rl.question('Masukan Tanggal:  ', function (date) {
    rl.question('Masukan Nama Kasir: ', function (cashierName) {
      items()
      resto = restoName
      datePrint = date
      cashier = cashierName 
    })
  });
});

rl.on('close', function () {
  console.log(`\t ${resto}`);
  console.log(`Tanggal : ${datePrint}`);
  console.log(`Nama Kasir : ${cashier}`);
  console.log('================================');
  for (let index = 0; index < dataItems.length; index++) {
    console.log(`${dataItems[index]}...................Rp${priceItems[index]}`);
  }
  process.exit(0);
});