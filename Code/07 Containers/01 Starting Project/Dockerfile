# Use official Node image (https://hub.docker.com/_/node), instead of using some OS, and installing afterwards the dependencies
FROM node:16

# Add the environment variable key value
ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME gha-demo1
ENV MONGODB_CLUSTER_ADDRESS cluster0.ntrwp.mongodb.net
ENV MONGODB_USERNAME maximilian
ENV MONGODB_PASSWORD eI3R3UfNlJgWJe17

# Indicate working directory
WORKDIR /app

# ADD or COPY have got similar functionality
# COPY SourcePath DestinyPath
# .         It's in the WORKDIR
COPY package*.json .

# Run the command in the file system
RUN npm install

# COPY SourcePath DestinyPath
COPY . .

# Command what it's going to be executed at start the container
CMD ["npm", "start"]
# 1) If there is no ENTRYPOINT defined --> Command what it's going to be executed at start the container
# 1) If there is ENTRYPOINT defined --> Arguments of the start up