import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

// défini l'état du router avec toutes les propriétés souhaitées
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

// transforme la valeur par défaut fournie par le router d' Angular afin de ne conserver que les propriétés souhaitées
// cette classe va effectuer une affectation par décomposition
export class MyRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const { url, root: { queryParams } } = routerState;
    const { params } = route;
    /**
     * équivaut à
     * const url = routerState.url;
     * const queryParams = router.root.queryParams;
     */

    return { url, params, queryParams };
  }
}