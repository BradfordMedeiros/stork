

FROM node:9.2.0

WORKDIR /storkd
ADD . .

# Install project npm dependencies
RUN npm install

# port to call into stork
EXPOSE 8000

CMD ["node","index.js"]


