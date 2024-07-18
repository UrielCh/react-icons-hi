# Heroicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/hi)](https://jsr.io/@preact-icons/hi)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

[See available icons here](https://react-icons.deno.dev/hi)

## install the module

```bash
deno add @preact-icons/hi
dnpx jsr add @preact-icons/hi
pnpm dlx jsr add @preact-icons/hi
bunx jsr add @preact-icons/hi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { HiAcademicCap } from "@preact-icons/hi"
```

## import a single icon, downloading just one icon

```ts
import { HiAcademicCap } from "react-icons/hi/HiAcademicCap"
```

or using default export

```ts
import HiAcademicCap from "react-icons/hi/HiAcademicCap"
```
