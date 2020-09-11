FROM node

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

EXPOSE 8000
CMD ["npm", "start"]