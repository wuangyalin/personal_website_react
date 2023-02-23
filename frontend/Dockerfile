FROM node:14.17.3 AS builder

RUN mkdir /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH
COPY package*.json /frontend/

RUN npm install

COPY . /frontend/

RUN npm run build

FROM nginx
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /frontend/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]