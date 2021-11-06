
import LibroList from './components/Libro/LibroList';
import LibroGetById from './components/Libro/LibroGetById';
import LibroCreate from './components/Libro/create/LibroCreate';
import AutorList from './components/Autor/AutorList';
import AutorGetById from './components/Autor/AutorGetById';
import AutorCreate from './components/Autor/create/AutorCreate';
import VentaList from './components/Venta/VentaList';
import VentaGetById from './components/Venta/VentaGetById';
import VentaCreate from './components/Venta/create/VentaCreate';
import DetalleVentaList from './components/DetalleVenta/DetalleVentaList';
import DetalleVentaGetById from './components/DetalleVenta/DetalleVentaGetById';
import DetalleVentaCreate from './components/DetalleVenta/create/DetalleVentaCreate';

const routes = [
{path: '/Libro/all', componente: LibroList },
{path: '/Libro/:id(\\d+)', componente: LibroGetById },
{path: '/Libro/create', componente: LibroCreate },
{path: '/Autor/all', componente: AutorList },
{path: '/Autor/:id(\\d+)', componente: AutorGetById },
{path: '/Autor/create', componente: AutorCreate },
{path: '/Venta/all', componente: VentaList },
{path: '/Venta/:id(\\d+)', componente: VentaGetById },
{path: '/Venta/create', componente: VentaCreate },
{path: '/DetalleVenta/all', componente: DetalleVentaList },
{path: '/DetalleVenta/:id(\\d+)', componente: DetalleVentaGetById },
{path: '/DetalleVenta/create', componente: DetalleVentaCreate },]
export default routes;
