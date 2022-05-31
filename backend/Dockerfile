FROM node:alpine

ENV FORCE_COLOR=1
ENV NODE_ENV=production

WORKDIR /home/agence
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY . .

RUN yarn build

EXPOSE 3001
USER node

CMD ["yarn", "start:prod"]