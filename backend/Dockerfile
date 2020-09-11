FROM node

RUN mkdir /backend
WORKDIR /backend

ENV PATH /backend/node_modules/.bin:$PATH
COPY package*.json /backend/

RUN npm install

COPY . /backend/

EXPOSE 8000
CMD ["npm", "start"]