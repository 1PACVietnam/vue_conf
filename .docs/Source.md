## Project Structure

```
./src
|
|- assets/               _______________ # Contain image|icon|svg files
|
|- components/           _______________ # Include all components of Vue App
|   |__ HelloWorld.vue   _______________ # HelloWorld component
|   |__ ...
|
|- constants/            _______________ # Include constants
|   |__ styles/          _______________ # constant styles support for vue-styled-components
|         |__colors.js   _______________ # Define all colors Vue App
|         |__ ...
|
|   |__ mutaion_types/   _______________ # Include mutation types for vuex
|         |__index.js
|
|_ elements/             _______________ # Include all UI Elements Vue App
|   |__ Button/Button.js _______________ # Button UI
|   |__ Input/Input.js   _______________ # Input UI
|   |__ Link/Link.js     _______________ # Link UI
|   |__ ...
|
|- i18n/                 _______________ # Include all locales for multiple languages
|   |__ en/              _______________ # en language
|       |__ index.js     _______________ # Include all en locale
|       |__ label.js     _______________ # label locale en
|       |__ ..
|
|   |__ vi/              _______________ # vi language
|       |__ index.js     _______________ # Include all vi locale
|       |__ label.js     _______________ # label locale vi
|       |__ ..
|
|   |__ index.js         _______________ # Configuration for i18n
|
|- mixins/               _______________ # Contain all mixins
|   |__ modal.js         _______________ # modal mixin
|   |__ ...
|
|_ pages/                _______________ # Contain all screens
|   |__ Home.vue         _______________ # Home screen
|   |__ About.vue        _______________ # About screen
|   |__ ...
|
|- router/               _______________ # Define router for Vue app
|
|- store/                _______________ # State Management (vuex)
|   |__ index.js         _______________ # Define all modules state
|
|   |__ modules/         _______________ # Specific modules state
|         |__ init.js    _______________ # init state module
|         |__ ...
|
|- validations/          _______________ # Contain all validation (vuelidate)
|   |__ exValidation     _______________ # ex validation
|   |__ ...
|
|- App.vue
|
|- main.js

```
