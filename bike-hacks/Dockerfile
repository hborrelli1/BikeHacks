FROM node:12
WORKDIR /bike-hacks
# ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
