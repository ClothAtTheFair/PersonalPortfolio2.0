FROM node:latest
ADD . /home/node/

WORKDIR /home/node

RUN npm install

# If for production 
# RUN npm prune --production
# Better way is to pass a ENV which switches from DEV to Prod