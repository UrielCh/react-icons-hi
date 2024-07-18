# Heroicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/hi)](https://jsr.io/@preact-icons/hi)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

[See available icons here](https://react-icons.deno.dev/hi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/hi": "jsr:@preact-icons/hi@^1.0.11/mod.ts",
    "react-icons/hi/": "jsr:@preact-icons/hi@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib hi

```ts
import { HiAcademicCap } from "jsr:preact-icons/hi@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { HiAcademicCap } from "react-icons/hi"
```

## import a single icon, downloading just one icon

```ts
import { HiAcademicCap } from "react-icons/hi/HiAcademicCap.ts"
```

or using default export

```ts
import HiAcademicCap from "react-icons/hi/HiAcademicCap.ts"
```

