mkdir galaxy_far_far_away
cd galaxy_far_far_away
mkdir death_star
cd death_star
touch darth_vader.txt princess_leia.txt storm_trooper.txt
cd ..
mkdir tatooine
cd tatooine
touch luke.txt ben_kenobi.txt
mkdir millenium_falcon
cd millenium_falcon
touch han_solo.txt chewbaca.txt
cd ..
mv ben_kenobi.txt obi_wan.txt
cd ..
cd death_star
cp storm_trooper.txt ../tatooine
cd ..
cd tatooine
mv luke.txt millenium_falcon
mv obi_wan millenium_falcon
mv millenium_falcon ..
mv millenium_falcon death_star
cd death_star
mv princess_leia.txt millenium_falcon
cd millenium_falcon
rm obi_wan.txt
cd ..
cd ..
mkdir yavin_4
cd death_star
mv millenium_falcon ../yavin_4
cd ..
cd yavin_4
mkdir x_wing
cd millenium_falcon
mv princess_leia.txt ..
mv luke.txt ../x_wing
cd ..
mv millenium_falcon x_wing ..
cd ..
cd death_star
mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
mv darth_vader tie_fighter_1
cp storm_trooper.txt tie_fighter_2
cp storm_trooper.txt tie_fighter_3
mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ..
cd ..
rm -r tie_fighter_2 tie_fighter_3
cd x_wing
touch the_force.txt
cd ..
rm -r death_star
mv millenium_falcon x_wing yavin_4