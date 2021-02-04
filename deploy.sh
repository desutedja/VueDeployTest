echo "pulling image"
docker pull desutedja/docker-container
echo "stopping image"

IMAGE_NAME="img"

if docker image ls -a "$IMAGE_NAME" | grep -Fq "$IMAGE_NAME" 1>/dev/null; then
echo "stopping image"
docker stop img
fi

docker run --name img --rm -p 3000:80 desutedja/docker-container
