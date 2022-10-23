# StudioUnivers

E-commerce website for the company StudioUnivers

![Illustration](https://user-images.githubusercontent.com/38500427/177781824-9f78018b-3458-4d9f-b047-9e79926a178b.png)

## Techno used

### Frontend

<a href="https://nextjs.org/" target="_blank" style="margin-right:10px"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40"/></a>
<a href="https://tailwindcss.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" width="40" height="40"/></a>

### Backend

<a href="https://nestjs.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/></a>
<a href="https://typeorm.io/" target="_blank"> <img src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4" alt="typeorm" width="40" height="40"/></a>
<a href="https://www.postgresql.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40" /></a>

### Others

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
<a href="https://www.docker.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/v2.12.0/icons/docker/docker-original.svg" alt="docker" width="40" height="40" /></a>
<a href="https://yarnpkg.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg" alt="yarn" width="40" height="40"/></a>
<a href="https://eslint.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="eslint" width="40" height="40"/></a>
<a href="https://stripe.com/" target="_blank"> <img src="https://logodownload.org/wp-content/uploads/2017/06/stripe-logo.png" alt="stripe" width="100" height="40"/></a>

#### Development

You can run this project localy using two containers :

##### Postgres :

> docker run --name studiodb -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=studiouniversbd -d postgres

##### Minio :

> docker run -p 9000:9000 -d -p 9001:9001 -e "MINIO_ROOT_USER=studiounivers" -e "MINIO_ROOT_PASSWORD=studiounivers" quay.io/minio/minio server /data --console-address ":9001"

##### Frontend & Backend :

> yarn dev
