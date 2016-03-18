# LookLive server

# For online usage
http://localhoste:3000

## Getting started

### Step 1 - install dependencies
```
npm install
```

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```
# what i have done week 1

### HTML AND CSS REWRITEN
**From**
![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/1_original_842ms.png)
842

**To**

![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/2_css_en_html_herschreven_737ms.png)
737ms

### Add sourch set for banner image and a sprite for the menu 
**From**
737ms (see screenshot above)

**To**

![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/3_add_sourchset_and_sprite_602ms.png)
602ms

### Jquery removed add vanilla javascript 
**From**
602ms (see screenshot above)

**To**

![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/4_add_vanila_javascript_remove_jquery_%20438ms.png)
438ms

# what i have done week 2 

### Lazy loading added
**From**
602ms (see screenshot above)

**To**

![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/5_add_lazy_loading_422ms.png)
422ms

### Added Greensock animation
**From**
422ms (see screenshot above)

**To**

![alt tag](https://github.com/heleensnoeck/looklive-server/blob/student/heleen/week2/public/screenshots/6_add_greensock_%20animation.png)
426ms

### Greensock vs css animation 
Een van de meest gehoorde argumenten van css3 animatie is dat je het moet gaan gebruiken omdat het beter presteert dan welke javascript based library.  

Mensen denken dat als je je transities/animaties direct in je css stopt, de browser zich wel zorgen maakt over de berekeningen behind the scenes en ze dan doorgeeft aan de hardware(gpu) laten uitvoeren. Klinkt leuk echter is dit niet de praktijk. 

Niet alle css properties zijn hardware-accelerated maar 3d transforms en opacity zijn dat wel, maar dat hangt dan ook nog eens af van de browser die de content renderd.

Position: absolutes; bijv. trekt een element uit zijn document flow deze elementen worden niet hardware-accelerated gerenderd. 

Er zijn veel artikelen geschreven over css animatie vs Jquery maar niet over Greensock vs Jquery en css animatie. Het blijkt dat greensock 20 keer sneller is dan Jquery in verschillende browsers.  

Er zijn wel wat elementen sneller in css 3 zoals 3d transforms and opacity tweens. 

Deze informatie komt uit een artikel dat greensock geschreven heeft over css animation vs greensock animation: https://greensock.com/transitions/

Ze gaan ook dieper in over hoe je kan testen dat css toch echt langzamer is dan greensock.. 
Dit is echter een lastig punt, greensock zegt er het volgende over: Timeline recordings in Chrome Dev Tools don't show the overhead involved with CSS animation of transforms, so people often misinterpret the [lack of] data. Recordings look "clean" with CSS and "dirty" with JS which leads to faulty conclusions about performance



