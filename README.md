# LocoMocoSec 2020


## To run develop

In order to run develop, I've added a `docker-compose.yml` file which can be started with the command:

```
docker-compose up --build -d
```
After which, you browse to localhost:3000 to view the site.  Once development is over, you should bring down the docker container with the command:

```
docker-compose down
```


## Adding Keynotes

Please fill out the json located in `src/content/keynotes.json` and add pictures to `src/static/speakers`.

## Adding Speakers

Please fill out the json located in `src/content/speakers.json` and add pictures to `src/static/speakers`.