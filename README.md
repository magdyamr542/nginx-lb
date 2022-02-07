## Nginx Load balancing test
- run `docker-compose up` and go to `http:localhost:8080`
- you will see the ip of the server. refresh the page and you should see a different ip because nginx is balancing the load on the 3 ndoe replicas.

## Nginx ssl
- The port `8081` can be used for https traffic. you will need to make your browser accept self signed certificates for this.
