# Craft CMS Starter using DDEV, AlpineJs TailwindCSS and Vite

## Env Setup

-   Clone `.env.example` and rename to `.env`
-   Update `SITENAME`
-   Update `PRIMARY_SITE_URL`

## DDEV Setup

-   Run `ddev config`
-   Update `Project Name` and complete the rest of the steps
-   Start the DDEV server by running `ddev start`
-   Import db with DDEV using `ddev snapshot restore --latest`

## Install Craft

-   Delete licence.key at /config
-   Run `ddev composer install`
-   Run `ddev php craft setup` and follow steps

## Instal NPM Packages

-   Run `ddev yarn install` or `ddev npm install`

## Make an awsome website

-   Run `ddev yarn watch` or `ddev npm run watch` to work on the site locally
-   Run `ddev yarn build` or `ddev npm run build` to get production ready assets
