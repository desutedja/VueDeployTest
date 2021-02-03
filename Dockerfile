FROM node:14.15.4-alpine3.12 as builder

# Create app directory
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available) to /usr/src/app
COPY package*.json ./

# Install app dependencies (create node_modules)
RUN npm install

# FIX some issue
RUN npm audit fix

# Copy rest of the files (eg: src, build, etc)
COPY . .

# Build the project
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# Stage - Production
#FROM nginx:1.17-alpine

#RUN rm -rf /usr/share/nginx/html/*

#COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

#80 is Default Port Nginx for http request
#If you want to change this port, you must set on nginx.conf or /sites_available/default (this depend on your nginx structure)
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
