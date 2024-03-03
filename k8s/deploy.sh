#!/bin/bash

DOCKER_REGISTRY_DOMAIN=docker.io
DOCKER_REGISTRY=sora11023539/microservice
SERVICE_NAMES=(frontend book_api tweet_api)

USER_NAME=$1
PASSWORD=$2

docker login -u ${USER_NAME} -p ${PASSWORD} ${DOCKER_REGISTRY_DOMAIN}

for service in ${SERVICE_NAMES[@]}; do
  cd ../${service}
  docker build --platform linux/amd64 -t ${DOCKER_REGISTRY}:${service} .
  docker push ${DOCKER_REGISTRY}:${service}
done