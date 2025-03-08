import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faClock,
  faComment,
  faEye,
  faGem,
  faImage,
  faPenToSquare,
  faTrashCan,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faBan,
  faBars,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCropSimple,
  faGift,
  faHeadset,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './services/http-interceptors/token.interceptor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { JwtModule } from '@auth0/angular-jwt';
import { provideToastr } from 'ngx-toastr';

const setupFontAwesome = (library: FaIconLibrary) => {
  library.addIcons(
    faUser,
    faHeadset,
    faGem,
    faBars,
    faChevronDown,
    faChevronUp,
    faImage,
    faComment,
    faCropSimple,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faCircle,
    faEye,
    faPenToSquare,
    faBan,
    faClock,
    faCircleCheck,
    faXmark,
    faTrashCan,
    faGift
  );
};

export const tooltipConfig: MatTooltipDefaultOptions = {
  showDelay: 1000,
  disableTooltipInteractivity: true,
  hideDelay: 0,
  touchendHideDelay: 0,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(
      NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark' }),
      JwtModule.forRoot({})
    ),
    provideAnimationsAsync(),
    {
      provide: FaIconLibrary,
      useFactory: () => {
        const library = new FaIconLibrary();
        setupFontAwesome(library);
        return library;
      },
    },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
    provideToastr({
      positionClass: 'toast-bottom-center',
      timeOut: 3000,
    }),
  ],
};
