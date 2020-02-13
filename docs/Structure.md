## Project Structure

```
./app/javascript/
|
|- dist/   __________________ # Contain project after build (folder to deploy)
|
|- docs/   __________________ # Documents
|
|- public/ __________________ # Static file / folder
|
|- src/    __________________ # Main workspace
|
|- tests/  __________________ # Testing folder
|
|- .browserlistrc  ___________ # Define target browsers supported
|- .editorconfig   ___________ # Format indent code
|- .eslintrc       ___________ # Configuration for linter
|- .stylelintrc    ___________ # Configuration for stylelint
|- babel.config.js ___________ # Configuration for babel loader
|- jest.config.js  ___________ # Configuration for jest
|- vue.config.js   ___________ # Override default vue config by vue-cli@3
```
