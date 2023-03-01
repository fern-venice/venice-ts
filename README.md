![venice image](./static/hero.png)

# Venice Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/{company})](https://www.npmjs.com/package/@fern-api/{company})

The Venice Node.js library provides access to the Venice API from JavaScript/TypeScript.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](TODO)

```typescript
import { VeniceApiClient } from '@fern-api/venice';

void main();

async function main() {
  const client = new VeniceApiClient({
    environment: 'VeniceApiEnvironment',
  });

  const response = await client.transaction.create({
       // add code here
    },
  });
  console.log('Received response from Venice!', response);
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
