# docker-practice

learning docker setup

1. set up a simple express server
2. install dependencies FIRST, you will want them to be installed BEFORE the docker image is created.
3. Once you want to create your image you need to build it using ``` docker build -t username/titleOfImage:versionNumber . ```< the . is the location of the image, so if you are working in your directory . will create from where you are, otherwise put the path
4. once your Image has been created and you are given an id, you can run ``` docker run id ```.
5. In this case if you are using this repo for learning, you should see ``` app listening on 8080 ```
6. However, this is only working locally so we will not be able to go to our local host and see any text. To do this you would need to use PORT FORWARDING flag such as ``` docker run -p port#ofChoice:8080 id ```. This should allow your container to run on the port#ofChoice to view in your browser.
7. We also have the option to create volumes to run multiple containers using ``` docker volume create nameOfVolume ```
8. Still more to learn...
