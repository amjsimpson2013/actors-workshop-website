import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

window.fbAsyncInit = function() {
  FB.init({
    appId            : '1138139490730894',
    xfbml            : true,
    version          : 'v20.0'
  });
};

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));