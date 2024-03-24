console.log("Entre al archivo index.js", "inicializacion");

const Alq_completo = document.querySelector("#Alquilerdisponible");
const Ven_completo = document.querySelector("#Ventadisponible");
const Alq_index = document.querySelector("#propiedades_alquiler");
const Ven_index = document.querySelector("#propiedades_venta");
let n = 0; /* variable para contar por cual ciclo se va */
let windows = false; /* Varible para determinar que pagina es / true = index.html  */
let html = "";
const pathname = window.location.pathname;
const propiedades_alquiler = [
  {
    nombre: "Departamento pequeño",
    src: "./assets/img/Alquiler 1.jpg",
    descripcion: "Depa. tipo estudio en barrio universitario",
    ubicacion: "Barrio Universitario , RM",
    habitaciones: 1,
    baño: 1,
    costo: 280000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento amoblado",
    src: "./assets/img/Alquiler 2.jpg",
    descripcion: "Departamento antiguo ubicado en el casco central",
    ubicacion: "Santiago , RM",
    habitaciones: 2,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en villa recien construida",
    src: "./assets/img/Alquiler 3.jpg",
    descripcion: "Casa a pocos pasos del metro tren",
    ubicacion: "Buin , RM",
    habitaciones: 3,
    baño: 2,
    costo: 500000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento de lujo",
    src: "./assets/img/Alquiler 4.jpeg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Las Condes , RM",
    habitaciones: 2,
    baño: 2,
    costo: 600000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento recien remodelado",
    src: "./assets/img/Alquiler 5.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "San Miguel , RM",
    habitaciones: 1,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamente en desuso",
    src: "./assets/img/Alquiler 6.jpeg",
    descripcion: "Departamento acogedor en buena zona",
    ubicacion: "Estación central , RM",
    habitaciones: 2,
    baño: 1,
    costo: 300000,
    smoke: false,
    pets: false,
  },
];
const propiedades_venta = [
  {
    nombre: "MonoAmbiente",
    src: "./assets/img/Venta 1.jpg",
    descripcion: "Perimetro 50mts2 con ventana de termopanel",
    ubicacion: "Barrio Italia,RM",
    habitaciones: 1,
    baño: 1,
    costo: 130000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento nuevo equipado",
    src: "./assets/img/Venta 2.jpeg",
    descripcion: "Departamento con cocina separada",
    ubicacion: "Las condes,RM",
    habitaciones: 1,
    baño: 2,
    costo: 350000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa de lujo",
    src: "./assets/img/Venta 3.jpg",
    descripcion: "Casa con piscina en zona privilegiada",
    ubicacion: "Lo Barnechea,RM",
    habitaciones: 4,
    baño: 2,
    costo: 200000000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa familiar",
    src: "./assets/img/Venta 4.jpg",
    descripcion: "Ambiente familiar con patio amplio",
    ubicacion: "Pudahuel,RM",
    habitaciones: 2,
    baño: 3,
    costo: 150550999,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa de lujo",
    src: "./assets/img/Venta_5.jpg",
    descripcion: "Diseño minimalista con accesorios de ultima generacion",
    ubicacion: "Las Condes,RM",
    habitaciones: 5,
    baño: 3,
    costo: 300000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa pequeña",
    src: "./assets/img/Venta_6.jpg",
    descripcion: "Ambiente acogedor en zona recidencial",
    ubicacion: "Lo padro,RM",
    habitaciones: 3,
    baño: 2,
    costo: 150555999,
    smoke: true,
    pets: true,
  },
];

/* Funcion para verificar si es permitido fumar */
let verificarSmoke = function (modo) {
  let variable = "";
  if (modo.smoke == false) {
    variable =
      '<p style="color:red"><i class="fa-solid fa-smoking-ban"></i>No se permite fumar</p>';
  } else {
    variable =
      '<p style="color:green"><i class="fas fa-smoking"></i>Permitido fumar</p>';
  }
  return variable;
};

/* Funcion para verificar si es permitido tener mascota */
let verificarPet = function (modo) {
  let variable = "";
  if (modo.pets == false) {
    variable =
      '<p style="color:red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>';
  } else {
    variable =
      '<p style="color:green"><i class="fa-solid fa-paw"></i>Mascotas permitidas</p>';
  }
  return variable;
};

/* Funcion para crear template */
let crearTemplate = function (varpets, varsmoke, varmodo) {
  let local = "";
  local = `
  <div class="card">
              <img src="${varmodo.src}" alt=propieda">
              <div class="cardtext">
                  <h3 class="nombre">${varmodo.nombre}</h3>
                  <h4 class="descripcion">${varmodo.descripcion}</h4>
                  <p class="direccion"><i class="fas fa-map-marker-alt"></i>${varmodo.ubicacion}</p>  
                  <p class="Habitaciones"><i class="fas fa-bed"></i>${varmodo.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${varmodo.baño} Baños</p>
                  <p><i class="fas fa-dollar-sign"></i>${varmodo.costo}</p>
                  ${varsmoke}
                  ${varpets}
              </div>
          </div>
  `;
  return local;
};

/* Funcion para hacer card de inmuebles en alquiler */
let template_alquiler = function (ventana, valor) {
  for (let alquiler of propiedades_alquiler) {
    let pets = verificarPet(alquiler);
    let smoke = verificarSmoke(alquiler);
    n += 1;
    html += crearTemplate(pets, smoke, alquiler);
    if (windows === true && n === 3) {
      /* Condicion para que solo se creen 3 tarjetas */
      n = 0;
      break;
    }
  }
  valor.innerHTML = html;
  /* Limpiando variable */
  html = "";
};

/* Funcion para hacer card de inmuebles en ventas */
let template_venta = function (ventana, valor) {
  for (let venta of propiedades_venta) {
    let pets = verificarPet(venta);
    let smoke = verificarSmoke(venta);
    n += 1;
    console.log(n);
    html += crearTemplate(pets, smoke, venta);
    if (windows === true && n === 3) {
      /* Condicion para que solo se creen 3 tarjetas */
      n = 0;
      break;
    }
  }
  valor.innerHTML = html;
  /* Limpiando variable */
  html = "";
};

/* Condicion para definir que pagina es*/
if (pathname === "/index.html") {
  /* Hacer cards de inmuebles en index.html */
  windows = true;
  template_venta(windows, Ven_index);
  windows = true;
  template_alquiler(windows, Alq_index);
} else if (pathname === "/propiedades_alquiler.html") {
  /* Hacer cards de inmuebles en propiedades_alquiler.html */
  template_alquiler(windows, Alq_completo);
} else if (pathname === "/propiedades_venta.html") {
  /* Hacer cards de inmuebles en propiedades_venta.html */
  template_venta(windows, Ven_completo);
}
