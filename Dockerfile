#FROM node:latest as build-env
#WORKDIR /app
#
#ADD package.json .
#
#RUN npm install
#
#ADD . .

#RUN npm run build:prod
#
#FROM nginx:alpine
#
#COPY --from=build-env /app/dist/codeli-studio/browser /usr/share/nginx/html
#COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
#
#EXPOSE 8080

# use a node image as the base image and name it 'build' for
# later reference
FROM node:latest as build
#Set working directory
WORKDIR /app
#Copy current directory contents into the container at app/
COPY . .
#Install dependencies
RUN npm ci
#BUILD
RUN npm run build:prod

# Use the latest version of the official Nginx image as the base image
FROM nginx:latest
#Copy custom ngInx configuration file to the ocntainer in the default
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/codeli-studio/browser /usr/share/nginx/html

EXPOSE 8080
