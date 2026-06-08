import { Injectable } from '@angular/core';

import { MAIN_NAVIGATION, NavigationItem } from '../constants/navigation.constants';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  getMainNavigation(): NavigationItem[] {
    return MAIN_NAVIGATION;
  }
}
