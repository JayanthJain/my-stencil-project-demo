import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

// import './global.scss';
// import './src/global.scss';

export const config: Config = {
  namespace: 'stencil-demo',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      //  copy: [
      //   { src: 'global.scss', dest: 'global.scss' }
      // ]
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-demo',
      outputType: 'component',
      directivesProxyFile: '../angular-demo/src/app/stencil-generated/components.ts',
      directivesArrayFile: '../angular-demo/src/app/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      outDir: '../react-library/lib/components/stencil-generated/',
    }),
  ],
  globalStyle: 'src/global.scss',
  testing: {
    browserHeadless: "shell",
  },
};
