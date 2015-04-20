#!/bin/bash

# A basic alias script for pacman, to make it not suck so much to use

pac_update() {
	pacman -Syy
}

pac_upgrade() {
	pacman -Syyu
}

pac_search() {
	pacman -Ss $1
}

pac_install() {
	pacman -S $1
}

pac_help() {
	printf "Pac is a script that aliases some pacman commands\n"
	printf "to work similar to aptitude.\n"
	printf "\tpac update\n"
	printf "\tpac upgrade\n"
	printf "\tpac search / pac s [queries]\n"
	printf "\tpac install / pac i [targets]\n"
}

case $1 in 
	"update")
	pac_update;;
	"upgrade")
	pac_upgrade;;
	"search")
	qs=${@#search};
	pac_search "$qs";;
	"s")
	qs=${@#s};
	pac_search "$qs";;
	"install")
	targs=${@#install};
	pac_install "$targs";;
	"i")
	targs=${@#i};
	pac_install "$targs";;
	*)
	pac_help;;
esac
