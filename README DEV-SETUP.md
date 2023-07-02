information: https://nodered.org/docs/creating-nodes/first-node


# Create folder outside of this project dir
mkdir data 
sudo chown 1000:1000 data
sudo chmod 777 data


**Run docker mount data only**
docker run -it -p 1880:1880 -v /Users/riekus/Documents/Docker/node-red/v1/data:/data --name mynoderedV1 nodered/node-red

**Run docker mount data and package folder mounted for development**
docker run -it -p 1880:1880 -v /Users/riekus/Documents/Docker/node-red/v1/data:/data -v/Users/riekus/Documents/Projects/Node-red-SF-Nodes/MainV1/:/data/sfnodes --name mynoderedV1 nodered/node-red

- Then inside the container run: 
cd /data && npm install /data/sfnodes/node-red-contrib-salesforce/

- OR data/package.json: 
    "dependencies": {
        "@riekusr/node-red-contrib-salesforce": "file:sfnodes/node-red-contrib-salesforce"
    }

# Remove container 
 docker container rm /mynoderedV1

