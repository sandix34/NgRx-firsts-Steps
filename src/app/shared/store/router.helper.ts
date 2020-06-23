import { Params } from '@angular/router';

// défini l'état du router avec toutes les propriétés souhaitées
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}