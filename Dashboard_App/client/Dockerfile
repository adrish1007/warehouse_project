# Use an official Node.js runtime as a parent image
FROM node:15.5.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app listens on (usually 80 for production)
EXPOSE 3000

# Define the command to serve your app
CMD ["npm", "start"]
