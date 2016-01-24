#!/usr/bin/env bash

sudo add-apt-repository ppa:chris-lea/node.js
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y git-core
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

sudo apt-get update

# install npm
sudo apt-get install -g npm

# install npm modules
sudo npm install -g npm
sudo npm install -g bower
sudo npm install -g gulp
sudo npm install -g grunt-cli
sudo npm install -g express
sudo npm install -g yo
sudo npm install -g jspm

#initialize demo project
cd demo
npm install
