FROM node:14-alpine
# ARG NODE_ENV=production

# ENV NODE_ENV=${NODE_ENV}
# ENV MONGO_URI=mongodb://localhost:270170
# ENV DATABASE_NAME=blog

# create root application folder
WORKDIR /app


# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
# COPY ./src ./src
# COPY ./prisma ./prisma

COPY --chown=node:node . .

RUN npm install -g typescript
RUN npm install -g prisma
RUN npm install -g ts-node
RUN npm install --save-dev @types/node
RUN npm install --save-dev @types/express
RUN npm i

RUN prisma generate
RUN tsc

EXPOSE 8000

CMD [ "node", "./build/src/app.js" ]
