# Heroicons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=hi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact": "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/hi": "https://deno.land/x/react_icons_hi@1.0.0//mod.ts",
  }
}
```

## Direct import sample

`import { HiAcademicCap } from "https://deno.land/x/react_icons_hi@1.0.0/mod.ts"`

## import_map import sample

`import { HiAcademicCap } from "react-icons/hi"`

