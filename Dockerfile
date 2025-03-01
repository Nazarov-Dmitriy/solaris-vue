FROM node:latest as build
COPY . /usr/src
WORKDIR /usr/src
RUN npm i --force
RUN npm run build

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html/
<<<<<<< HEAD
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

=======
EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
>>>>>>> 4823b8b4f13fe82f5179143be2e111dc8a240f61
