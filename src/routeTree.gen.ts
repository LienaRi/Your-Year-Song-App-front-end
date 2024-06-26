/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as SearchIndexImport } from './routes/search.index'
import { Route as SearchYearImport } from './routes/search.$year'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchIndexRoute = SearchIndexImport.update({
  path: '/search/',
  getParentRoute: () => rootRoute,
} as any)

const SearchYearRoute = SearchYearImport.update({
  path: '/search/$year',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/search/$year': {
      id: '/search/$year'
      path: '/search/$year'
      fullPath: '/search/$year'
      preLoaderRoute: typeof SearchYearImport
      parentRoute: typeof rootRoute
    }
    '/search/': {
      id: '/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  SearchYearRoute,
  SearchIndexRoute,
})

/* prettier-ignore-end */


/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/search/$year",
        "/search/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/search/$year": {
      "filePath": "search.$year.tsx"
    },
    "/search/": {
      "filePath": "search.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */