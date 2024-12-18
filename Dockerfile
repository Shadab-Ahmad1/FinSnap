# Step 1: Build the React app
FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]