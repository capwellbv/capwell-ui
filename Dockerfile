FROM node:14-alpine as build-stage

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

FROM nginx:stable-alpine as production-stage

# copy build files from build stage to app dir
COPY --from=build-stage /build/docs/.vuepress/dist /usr/share/nginx/html

# replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]