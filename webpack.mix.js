let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

 mix.styles([
   'resources/assets/sass/icons/font-awesome/css/font-awesome.min.css',
   'resources/assets/sass/icons/simple-line-icons/css/simple-line-icons.css',
   'resources/assets/sass/icons/weather-icons/css/weather-icons.min.css',
   'resources/assets/sass/icons/iconmind/iconmind.css',
   'resources/assets/sass/icons/themify-icons/themify-icons.css',
   'resources/assets/sass/icons/flag-icon-css/flag-icon.min.css',
   'resources/assets/sass/icons/material-design-iconic-font/css/materialdesignicons.min.css'
 ],  'public/css/assets.css');
