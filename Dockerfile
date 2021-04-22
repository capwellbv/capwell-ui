FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /build

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn docs:build

FROM nginx:1.14-alpine

WORKDIR /app

# copy build files from build stage to app dir
COPY --from=build-stage /build/docs/.vuepress/dist .

# replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf