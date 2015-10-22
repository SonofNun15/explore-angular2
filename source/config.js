System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*",
    "app": "source"
  },

  packages: {
    "source/app": {
      "main": "app",
      "defaultExtension": "ts"
    }
  },

  meta: {
    "angular2/angular2": {
      "deps": [
        "reflect-metadata",
        "zone.js",
        "es6-shim",
        "@reactivex/rxjs"
      ]
    }
  },

  map: {
    "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.4",
    "angular2": "npm:angular2@2.0.0-alpha.44",
    "es6-shim": "github:es-shims/es6-shim@0.33.6",
  }
});
