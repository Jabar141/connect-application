import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'connect-poc',
  entryPointUriPath,
  cloudIdentifier: 'gcp-us',
  mcApiUrl: "https://mc.europe-west1.gcp.commercetools.com/ct-training-oct21",
    headers: {
    csp: {
      "connect-src": [
        "https://api.europe-west1.gcp.commercetools.com",
        "https://auth.europe-west1.gcp.commercetools.com",
        "https://mc-api.europe-west1.gcp.commercetools.com/graphql"
      ]
    }
  },
  env: {
    development: {
      initialProjectKey: 'honda',
    },
    production: {
      applicationId: 'cm2ixwu6d000gsy1gz5h3p5jm',
      url: '${env:APPLICATION_URL}',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
