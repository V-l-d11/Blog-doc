# Blog-documentation

- Documentation
- [Nx Dev Tutorial](https://nx.dev/tutorials/integrated-repo-tutorial)

## Create Project

- Create NxAngularWorkspace & Create first project [npx create-nx-workspace@latest ... --preset=angular]

## Requirements

- Node: v20.9,0
- npm: 10.2.4

## Diagram of the dependencies

- Run `npx nx graph --watch --groupByFolder` to see a diagram of the dependencies of your projects.
- Run `npx nx graph <project-name>`

## Linter

- Run `npm run linter-check` to run linting check for whole project. Code should be formatter with Prettier (if using VSC)
- Run `npm install --global prettier` to install prettier plugin.

## Generating new app

Generate libraries and plug them into main app - `npx nx g @nrwl/angular:lib vou-shell --directory=vou --routing=true --lazy --parent-module=apps/vou/src/app/app.module.ts --tags=scope:vou,type:shell`

- `npx nx g @nrwl/angular:lib vou-auth --directory=vou --tags=scope:vou,type:auth`
- `npx nx g @nrwl/angular:lib vou-const --directory=vou --tags=scope:vou,type:const`
- `npx nx g @nrwl/angular:lib vou-store --directory=vou --tags=scope:vou,type:store`
- `npx nx g @nrwl/angular:lib vou-ui-header --directory=vou --tags=scope:vou,type:ui`
- `npx nx g @nrwl/angular:lib vou-ui-app-version --directory=vou --tags=scope:vou,type:ui`
- `npx nx g @nrwl/angular:lib vou-ui-sidenav --directory=vou --tags=scope:vou,type:ui`
- `npx nx g @nrwl/angular:lib vou-utils --directory=vou --tags=scope:vou,type:utils`

## Generating libs

- Shell - defines routing for app or features
- `npx nx g @nrwl/angular:lib solar-customer-shell-test --directory=solar-customer --tags=scope:solar-customer,type:shell --dryRun`

- Feature - defines library which provides a feature for app
- `npx nx g @nrwl/angular:lib solar-customer-feature-home-page --directory=solar-customer --tags=scope:solar-customer,type:feature --dryRun`

- Ui - components which reads data and provides event emitters
- `npx nx g @nrwl/angular:lib shared-ui --directory=shared --tags=scope:shared,type:ui --dryRun`

- Model - lib for interfaces, enums ect.
- `npx nx g @nrwl/angular:lib shared-model --directory=shared --tags=scope:shared,type:model --dryRun`

Assets - lib for translation, jpgs, svgs ect.

- `npx nx g @nrwl/angular:lib shared-assets --directory=shared --tags=scope:shared,type:assets --dryRun`

- Api - lib for api services and models.
- `npx nx g @nrwl/angular:lib openapi-solar --directory=openapi --tags=scope:openapi,type:api --dryRun`

- Store - lib for redux for app.
- `npx nx g @nrwl/angular:lib solar-customer-store --directory=solar-customer --tags=scope:solar-customer,type:store --dryRun`

- Utils - lib for utils services and components.
- `npx nx g @nrwl/angular:lib shared-utils --directory=shared --tags=scope:shared,type:utils --dryRun`

## Ngx-translate

Documentation: http://www.ngx-translate.com/

Supported languages:

- PL
- ENG

## Generate lib example with NgModule

- `npx nx generate @nrwl/angular:library --name=shared-assets --directory=libs/shared/shared-assets --tags=scope:shared,type:assets --standalone=false`

- `npx nx generate @nrwl/angular:library --name=shared-assets --directory=libs/shared/shared-model --tags=scope:shared,type:model --standalone=false`

- `npx nx generate @nrwl/angular:library --name=shared-utils --directory=libs/shared/shared-utils --tags=scope:shared,type:utils`

- `npx nx generate @nrwl/angular:library --name=features-store --directory=libs/data-acess/open-api --tags=scope:data-acess,type:api --standalone=false`

## Generate components into libs

- `npx nx g @nrwl/angular:component ui-tooltip --standalone=false --module=shared.module.ts`
- `npx nx g @nrwl/angular:component muddy-code-header-feature --standalone=false --module=muddy-code-feature-header.module.ts`

## Delete Lib from workspace

- `npx nx g @nx/workspace:remove ...`

## Config Angular Material lib on project

- `npx nx g @angular/material:ng-add --project=project-name-example`

#### Folders/Libs structure

```
├── apps
│   ├── app1
│   ├── app2
├── libs
│   ├──features
│   │   ├──
│   │   ├──
│   │   ├──
│   ├── data-acess
│   │   ├── data-access
│   │   ├── open-api
│   ├── shared
│   │   ├── shared-assets
│   │   ├── shared-auth
│   │   ├── shared-common-types
│   │   ├── shred-utils
│   │   ├── shred-model
│   │   ├── shared-ui
│   │   |   ├── layouts
│   │   |   ├── components
│   ├── shells
│   │   ├──
│   │   ├──
│   │   ├──
|   ├── store
|   |   ├──

```
