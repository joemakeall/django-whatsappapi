#!/usr/bin/env bash

# Atualiza a lista de pacotes disponíveis
sudo apt update

# Instala Python3 e pip
sudo apt install -y python3-pip

# Instala Nginx
sudo apt install -y nginx

# Instala Virtualenv
sudo apt install -y virtualenv

# Instala pkg-config (necessário para compilar certos pacotes)
sudo apt install -y pkg-config

# Instala dependências para compilar mysqlclient
sudo apt install -y python3-dev default-libmysqlclient-dev build-essential
