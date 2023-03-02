<!--* PACKAGE.JSON *-->
scripts: 
    <!-- development mode (+devServer) -->
    1. "dev": "webpack serve --mode=development"; 
    <!-- production mode -->
    2. "prod": "webpack --mode=production";

<!--* WEBPACK CONFIG *-->
    all webpack configurations with loaders and plugins for usage in project;

<!--* NODE_MODULES *-->
    all installed packages for usage in project (added in .gitignore!);

<!--* START POINT *-->
    index.js (import from module-1.js and common.scss for example);

<!--* EXIT POINT (production build) *-->
    my-bundle.js;

<!--* OTHER FILES *-->
    - index.html;
    - common.scss (export to index.js for example);
    - module-1.js (export to index.js for example);

<!--* ALL DEPENDENCIES *-->
    1. webpack (+config);
    2. dev-server;
    3. css-loader;
    4. style-loader;
    5. babel (+config);
    6. html-webpack-plugin (+minimizer?);
    7. mini-css-extract-plugin;


<!-- luxplanjay / webpack-starter-kit -->
https://github.com/luxplanjay/webpack-starter-kit