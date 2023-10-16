# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app listens on
EXPOSE 4000

# Define the command to run your app
CMD ["npm", "start"]
