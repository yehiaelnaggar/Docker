# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build
# Make port 3000 available to the world outside this container
EXPOSE 4000

# Define environment variables


# Run the application
CMD ["npm", "run","start"]
