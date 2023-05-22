var config = {
  style: "mapbox://styles/beckyyyyy/clhjys93t030w01p4ejwb4n6r",
  // style: "mapbox://styles/beckyyyyy/clhsm7h1t00yv01pf8xv2c2xp",

  accessToken:
    "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A",
  showMarkers: false,
  markerColor: "#000000",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "light",
  use3dTerrain: true, //set true for enabling 3D maps.
  auto: false,
  title: "The Silk Road",
  subtitle: "History and Mystery that were NEVER TOLD BEFORE...",
  byline: "Virtual Adventure along The Silk Road",
  footer:
    '<img src="../imgs/buddha-2.png" alt="buddha" width="35" height="40"/><br>Source: <a href="https://connorrothschild.github.io" target="_blank">Mapping Missing Migrants</a> <a href="https://map.huttrip.com" target="_blank">huttrip map</a> <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2021/07/20/11A_MapboxStorytelling.html" target="_blank">Points Unknown</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "first-geoglyth",
      alignment: "left",
      hidden: false,
      // title: "The Silk Road",
      // image: "../imgs/silk-pic-5.jpeg",
      description:
        '<h1>The Silk Road</h1><img src="../imgs/silk-pic-5.jpeg"/><span style="font-size:13px; font-weight:regular"><i>The Silk Road between Asia and the Mediterranean was maintained for over 2,000 years, as the longest network of routes in the premodern world.</i></span><br><br><hr><br><span style="font-size:20px">What Was the Silk Road & What Was Traded on It?</span><br><br>The Silk Road has been a link between China, Central Asia, and Europe for two thousand years. Its name evokes fascinating images of oases in the desert sand, of merchants trading in fabrics and spices, and of wondrous journeys across dangerous lands. <br> <br>The Silk Road shaped history not only as a trade route that stretched over the vastness of Eurasia, but also through the political and social upheaval that came along it. This legendary ancient trade route linked Asia and Europe across the vast landmass of Central Asia. Travelers and traders came from areas such as present-day China, Iran, Turkey, Greece, and Italy, all of which were part of the Silk Road. The roots of the Silk Road go back to the Western Han Dynasty (202 BCE – 9 CE). However, it was during the Tang Dynasty (618 – 907 CE) that the Silk Road saw the greatest international activity.</p>',
      location: {
        center: [59.458008, 22.642404],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },

        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
        // {
        //   layer: "silkroad-layer",
        //   opacity: 1,
        //   duration: 5000,
        // },
      ],
      onChapterExit: [
        {
          layer: "silkroad-layer",
          opacity: 0,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "legend-geoglyth",
      alignment: "left",
      hidden: false,
      // title: "The Silk Road Legend",
      // image: "../imgs/legend.png",
      description:
        '<h1><i>The Silk Road</i> Map Legend</h1><img src="../imgs/legend.png"/>',
      location: {
        center: [59.458008, 22.642404],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "railstation-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "basin",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 1,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "railstation-layer",
        //   opacity: 0,
        //   // duration: 5000,
        // },
      ],
    },
    {
      id: "second-geoglyth",
      alignment: "right",
      hidden: false,
      // title: "Start of the Silk Road",
      // image: "../imgs/silk-pic-3.webp",
      description:
        "<h1>Start of the Silk Road</h1><img src='../imgs/silk-pic-3.webp'/><br><br><span style = 'font-size:13px;font-weight: regular'>The ancient city of Chang’an, near present-day Xi’an in Shaanxi Province, is regarded as the eastern starting point of the Silk Road.Due to geographic and cultural factors, the Silk Road can be divided into northern and southern branches. The Northern Silk Road is the more famous of the two.</span><br><hr>From the starting point of Chang’an (modern Xi’an, China), travelers would go west through the Gansu Corridor to Dunhuang. There, the caravans might go northwards into the Mongolian Plateau, to the great Mongol city of Karakorum, or they would cross the Taklamakan Desert, moving from one small oasis town to the next westwards into Central Asia and on to the Mediterranean Sea.",
      location: {
        center: [108.92251066737037, 36.13047772504527],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "startend-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },

        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "startend-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "third-geoglyth",
      alignment: "left",
      hidden: false,
      // title: "End of the Silk Road",
      // image: "../imgs/silk-pic-4.jpeg",
      description:
        "<h1>End of the Silk Road</h1><img src='../imgs/silk-pic-4.jpeg'/><br><br>The Southern Silk Road (also known as the Tea-Horse Road) extended from the city of Chengdu in Sichuan Province, China, south through Yunnan into India and the Indochina Peninsula, and extended westwards into Tibet. This was an important route for the tea trade throughout South China and Southeast Asia but also contributed to the spread of religions like Taoism and Buddhism across the region.  These routes were extremely dangerous. Travelers would have to navigate wars, bandits, earthquakes, and sandstorms.There's also something peculiar about these two places: unknown causes of death. <br><hr>The Chinese monk Faxian, having returned from his adventurous journey to India, reported as early as 414 CE of the agonizing and inhospitable challenges of the Taklamakan Desert:<br> <p><i>“In the desert were numerous evil spirits and scorching winds, causing death to anyone who would meet them. Above there were no birds, while on the ground there were no animals. One looked as far as one could in all directions for a path to cross, but there was none to choose. Only the dried bones of the dead served as signposts.”</i></p>",
      location: {
        center: [27.178062693593745, 36.25244063388777],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "startend-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },

        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "startend-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "fourth-geoglyth",
      alignment: "right",
      hidden: false,
      // title: "Cities along The Silk Road",
      // image: "../imgs/silk-pic-7.jpeg",
      description:
        "<h1>Cities along The Silk Road</h1><img src='../imgs/silk-pic-7.jpeg'/><p>Globalisation is not a new phenomenon. From the time of the Roman Empire, east and west have been connected by a web of trade routes known as the Silk Road.Stretching across the centre of Eurasia, from the Black Sea to the Himalayas, the Silk Road was the major artery of world trade, along which flowed silks and spices, gold and jade, teachings and technologies.</p><hr>Cities on this route flourished from the extraordinary wealth of the merchants that passed through their caravanserais. Their magnificent ruins remind us of the vital importance of this route throughout history.<br><br><i>Here are 10 key cities along the Silk Road:</i><br> <span style = 'font-size:16px:;font-weight:thin; color: white'>Xi’an, China | Merv, Turkmenistan | Samarkand, Uzbekistan | Balkh, Afghanistan | Constantinople, Turkey | Ctesiphon, Iraq | Taxila, Pakistan | Damascus, Syria | Rey, Iran | Dunhuang, China | Loulan Kingdom</span>",
      location: {
        center: [70.799441, 33.736965],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cities-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "cities-layer",
          opacity: 0,
          // duration: 5000,
        },
      ],
    },
    {
      id: "fifth-geoglyth",
      alignment: "left",
      hidden: false,
      // title: "World Cultural Heritage along the Silk Roads",
      // image: "../imgs/silk-pic-8.png",
      description:
        '<h1>World Cultural Heritage along the Silk Roads</h1><img src="../imgs/silk-pic-8.png"/><span style="font-size:15px; font-weight:regular"><i>The Silk Roads online platform presents and promotes World Cultural Heritage Sites that have been inscribed on the UNESCO list of World Heritage.</i></span><br><br><span style="font-size:18px">Total of 33 heritage on the <i>The Silk Road<i>:</span><br></p><span style = "color:white;">&#9679;</span>  <a target = "_blank" href="https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/hatra">Hatra, Iraq</a><br><span style = "color:white;">&#9679;</span>  <a target = "_blank" href="https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/ancient-city-aleppo">Ancient City of Aleppo, Syrian Arb Republic</a><br>  <span style = "color:white;">&#9679;</span>  <a target = "_blank" href="https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/archaeological-remains-bamiyan-valley">Archaeological Remains of the Bamiyan Valley, Afghanistan</a><br><span style = "color:white;">&#9679;</span>  <a target = "_blank" href="https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/bam-and-its-cultural-landscape">Bam and its Cultural Landscape, Iran (Islamic Republic of)</a><br><span style = "color:white;">&#9679;</span>  <a target = "_blank" href="https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/borobudur-temple-compounds">Borobudur Temple Compounds,Indonesia</a>',

      location: {
        center: [42.73460623684538, 35.57625278402669],
        zoom: 3,
        pitch: 80,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "historic-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "historic-layer",
          opacity: 0,
        },
      ],
    },

    {
      id: "sixth-geoglyth",
      alignment: "right",
      hidden: false,
      // title: "Main RailStations along The Silk Road",
      // image: "../imgs/silk-pic-6.jpeg",
      description:
        "<h2>The Old Silk Road Stations</h2><img src='../imgs/silk-pic-6.jpeg'/><br>The Silk Road began in north-central China in Xi'an (in modern Shaanxi province). A caravan track stretched west along the Great Wall of China, across the Pamirs, through Afghanistan, and into the Levant and Anatolia. Its length was about 4,000 miles (more than 6,400 km).</span><br><br> <h2>The New Silk Road Stations</h2><img src='../imgs/silk-pic-10.jpeg'/> <i>Khorgos Gateway</i> has become one of the most advanced and impactful projects of the New Silk Road so far, and is now on the verge of developing into a the junction between China, Russia, South Asia, Iran, the Caucasus, and Europe that it was intended to become back when it was nothing more than a dirt lot and a dream.",
      location: {
        center: [76.9500661, 43.3409728],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "railstation-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
      ],
    },
    {
      id: "seventh-geoglyth",
      alignment: "left",
      hidden: false,
      // title: "Tarim Basin and the mysterious Loulan Kingdom",
      // image: "../imgs/silk-pic-11.jpeg",
      description:
        "<h1>Tarim Basin and the <i>mysterious</i> Loulan Kingdom</h1><img src='../imgs/silk-pic-11.jpeg'/>The Tarim Basin is located south of the Tian Shan Mountians in the Western Regions. Many different peoples lived and passed through the Tarim Basin, before the Silk Road and after its height. The lifestyles of the people living in the Tarim Basin varied over time and across the region.<br>Although most recorded deaths share similar causes, such as drowning, these deaths in Texas and Arizona follow different paths.<br><br><hr><br> <img src='../imgs/silk-pic-12.png'/><img src='../imgs/silk-pic-13.png'/><br><br><hr><h2>What is the mystery of the ancient Loulan?</h2><span style = 'color:white;'>&#9679;</span> Loulan city suddenly disappeared from the area in the third century, leaving a wealth of enigmas for later generations.  <br><span style = 'color:white;'>&#9679;</span> No traces of Loulan had been found until 100 years ago when Swedish explorer Sven Hedin accidentally discovered the ruins of the ancient city buried in desert.<br><span style = 'color:white;'>&#9679;</span> The ruins of Loulan are near the now-desiccated Lop Nur in the Bayingolin Mongol Autonomous Prefecture, Xinjiang and they are now completely surrounded by desert. <br><span style = 'color:white;'>&#9679;</span> Loulan is the fabled city near the vanished Lop Nor (“Lop Lake”) that lay in the northeastern corner of the Tarim Basin.",
      location: {
        center: [78.0815621513554, 39.02898595955756],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "basin",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "railstation-layer",
          opacity: 0,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "basin",
          opacity: 0,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 0,
          // duration: 5000,
        },
      ],
    },
    {
      id: "eighth-geoglyth",
      alignment: "full",
      hidden: false,
      // title: "Main RailStations along The Silk Road",
      // image: "../imgs/silk-pic-6.jpeg",
      description:
        "<h2>What is the New Silk Road?</h2>The New Silk Road project began in 2013 when Chinese President Xi Jinping announced his “Belt and Road Initiative”. As the English name “One Belt One Road” indicates, this New Silk Road is actually two planned trade routes: a maritime one from China via South Asia to Africa (the Maritime Silk Road) and a northern land route (the Silk Road Economic Belt) from China through Central Asia, Iran, Turkey and Moscow to Europe.<br><br>In the tradition of the ancient Silk Road, China would like to connect Asia and Europe with roads, rail networks, shipping lines, ports, industrial corridors, and communication networks. Securing the large oil, precious metal, and gas reserves in Central Asia is another major motive that not only drives China, but also the USA with its “Silk Road Strategy Act” and the EU, which has been trying to expand the infrastructure between Europe and Central Asia since 1993 with their own projects.</span><br><br><img src='../imgs/new.jpeg'/><i>The New Silk Road</i><br><br> <h2>Modern Cities on the Silk Road</h2>In recent years, China has reactivated the Silk Road of ancient times with an ambitious development program known as “One Belt One Road” or the “Belt and Road Initiative”. This is a huge undertaking: two trade routes are being created to better connect China with other countries, one by land and one by sea. The routes lead through more than 60 countries in Asia, Europe, and Africa. Some of the cities that are experiencing major change along the Silk Road in modern times include New Lanzhou (China), Wuwei (China), Khorgas (China), Aktau (Kazakhstan), Gwadar (Pakistan), Anaklia (Georgia), Istanbul (Turkey), Duisburg (Germany) and Rotterdam (Netherlands).<br><br><img src='../imgs/new-cities.webp'/><a target = '_blank' href = 'https://www.forbes.com/sites/wadeshepard/2016/09/20/7-new-cities-that-are-rising-along-the-new-silk-road/?sh=4046e3201300'>7 New Cities Rising Along The New Silk Road</a>",
      location: {
        center: [59.458008, 22.642404],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "railstation-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "basin",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 1,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "railstation-layer",
        //   opacity: 0,
        //   // duration: 5000,
        // },
      ],
    },
    {
      id: "eighth-geoglyth",
      alignment: "right",
      hidden: false,
      description:
        "<h1>Want to explore <i>The Silk Road</i> ?</h1><h2>Enjoy the most authentic experience that you would never experience in your life.</h2> <a href='https://www.smithsonianjourneys.org/tours/silk-road/expert/' target = '_blank' ><button class='explore'><p> Book here!</p></button>",
      location: {
        center: [59.458008, 22.642404],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "railstation-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "cities-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "startend-layer",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "silkroad-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "historic-layer",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "basin",
          opacity: 1,
          // duration: 5000,
        },
        {
          layer: "lake",
          opacity: 1,
          // duration: 5000,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "railstation-layer",
        //   opacity: 0,
        //   // duration: 5000,
        // },
      ],
    },
  ],
};
