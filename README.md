## Nginx Load balancing test
- run `docker-compose up` and go to `http:localhost:8080`
- you will see the ip of the server. refresh the page and you should see a different ip because nginx is balancing the load on the 3 ndoe replicas.
