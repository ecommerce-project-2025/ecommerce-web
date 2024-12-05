/*---------------(Importaciones de React y Heroicons)------------*/
import { useRef } from 'react';
import Menu from './Menu';
import {
  ShoppingCartIcon,
  UserCircleIcon,
  BellIcon,
} from '@heroicons/react/outline';
/*--------------------------------------*/

/*---------------(Componente Header)------------*/
function Header() {
  /*---------------(Referencias para detectar clics fuera)------------*/
  const headerRef = useRef<HTMLDivElement>(null);
  /*--------------------------------------*/

  return (
    <>
      {/*---------------(Navbar Principal)------------*/}
      <div
        ref={headerRef}
        className="navbar shadow-md bg-base-120 backdrop-blur-md bg-opacity-30"
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-commerce</a>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center w-full px-4">
            {/*---------------(Campo de Búsqueda)------------*/}
            <div
              className="flex items-center border w-full max-w-4xl"
              style={{ borderRadius: '10px' }} // Cambia el redondeo a 10px
            >
              <input
                type="text"
                placeholder="Search for products"
                className="flex-grow px-4 sm:px-8 md:px-16 py-2 focus:outline-none"
                style={{
                  textAlign: 'left', // Alinea el texto completamente a la izquierda
                }}
              />
              <button
                className="bg-red-400 text-white px-4 sm:px-6 md:px-8 py-2 hover:bg-red-500"
                style={{
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                }} // Redondeo solo para la derecha
              >
                Search
              </button>
            </div>
            {/*--------------------------------------*/}
          </div>

          <div className="flex items-center space-x-4 ml-4">
            {/*---------------(Ícono de Notificaciones)------------*/}
            <button
              className="btn btn-ghost btn-circle relative"
              aria-label="Notificaciones"
            >
              <BellIcon className="h-8 w-8 text-current" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                !
              </span>
            </button>
            {/*--------------------------------------*/}

            {/* Ícono del Carrito */}
            <button
              className="btn btn-ghost btn-circle relative"
              aria-label="Carrito de compras"
            >
              <ShoppingCartIcon className="h-8 w-8 text-current" />
            </button>
            {/*--------------------------------------*/}

            {/* Menú de Usuario */}
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                aria-label="Perfil de usuario"
              >
                <div className="w-10 rounded-full">
                  <UserCircleIcon className="h-10 w-10 text-gray-800" />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-b"></div>

      {/*---------------(Menú Agregado)------------*/}
      <Menu></Menu>
      {/*--------------------------------------*/}
    </>
  );
}

export default Header;
