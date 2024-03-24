console.log("Entre al archivo index.js", "inicializacion");

const Alq_completo = document.querySelector("#Alquilerdisponible");
const Ven_completo = document.querySelector("#Ventadisponible");
const Alq_index = document.querySelector("#propiedades_alquiler");
const Ven_index = document.querySelector("#propiedades_venta");
let n = 0;
let windows = false;

const pathname = window.location.pathname;

const propiedades_alquiler = [
  {
    nombre: "MonoAmbiente",
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
    nombre: "Departamento nuevo equipado",
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
    smoke: true,
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

let alq = function (ventana) {
  for (let alquiler of propiedades_alquiler) {
    let mascotaC = "";
    let mascotaT = "";
    let mascotaI = "";
    let fumarC = "";
    let fumarT = "";
    let fumarI = "";

    if (alquiler.smoke == false) {
      fumarC = "red";
      fumarT = "No se permite fumar";
      fumarI = "fas fa-smoking-ban";
    } else {
      fumarC = "green";
      fumarT = "Permitido fumar";
      fumarI = "fas fa-smoking";
    }

    if (alquiler.pets == false) {
      mascotaC = "red";
      mascotaT = "No se permiten mascotas";
      mascotaI = "fa-solid fa-ban";
    } else {
      mascotaC = "green";
      mascotaT = "Mascotas permitidas";
      mascotaI = "fa-solid fa-paw";
    }

    n += 1;
    console.log(n);
    console.log(windows);
    if (windows === true) {
      Alq_index.innerHTML += `
      <div class="card">
                  <img src="${alquiler.src}" alt=propieda">
                  <div class="cardtext">
                      <h3 class="nombre">${alquiler.nombre}</h3>
                      <h4 class="descripcion">${alquiler.descripcion}</h4>
                      <p class="direccion"><i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}</p>  
                      <p class="Habitaciones"><i class="fas fa-bed"></i>${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${alquiler.baño} Baños</p>
                      <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                      <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
                      <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
                  </div>
              </div>
      `;
      if (n === 3) {
        n = 0;
        break;
      }
    } else {
      Alq_completo.innerHTML += `
<div class="card">
            <img src="${alquiler.src}" alt=propieda">
            <div class="cardtext">
                <h3 class="nombre">${alquiler.nombre}</h3>
                <h4 class="descripcion">${alquiler.descripcion}</h4>
                <p class="direccion"><i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}</p>  
                <p class="Habitaciones"><i class="fas fa-bed"></i>${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${alquiler.baño} Baños</p>
                <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
                <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
            </div>
        </div>
`;
    }
  }
};

let vent = function (ventana) {
  for (let venta of propiedades_venta) {
    let mascotaC = "";
    let mascotaT = "";
    let mascotaI = "";
    let fumarC = "";
    let fumarT = "";
    let fumarI = "";

    if (venta.smoke == false) {
      fumarC = "red";
      fumarT = "No se permite fumar";
      fumarI = "fas fa-smoking-ban";
    } else {
      fumarC = "green";
      fumarT = "Permitido fumar";
      fumarI = "fas fa-smoking";
    }

    if (venta.pets == false) {
      mascotaC = "red";
      mascotaT = "No se permiten mascotas";
      mascotaI = "fa-solid fa-ban";
    } else {
      mascotaC = "green";
      mascotaT = "Mascotas permitidas";
      mascotaI = "fa-solid fa-paw";
    }

    n += 1;
    console.log(n);
    if (windows === true) {
      Ven_index.innerHTML += `
    <div class="card">
              <img src="${venta.src}" alt=propieda">
              <div class="cardtext">
                  <h3 class="nombre">${venta.nombre}</h3>
                  <h4 class="descripcion">${venta.descripcion}</h4>
                  <p class="direccion"><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>  
                  <p class="Habitaciones"><i class="fas fa-bed"></i>${venta.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${venta.baño} Baños</p>
                  <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                  <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
                  <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
              </div>
          </div>
    `;
      if (n === 3) {
        n = 0;
        break;
      }
    } else {
      Ven_completo.innerHTML += `
    <div class="card">
              <img src="${venta.src}" alt=propieda">
              <div class="cardtext">
                  <h3 class="nombre">${venta.nombre}</h3>
                  <h4 class="descripcion">${venta.descripcion}</h4>
                  <p class="direccion"><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>  
                  <p class="Habitaciones"><i class="fas fa-bed"></i>${venta.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${venta.baño} Baños</p>
                  <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                  <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
                  <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
              </div>
          </div>
    `;
    }
  }
};

if (pathname === "/index.html") {
  windows = true;
  vent(windows);
  windows = true;
  alq(windows);
} else if (pathname === "/propiedades_alquiler.html") {
  alq(windows);
} else if (pathname === "/propiedades_venta.html") {
  vent(windows);
}
