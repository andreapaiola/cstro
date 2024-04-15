# cstro

CSTRO - an [Astro](https://astro.build/) CMS

A CMS for developers.

Do you want to build a static site (and **deploy everywhere**) with the power of a CMS?

**Local development** with [Astro DB](https://astro.build/db/).

`npm run dev`

or

`npx astro dev`

Build and deploy

`npm run build`

or


DB structure: [db/config.ts](db/config.ts)

CMS Admin

`/admin/content/`

In case of

> JavaScript heap out of memory

when build type [in the terminal](https://www.stevefenton.co.uk/blog/2023/07/astro-javascript-heap-out-of-memory/)

`export NODE_OPTIONS=--max_old_space_size=4096`


## TODO:
- [ ] fix build
- [x] check for duplicate alias
- [x] Add common HTML templates (patterns)
- [ ] HTML template admin in admin/html/[id]
- [ ] users admin in admin/user/[id]
- [ ] import/export DB in in admin/
- [ ] automatic CSS reload/update