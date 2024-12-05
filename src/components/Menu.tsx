import  { useState } from 'react';

// Definición del tipo para los elementos del menú
interface MenuItem {
  label: string;
  children?: MenuItem[]; // Los submenús son opcionales y recursivos
}


/*---------------(Lista de Menú Dinámica)------------*/
const menuItems: MenuItem[] = [
  {
    label: "Fruits & Vegetables",
    children: [
      { label: "Apples" },
      { label: "Oranges" },
      { label: "Bananas" },
    ],
  },
  {
    label: "Snack & Munchies",
    children: [
      { label: "Chips" },
      { label: "Cookies" },
    ],
  },
  {
    label: "Bakery & Biscuits",
    children: [
      { label: "Bread" },
      { label: "Croissants" },
    ],
  },
  {
    label: "Cold Drinks & Juices",
    children: [
      { label: "Sodas" },
      { label: "Juices" },
    ],
  },
  {
    label: "Dairy, Bread & Eggs",
    children: [
      { label: "Milk" },
      { label: "Eggs" },
    ],
  },
  {
    label: "Chicken, Meat & Fish",
    children: [
      { label: "Chicken" },
      { label: "Fish" },
    ],
  },
  {
    label: "Baby Care",
    children: [
      { label: "Diapers" },
      { label: "Wipes" },
    ],
  },
];
/*----------------------------------*/


// Componente del Menú
function Menu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Abre un submenú
  const openSubMenu = (label: string) => {
    if (timer) clearTimeout(timer); // Limpia cualquier temporizador anterior
    setOpenMenu(label); // Abre el submenú actual
  };

  // Cierra el submenú con un retraso de 1 segundo
  const closeSubMenu = () => {
    const newTimer = setTimeout(() => {
      setOpenMenu(null); // Cierra el menú después de 1 segundo
    }, 1000); // 1000ms = 1 segundo
    setTimer(newTimer);
  };

  // Renderiza el menú de forma recursiva
  const renderMenu = (items: MenuItem[]) => {
    return (
      <ul className="menu menu-horizontal">
        {items.map((item) => (
          <li
            key={item.label}
            className="group relative"
            onMouseEnter={() => openSubMenu(item.label)} // Abre el submenú al hacer hover
            onMouseLeave={closeSubMenu} // Cierra el submenú al salir
          >
            <a className="px-4 py-2 cursor-pointer hover:bg-base-300">
              {item.label}
            </a>
            {item.children && openMenu === item.label && (
              <ul
                className="absolute bg-base-100 shadow-md rounded-box left-1/2 -translate-x-1/2 top-full mt-2 z-10"
                onMouseEnter={() => openSubMenu(item.label)} // Mantiene abierto si el puntero está sobre el submenú
                onMouseLeave={closeSubMenu} // Cierra el menú si el puntero sale
              >
                {item.children.map((child) => (
                  <li
                    key={child.label}
                    className="hover:bg-base-300 px-4 py-2 cursor-pointer"
                    onClick={() => {
                      alert(`Seleccionaste: ${child.label}`);
                      setOpenMenu(null); // Cierra el menú después de la selección
                    }}
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full flex justify-center mt-4">
      {/* Renderiza el menú dinámico */}
      {renderMenu(menuItems)}
    </div>
  );
}

export default Menu;