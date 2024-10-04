# dockerDatabase

Raspberry pi setup for databases:

```
sudo docker compose up -d
```

### Container network connection.
Using containers you need to ensure network is setup in any containter that is connecting to this.

```
services:
  mongo:
    networks:
      - backend

networks:
  backend:
    driver: bridge
```

```cli
$ docker network create backend
```

too see docker networks:

```
$ docker network ls
```

## Mongodb

Connection string is 
```
mongodb://root:example@raspberrypi.local:27017
```

## Example:

example folder will have a index.js file to run with node to test the docker connections.
