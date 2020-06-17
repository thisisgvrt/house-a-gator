## Team 02 | CSC 648-848 Software Engineering - Summer 2020

### Milestone 0

| **Web Domain**      | http://ec2-34-203-29-0.compute-1.amazonaws.com/About-us |
|---------------------|---------------------------------------------------------|
| **GIT HUB URL**     | https://github.com/CSC-648-SFSU/csc648-su20-team02      |
| **EC2 Instance IP** | 34.203.29.0                                             |


**Login Credentials:** Private key is located in the credentials folder

Command to SSH

`ssh -i id_rsa ec2-user@34.203.29.0`

Installation of required software

`sudo yum install docker python3-pip`
`sudo pip3 install docker-compose`

Building docker images from code

`cd /home/ec2-user/csc648-su20-team02/application/Devops`
`docker-compose build`

Bringing up the service

`cd /home/ec2-user/csc648-su20-team02/application/Devops`
`docker-compose up -d`

