# @ksr/random-base-string

A utility function that generates a random string in a given numeric base (e.g., hexadecimal, binary) with customizable length.

## Installation

You can install it via JSR:

```bash
npx jsr install @ksr/random-base-string
```

## Usage Example

```typescript
import { randomBaseString } from '@ksr/random-base-string';

// Generate a random hex string with length 8
const hexString: string = randomBaseString(16, 8);
console.log(hexString);

// Generate a random binary string with length 12
const binaryString: string = randomBaseString(2, 12);
console.log(binaryString);

```