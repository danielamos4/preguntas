function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let preguntas = [

  {
    pregunta: "¿Què òrgano en el cuerpo consume màs energìa?",
    ayuda: "Controla los movimientos voluntarios, el habla, la inteligencia, la memoria, etc.",
    ayudaImg: "https://img.freepik.com/vector-gratis/signo-interrogacion-moderno-pagina-ayuda-soporte_1017-27395.jpg?w=2000",
    imagen: "https://static.vecteezy.com/system/resources/thumbnails/000/376/227/small/envio-11.jpg",
    respuesta: "Cerebro",
    distractores: ["Neurona"],
  },
  {
    pregunta: "¿Cuanto es 7*8+5?",
    ayuda: "Primero multiplica y despuès suma",
    ayudaImg: "https://img.freepik.com/vector-gratis/signo-interrogacion-moderno-pagina-ayuda-soporte_1017-27395.jpg?w=2000",
    imagen: "https://i.pinimg.com/564x/c5/2c/c4/c52cc4f4ba46ff1ed3abb39c59f1dd3b.jpg",
    respuesta: "61",
    distractores: ["56"],
  },
  {
    pregunta: "¿Quién pintó la Mona lisa?",
    ayuda: "Tambièn pintò la ùltima cena.",
    ayudaImg: "https://i.ibb.co/jw3cRLM/ultima-dena.jpg",
    imagen: "https://i.blogs.es/716ce3/leonardo_da_vinci_-_mona_lisa/450_1000.jpg",
    respuesta: "Leonardo Da Vinci",
    distractores: ["Picasso"],
  },
  {
    pregunta: "¿Cómo se llama la capital de Mongolia??",
    ayuda: "Se ubica en el valle del río Tuul y limita con el Parque Nacional Bogd Khan Uul",
    ayudaImg: "https://img.freepik.com/vector-gratis/signo-interrogacion-moderno-pagina-ayuda-soporte_1017-27395.jpg?w=2000",
    imagen: "https://www.rusiaparadescubrir.com/userfiles/images/mongolia/big/mongol_ulaanbator_new.jpg",
    respuesta: "Ulán Bator",
    distractores: ["Pekìn"],
  },
  {
    pregunta: "¿Quién es el autor de el Quijote?",
    ayuda: "Es un poeta y novelista Español",
    ayudaImg: "https://www.biografiasyvidas.com/monografia/cervantes/fotos/cervantes_miguel_1.jpg",
    imagen: "https://www.biografiasyvidas.com/monografia/cervantes/fotos/cervantes_miguel_1.jpg",
    respuesta: "Miguel De Cervantes",
    distractores: ["Gabriel Garcìa Màrquez"],
  },
  {
    pregunta: "¿En qué país se encuentra la torre de Pisa?",
    ayuda: "Se encuentra situada en el sur de Europa, en el centro mediterràneo",
    ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg",
    respuesta: "Italia",
    distractores: ["Francia"],
  },
  {
    pregunta: "¿Dónde se encuentra el Templo Expiatorio de la Sagrada Familia?",
    ayuda: "Capital autònoma de Cataluña",
    ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/2/26/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg",
    imagen: "https://images.adsttc.com/media/images/57fe/7725/e58e/cef4/c400/003a/large_jpg/Sagrada_Familia_haschelsax_02.jpg?1476294424",
    respuesta: "Barcelona",
    distractores: ["Madrid"],
  },
  {
    pregunta: " ¿Cómo se llama la lengua oficial en china?",
    ayuda: "Se habla en muchas partes del continente asìatico",
    ayudaImg: "https://www.crical.cl/wp-content/uploads/2019/09/02_mandarin_4.jpg",
    imagen: "https://lostraductores.es/wp-content/uploads/que-idiomas-se-hablan-en-china.png",
    respuesta: "Mandarìn",
    distractores: ["Japonès"],
  },
  {
    pregunta: "¿Cuál es la fórmula química del agua?",
    ayuda: "Es una sustancia cuya molècula esta compuesta por dos àtomos de hidrògeno y uno de oxìgeno unidos por un enlace covalente",
    ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elektronenformel_Punkte_H20.svg/1024px-Elektronenformel_Punkte_H20.svg.png",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elektronenformel_Punkte_H20.svg/1024px-Elektronenformel_Punkte_H20.svg.png",
    respuesta: "H2O",
    distractores: ["H4O"],
  },
  {
    pregunta: "Resuelve la operaciòn de la siguiente imagen",
    ayuda: "Multiplica en forma de X",
    ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlFscx8q8kd7hSlTi71HYVQmbSH0D4PQ2hSu5h3ZCkjOUZ7KNpgL1mF-95idM_v4RaSc&usqp=CAU",
    imagen: "https://t1.uc.ltmcdn.com/es/posts/9/0/9/como_resolver_problemas_matematicos_de_suma_de_fracciones_1909_600_square.jpg",
    respuesta: "23/12",
    distractores: ["32/12"],
  },
];