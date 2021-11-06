import { Route, Switch } from 'react-router';
import rutas from './route-config'
export default function Switcher(){
  return ( <Switch>
        {rutas.map(ruta =>
          <Route key={ruta.path} 
                 path={ruta.path}>
            {  <ruta.componente /> }
          </Route>)}
      </Switch>)
}
