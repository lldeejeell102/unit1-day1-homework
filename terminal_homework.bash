##Part 1
mkdir galaxy_far_far_away
cd galaxy_far_far_away
mkdir death_star
cd death_star
touch darth_vader.txt princess_leia.txt storm_trooper.txt
cd ..
ls
mkdir tatooine
cd tatooine
touch luke.txt ben_kenobi.txt
mkdir millenium_falcon
cd millenium_falcon
touch han_solo.txt chewbaca.txt
cd ..
ls

##Part 2
mv ben_kenobi.txt obi_wan.txt


##Part 3
cd ..
cp death_star/storm_trooper.txt tatooine
cd ..
cd tatooine

##Part 4
mv luke.txt millenium_falcon
mv obi_wan millenium_falcon
mv millenium_falcon ../death_star
cd ..
cd death_star
mv princess_leia.txt millenium_falcon


##Part 5
rm ../tatooine/obi_wan.txt

##Part 6
cd ..
mkdir yavin_4
mv ./death_star/millenium_falcon yavin_4
cd yavin_4
mkdir x_wing
cd millenium_falcon
mv princess_leia.txt ..
cd ..
cd ..
cd tatooine
mv luke.txt ../yavin_4/x_wing
cd ..
cd yavin_4
mv millenium_falcon x_wing ..
cd ..
cd death_star
mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
mv darth_vader tie_fighter_1
cp storm_trooper.txt tie_fighter_2
cp storm_trooper.txt tie_fighter_3
mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ..


##Part 7
cd ..
rm -r tie_fighter_2 tie_fighter_3

##Part 8
touch ./x_wing/the_force.txt
rm -r death_star
mv millenium_falcon x_wing ./yavin_4