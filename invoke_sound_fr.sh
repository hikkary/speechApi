# if [ -d "/menu/en" ]; then
#  echo "menu/en exist"
# else
# 	echo "menu/en created"
# 	mkdir menu/en
# fi
# if [ -d "/menu/en" ]; then
#  echo "menu/es exist"
# else
# 	echo "menu/es created"
# 	mkdir menu/es
# fi
if [ -d "sound" ]; then
 echo "sound exist"
else
	mkdir sound
 echo "menu created"
fi
if [ -d "/sound/menu" ]; then
 echo "sound/menu exist"
else
	mkdir sound/menu
	echo "sound/menu created"
fi
if [ -d "/sound/menu/fr" ]; then
 echo "/sound/menu/fr exist"
else
	echo "menu/fr created"
	mkdir sound/menu/fr
fi
# Menu
pico2wave -l fr-FR -w sound/menu/fr/0.wav "Bienvenue sur Blind Match, Pour en savoir plus sur Blind Match, appuyez sur zero";
pico2wave -l fr-FR -w sound/menu/fr/1.wav "Pour vous connecter, appuyez sur un";
pico2wave -l fr-FR -w sound/menu/fr/2.wav "Pour vous inscrire, appuyez sur deux";
pico2wave -l fr-FR -w sound/menu/fr/3.wav "Pour changer de langue, appuyez sur trois";
