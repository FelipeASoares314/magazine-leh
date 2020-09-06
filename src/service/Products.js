const products = [
  {
    label: 'Ofertas do dia',
    products: [{
      imgURL: 'https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMWM02BRAPTO/AEMWM02BRAPTO_PRD_447_4.jpg',
      name: 'iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple',
      brand: 'Apple',
      price: 4399,
      rating: 3,
      installments: {
        number: 12,
        interests: false
      }
    },
    {
      imgURL: 'https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/55004475/1303896775/smartphone-motorola-moto-g8-power-lite-aqua-64gb-4-gb-ram-tela-de-6-5-hd-camera-traseira-tripla-android-9-e-processador-octa-core-55004475.jpg',
      name: 'Smartphone Moto G8 Power Lite 64GB Dual Chip Android Tela 6.5” Helio P35 4G Câmera 16MP+ 2MP+ 2MP - Azul Navy',
      brand: 'Motorola',
      price: 1208.07,
      rating: 4,
      installments: null
    },
    {
      imgURL: 'https://images-americanas.b2w.io/produtos/01/00/img/1618074/4/1618074458_1SZ.jpg',
      name: 'Smart Tv Led 43\'\' Samsung 43T5300 Full HD + WIFI, HDR para Brilho e Contraste, Plataforma Tizen, 2 HDMI, 1 USB - Preta',
      brand: 'Samsung',
      price: 1849.99,
      rating: 5,
      installments: null
    }, {
      imgURL: 'https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMWM02BRAPTO/AEMWM02BRAPTO_PRD_447_4.jpg',
      name: 'iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple',
      brand: 'Apple',
      price: 4399,
      rating: 3,
      installments: {
        number: 12,
        interests: false
      }
    },
    {
      imgURL: 'https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/55004475/1303896775/smartphone-motorola-moto-g8-power-lite-aqua-64gb-4-gb-ram-tela-de-6-5-hd-camera-traseira-tripla-android-9-e-processador-octa-core-55004475.jpg',
      name: 'Smartphone Moto G8 Power Lite 64GB Dual Chip Android Tela 6.5” Helio P35 4G Câmera 16MP+ 2MP+ 2MP - Azul Navy',
      brand: 'Motorola',
      price: 1208.07,
      rating: 4,
      installments: null
    },
    {
      imgURL: 'https://images-americanas.b2w.io/produtos/01/00/img/1618074/4/1618074458_1SZ.jpg',
      name: 'Smart Tv Led 43\'\' Samsung 43T5300 Full HD + WIFI, HDR para Brilho e Contraste, Plataforma Tizen, 2 HDMI, 1 USB - Preta',
      brand: 'Samsung',
      price: 1849.99,
      rating: 5,
      installments: null
    }]
  },
  {
    label: 'Eletrônicos',
    products: [{
      imgURL: 'https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMWM02BRAPTO/AEMWM02BRAPTO_PRD_447_4.jpg',
      name: 'iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple',
      brand: 'Apple',
      price: 4399,
      rating: 3,
      installments: {
        number: 12,
        interests: false
      }
    },
    {
      imgURL: 'https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/55004475/1303896775/smartphone-motorola-moto-g8-power-lite-aqua-64gb-4-gb-ram-tela-de-6-5-hd-camera-traseira-tripla-android-9-e-processador-octa-core-55004475.jpg',
      name: 'Smartphone Moto G8 Power Lite 64GB Dual Chip Android Tela 6.5” Helio P35 4G Câmera 16MP+ 2MP+ 2MP - Azul Navy',
      brand: 'Motorola',
      price: 1208.07,
      rating: 4,
      installments: null
    },
    {
      imgURL: 'https://images-americanas.b2w.io/produtos/01/00/img/1618074/4/1618074458_1SZ.jpg',
      name: 'Smart Tv Led 43\'\' Samsung 43T5300 Full HD + WIFI, HDR para Brilho e Contraste, Plataforma Tizen, 2 HDMI, 1 USB - Preta',
      brand: 'Samsung',
      price: 1849.99,
      rating: 5,
      installments: null
    }, {
      imgURL: 'https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMWM02BRAPTO/AEMWM02BRAPTO_PRD_447_4.jpg',
      name: 'iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple',
      brand: 'Apple',
      price: 4399,
      rating: 3,
      installments: {
        number: 12,
        interests: false
      }
    },
    {
      imgURL: 'https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/55004475/1303896775/smartphone-motorola-moto-g8-power-lite-aqua-64gb-4-gb-ram-tela-de-6-5-hd-camera-traseira-tripla-android-9-e-processador-octa-core-55004475.jpg',
      name: 'Smartphone Moto G8 Power Lite 64GB Dual Chip Android Tela 6.5” Helio P35 4G Câmera 16MP+ 2MP+ 2MP - Azul Navy',
      brand: 'Motorola',
      price: 1208.07,
      rating: 4,
      installments: null
    },
    {
      imgURL: 'https://images-americanas.b2w.io/produtos/01/00/img/1618074/4/1618074458_1SZ.jpg',
      name: 'Smart Tv Led 43\'\' Samsung 43T5300 Full HD + WIFI, HDR para Brilho e Contraste, Plataforma Tizen, 2 HDMI, 1 USB - Preta',
      brand: 'Samsung',
      price: 1849.99,
      rating: 5,
      installments: null
    }]
  }
]

export default {
  fetch: _ => new Promise((resolve) =>
    setTimeout(_ => resolve(products), 500)
  )
}
