## A Full Stack Single Resource App
### A catalog of Simpsons characters  

The Node server side application needs an instance of MongoDB. You will need to provide the following environment variable with access to your Mongo database:  

MONGO\_URI

for example: MONGO\_URI=mongodb://localhost

To launch the app after cloning (from the root directory):  
- cd app npm install
- npm run build
- cd ../server npm install
- npm run dev

The server will run on port 3000 unless you provide a port with the following environment variable:  

PORT  

--

You can also run the client side app on it's on port by running:  
- npm run start (from the app directory)

--

When you are up and running, you can freely add your favorite Simpsons characters. The __name__ field is required. __Description__ and __Catch Phrase__ are optional. 
