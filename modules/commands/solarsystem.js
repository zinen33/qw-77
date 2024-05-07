const fs = require("fs");
module.exports.config = {
	name: "solarsystem",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", 
	description: "",
	commandCategory: "information",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
			api.sendMessage({
				body: "1. The Solar System - The Sun ☀\nSun (English: Sun; also known as the Sun or Japan), is the star at the center of the Solar System, accounting for about 99.86% of the Solar System's mass. The Earth and other celestial bodies such as planets, asteroids, meteorites, comets, and dust orbit the Sun. The average distance between the Sun and Earth is approximately 149.6 million kilometers (1 AU), so it takes 8 minutes and 19 seconds for sunlight to reach Earth. Over the course of a year, this varies from 147.1 million kilometers (0.9833 AU) at perihelion (about January 3), to as far as 152.1 million kilometers (1.017 AU) at aphelion. (around July 4th). Solar energy in the form of light supports most life on Earth through photosynthesis, and controls Earth's climate and weather. The Sun is composed of hydrogen (about 74% by mass, or 92% by volume), helium (about 24% by mass, 7% by volume), and small amounts of other elements, including iron, nickel, and oxygen. , silicon, sulfur, magnesium, carbon, neon, calcium, and chromium.\nThe Sun has spectral class G2V. G2 means that it has a surface temperature of approximately 5,778 K (5,505 °C) which makes it white, and usually yellow when viewed from the Earth's surface by atmospheric scattering. It is this scattering of light at the blue end of the spectrum that makes the sky blue. The solar spectrum contains ionization lines and neutral metals as well as very weak hydrogen lines. V (Roman 5) in the spectral class indicates that the Sun, like most stars, is a main sequence star. This means it generates energy by nuclear fusion of hydrogen nuclei into helium. There are over 100 million G2 class stars in our Milky Way galaxy. Once considered a small and fairly insignificant star, in fact, according to current knowledge, the Sun is brighter than 85% of the stars in the Milky Way, with the majority being red dwarfs. The Sun's hot halo is constantly open. Spanning space and creating the solar wind are streams of particles 5 times the speed of sound - extending the heliopause to a distance of approximately 100 AU. The bubble in the interstellar medium is formed by the solar wind, the heliosphere is the largest continuum in the Solar System. The Sun is currently passing through the Local Interstellar Cloud. in the low-density Local Bubble region of high-temperature diffuse gas, in the inner rim of the Milky Way's Orion Arm, between the Perseus arm and the Sagittarius arm of the galaxy. Of the 50 nearest star systems within 17 light-years from Earth, the Sun ranks 4th in mass as a quaternary star (M = +4.83), although there are some slightly different magnitude values. are given, for example 4.85 and 4.81. The Sun orbits the center of the Milky Way at a distance of approximately 24,000–26,000 light-years from the center of the Milky Way, moving generally in the direction of the constellation Cygnus and completing one revolution every 225–250 million years (one year). Galaxy). Its orbital speed is thought to be around 250 ± 20, km/s but a new estimate puts it at 251 km/s.\nBecause our Milky Way is moving relative to the Cosmic Microwave Radiation Screen (CMB) in the direction of the constellation Hydra at a speed of 550 km/s, so its speed relative to CMB is about 370 km/s in the direction of the constellation Crater or Leo.", 
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "2. Earth - Earth🌎\n\nEarth or Earth (Chinese: 地球, English: Earth), is the third planet from the Sun, and is also the largest of the terrestrial planets of the Earth. solar system in terms of radius, mass, and matter density. Earth is also known by names (blue planet), is home to millions of species of living things, including humans and so far it is the only place in the universe known to have life. This planet was formed 4.55 billion years ago and life appeared on its surface about 1 billion years ago. Since then, the Earth's biosphere, atmosphere and other inorganic conditions have changed dramatically, facilitating the proliferation of aerobic microorganisms as well as the formation of the ozone layer- This important layer of protection, along with the Earth's magnetic field, blocks harmful radiation and shelters life. The physical features of the Earth, as well as the geographical or orbital history, allowed life to exist in the past. It is estimated that the Earth can only support life for another 1.5 billion years, before the Sun's size increases (it becomes a red giant) and destroys all life. The land is divided into tectonic plates, which move slowly across the Earth's surface over millions of years. About 71% of the Earth's surface is covered by saltwater oceans, with the remainder being continents and islands. Water is an essential ingredient for life and so far humans have not found its existence on the surface of any other planet except Mars, which has frozen water at the poles. However, there is evidence to confirm that water existed on Mars in the past, and may exist to this day. The core of the still active Earth is surrounded by a thick solid mantle layer, a liquid outer core that generates a magnetic field, and a solid iron inner core. Earth interacts with other objects in space including the Sun and Moon. Currently, the time it takes the Earth to complete one revolution around the Sun is 365.2564 times the time it takes it to rotate once around its axis. This period is equal to a sidereal year or 365.2564 days in the solar calendar. The Earth's axis of rotation is tilted at an angle of 23.44° with respect to the axis perpendicular to the plane of the orbit, producing a seasonal change in the Earth's surface during a tropical year. The Moon, Earth's only natural satellite, and also the main cause of ocean tides, began orbiting the Earth 4.53 billion years ago, still keeping its original rotation. over time but is slowing down. Between 4.1 and 3.8 billion years ago, the collisions of meteorites during the (Late Strong Strike) caused significant changes in the Moon's surface.\nResources Both minerals and products of the Earth's biosphere are used to provide for human life. The population is divided into more than hundreds of independent countries, related to each other through diplomacy, tourism, trade, and military activities. Human culture has evolved to create many ways of looking at the Earth including the personification of Earth as a god, a belief in a flat Earth or the Earth as the center of the universe, and a view of the Earth. A more modern look like the Earth is a unified environment that needs direction.", 
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "3. Mars - Mars \n\nMars or Mars (Chinese: 火星, English: Mars) is the fourth planet from the Sun in the Solar System. It is often referred to by another name (Red Planet), because iron oxides are so abundant on the planet's surface that it appears to have a distinctive red color. Mars is a rocky planet with a thin atmosphere, whose surface features resemble both the craters on the Moon and the volcanoes, valleys, deserts, and ice caps at the upper poles of Mars. Earth. The rotation period and the periodicity of the seasons on Mars are quite similar to those of Earth due to the tilt of the axis of rotation. On Mars there are Mount Olympus Mons, the tallest mountain in the Solar System, and the Valles Marineris canyon, the longest and widest canyon in the Solar System. The flat northern hemisphere Borealis Basin covered up to 40% of the red planet's surface and could have been a giant impact crater in the past. Until Mariner 4 made its first flyby of Mars in In 1965, there was much speculation about the presence of liquid water on the surface of this planet. They are based on observations of cyclic variations in the brightness and darkness of places on the planet's surface, particularly at polar latitudes, which are characterized by seas and continents; The long, dark stripes were originally thought to be irrigation channels containing liquid water. These lines were later interpreted as optical illusions, although geological evidence collected by space probes suggests that Mars was likely once covered by liquid water. wide at its surface. In 2005, radar data showed the presence of large amounts of frozen water at the poles, and in mid-latitude pools. The self-propelled robot Spirit obtained samples of chemical compounds containing water molecules in March 2007. The Phoenix lander directly sampled frozen water in the shallow surface layer on July 31, 2008. Mars has two moons: Phobos and Deimos, which are small and irregular moons. These may be asteroids captured by Mars, similar to 5261 Eureka - a Mars Troy asteroid. There are currently three active orbiters orbiting Mars: the Mars Odyssey, the Mars Express, and the Mars Reconnaissance Orbiter. On its surface are the defunct Mars Exploration Rover Opportunity and its decommissioned Twin Spirit rover, along with the rovers and rovers in the rover. past—both successful and unsuccessful. The Phoenix lander completed its mission in 2008. Observations by the decommissioned NASA Mars Global Surveyor orbiter showed evidence of a shrinking and expanding displacement of the northern polar ice cap. seasons. NASA's Mars Reconnaissance Orbiter has obtained images showing the possibility of water runoff during the hottest months on Mars. Mars is easily visible from Earth with the naked eye. Its apparent magnitude of −3.0 is second only to Jupiter, Venus, Moon, and Sun.", 
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "4. Venus - Venus\n\nVenus or Venus (Chinese: 金星), also known as Taibai (太白), Taibai Venus (太白金星), is the second planet in the Solar system. , which orbits itself with a period of 224.7 Earth days. After the Moon, it is the brightest natural object in the dark sky, with an apparent magnitude of −4.6, bright enough to cast a shadow on the water's surface. Because Venus is the inner planet from Earth, it never appears in the sky too far from the Sun: the elongation peaks at 47.8°. Venus reaches its greatest brightness right near sunset or dawn, so folk also call it Evening star, when the planet appears at dusk, and Morning star, when this planet appears at dawn. Venus is classified as a terrestrial planet and is sometimes considered a (sister planet) to Earth due to its size, gravitational acceleration, and orbital parameters similar to that of Earth. However, it has been shown that it is very different from Earth in other ways. Venus is surrounded by a thick layer of highly reflective clouds containing sulfuric acid, which makes it impossible to observe its surface under visible light wavelengths. The density of air in its atmosphere is the largest of the four terrestrial planets, composed mainly of carbon dioxide. Atmospheric pressure at the planet's surface is 92 times higher than that of Earth. With an average surface temperature of 735 K (462 °C), Venus is the hottest planet in the Solar System. It does not have a carbon cycle to return carbon to the surface rocks and soils, so it is impossible for any organic organism to absorb it in the biomass. Some scientists have suggested that Venus had oceans in the past, but evaporated as the planet's temperature increased due to the uncontrolled greenhouse effect. Water may have been photocatalysed, and because there is no planetary magnetosphere, free hydrogen could escape into space by the action of the solar wind. The entire surface of Venus is an arid desert of rock and dust and there are probably still active volcanoes on the planet..", 
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "5. Jupiter - Saturn\n\nJupiter or Jupiter (Chinese: 木星) is the fifth planet from the Sun and is the largest planet in the Solar System. It is a gas giant with a mass one thousandth of the Sun but two and a half times the total mass of all the other planets in the Solar System combined. Jupiter is classified as a gas giant together with Saturn (Uranus and Neptune are classified as ice giants). These two planets are sometimes called Jupiter-type planets or outer planets. This planet was known to ancient astronomers, and is associated with myths and religious beliefs in many cultures. The Romans named the planet after the god Jupiter, the most important of the gods. The name in Chinese, Korean, Japanese and Vietnamese of this planet is based on the element (wood) in the five elements. As seen from Earth, Jupiter has an apparent magnitude of −2.94, bright enough to cast a shadow; and is the third brightest object in the night sky after the Moon and Venus. (Mars is almost as bright as Jupiter when Mars is in opposing positions in its orbit with Earth.) Jupiter contains mostly hydrogen and helium - a quarter of its mass, although only helium is present. one-tenth the number of molecules. There may be a rocky core within the planet containing heavier elements, but like other gas giants, Jupiter does not have a solid, solid surface. Because of its rapid rotation, the planet's shape is spheroidal (it bulges slightly at the equator). The outermost layer of the atmosphere shows up with multiple bands of clouds at different heights, as a result of aerodynamic turbulence and interaction with storms at the edge. A striking feature of its images is the Great Red Spot, a massive storm known to have existed since at least the 17th century when astronomers first observed it with telescopes. Surrounding Jupiter is a faint ring system as well as a strong magnetosphere. There are at least 67 natural satellites orbiting it, including the four largest, called the Galileo satellites, which were first observed by the scientist Galileo Galilei in 1610. Ganymede, the largest moon, has a large diameter. than Mercury. Several spacecraft have explored Jupiter, including Pioneer and Voyager in flybys and the Galileo spacecraft that orbited the planet. The last spacecraft to fly by Jupiter on its way to Pluto - New Horizons passed in late 2007. The spacecraft uses the assistance of Jupiter's gravity to increase its speed. Currently, NASA's Juno spacecraft has arrived on July 5, 2016. In the future, there is an ESA mission to explore the Galileo satellites in general and Europa in particular.", 
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "6. Uranus - Uranus \n\nUranus (Uranus) or Uranus (Chinese: 天王星) is the seventh planet from the Sun; is the third largest radius and fourth most massive planet in the Solar System. Uranus has a similar composition to Neptune. Both have different chemical compositions than the two larger gas giants, Jupiter and Saturn. So astronomers occasionally include these planets (ice giants). Uranus' atmosphere is similar to that of Jupiter and Saturn in basic composition such as hydrogen and helium. The other is that they contain many volatile compounds such as water, ammonia and methane along with small amounts of hydrocarbons. This planet has the coldest atmosphere of any of the planets in the Solar System, with a minimum temperature of 49 K (−224 °C). It has a complex cloud layer structure. It is likely that the lowest clouds contain mainly water while methane predominates in the upper clouds. In contrast, the interior structure of Uranus consists mainly of an ice and rock core. Like other gas giants, Uranus has a ring system, magnetosphere, and numerous natural satellites. The Uranus system has a unique structure because its axis of rotation is strongly tilted, almost parallel to the plane of the planet's orbit. So the north and south poles of this planet are located roughly at the equator compared to other planets. In 1986, images taken by the Voyager 2 spacecraft showed Uranus in visible light appearing in an almost uniform color without the bands of clouds or storms like other gas giants. Astronomers making observations from the ground have detected signs of a change in seasons and an increase in weather activity in recent years as it approaches the equinox in its orbit. Wind speeds on Uranus reach 250 meters per second (900 km/h).", 
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "7.Saturn - Jupiter\n\nSaturn (Saturn) ie Saturn (Chinese: 土星) is the sixth planet by average distance from the Sun and is the second largest planet in diameter and mass. mass, after Jupiter in the Solar System. The English name of the planet is named after the Roman god Saturn, the planet's astronomical symbol is (♄) representing the god's sickle. Saturn is a gas giant with an average radius 9 times that of Earth. Although the planet's mass is 95 times that of Earth, at 763 times more massive, Saturn's average density is only one-eighth that of Earth's. Saturn's internal structure probably consists of a core of iron, nickel, and rock (compound of silicon and oxygen), surrounded by a thick layer of metallic hydrogen, an intermediate layer between liquid hydrogen and liquid helium and the upper atmosphere. The planet's pale yellow color is due to the presence of ammonia crystals in the upper atmosphere. Electric currents within the metallic hydrogen layer are responsible for the fact that Saturn has a planetary magnetic field with a strength slightly weaker than that of Earth and one-twelfth that of Jupiter's. The planet's upper atmosphere is uniform in color and appears calm compared to Jupiter's turbulent atmosphere, although it also has strong storms. Wind speeds on Saturn can reach 1,800 km/h, faster than on Jupiter, but not as fast as those on Neptune. Saturn has a ring system consisting of nine continuous main rings and three broken arcs, they contain mainly ice particles with small amounts of dust and rock. Saturn has 82 known natural satellites; of which 53 satellites have been named. This number of satellites does not include hundreds of satellites (moonlets) inside the belt. Titan is the largest moon of Saturn and the second largest moon in the Solar System, it is also larger than Mercury and is the only natural satellite in the Solar System with a dense atmosphere.",
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "8. Mercury - Mercury\n\nMercury (Mercury) or Mercury (Chinese: 水星) is the smallest and closest planet to the Sun of the eight planets in the Solar System, with an orbital period of 88 days. Earth. Viewed from Earth, the planet appears with an orbital conjunction period of approximately 116 days, and is much faster than the other planets. This fast speed led the Romans to name the planet Mercurius, the god of quick communication and messenger. In Greek mythology the name of this god is Hermes (Ερμής). The Vietnamese name of this planet is based on the name given by the Chinese, chosen after the water element in the five elements.\nBecause the planet has almost no atmosphere to retain heat, Mercury's surface undergoes temperature fluctuations. the largest of the planets, varying from 100 K (−173 °C; −280 °F) during the day to 700 K (427 °C; 800 °F) during the day. Mercury's axis of rotation has the smallest inclination in the Solar System (about 1⁄30 degrees), but the planet has the largest orbital eccentricity. At orbital apogee, Mercury is 1.5 times farther from the Sun than the planet at perihelion. The planet's surface has many craters that look like the surface of the Moon, and the planet was no longer geologically active billions of years ago.\nOn Mercury, there is no seasonal variation in weather like in other planets because it has no significant atmospheres. The planet is tidally locked to the Sun so it rotates in a very different orbit than the other planets. Using fixed stars as its reference point, it rotates exactly three times in two orbits around the Sun. When viewed from the Sun, in a reference frame that rotates with orbital motion, the planet appears to rotate around its axis only once in two (years) Mercury. So if someone stood on Mercury they would only notice 1 day in 2 years.\nBecause Mercury's orbit lies inside Earth's (and Venus's) orbit, when viewed from Earth the planet sometimes appears up in the morning or in the evening, but never visible at midnight. Similar to Venus and the Moon, the planet also has observed phases as it moves in orbit. Mercury does not have a natural satellite. Mercury's apparent magnitude varies from −2.0 to 5.5; but because it is so close to the Sun, it is very difficult and rarely possible to observe the planet through a telescope.\nTwo spacecraft have visited Mercury: Mariner 10, which flew in 1974 and 1975; and MESSENGER, launched in 2004, orbited Mercury more than 4,000 times over four years before running out of fuel and crashing to the planet's surface on April 30, 2015.", 
			}, event.threadID, event.messageID); 
			break;
    case "9":
			api.sendMessage({
				body: "9. Neptune - Neptune\n\nNeptune or Neptune (Chinese: 海王星) is the eighth and farthest planet from the Sun in the Solar System. It is the fourth largest planet in diameter and the third largest by mass. Neptune has the highest density of any gaseous planets in the Solar System. Neptune has 17 times the mass of Earth and is slightly more massive than Uranus (approximately 15 times that of Earth). Neptune orbits the Sun at an average distance of 30.1 AU, about 30 times the Earth-Sun distance. Neptune is named after the Roman god of the sea (Neptune). It has the astronomical symbol ♆, which is a stylized representation of Neptune's trident.\nNeptune was the first planet found by theoretical calculations. Based on the unusual perturbation of the orbit of Uranus, astronomer Alexis Bouvard concluded that its orbit is perturbed due to gravitational interactions with a certain planet. On September 23, 1846, astronomer Johann Galle discovered Neptune at a position 1 degree away from Urbain Le Verrier's prediction. Shortly after, Triton was also discovered, Neptune's largest moon, while its remaining 13 moons were discovered only in the twentieth century. To date, the Voyager 2 spacecraft is the only spacecraft to pass Neptune on August 25, 1989.\nNeptune is similar in structure to Uranus, but distinct from the stellar planets. giants like Jupiter and Saturn. Neptune's atmosphere is composed primarily of hydrogen and helium, and a few hydrocarbons and perhaps nitrogen, similar to that of Jupiter or Saturn. However, its atmosphere contains a greater proportion of molecules (ice) such as water, ammonia, and methane. Thus astronomers sometimes classify Uranus and Neptune as ice giants to emphasize this difference. The interior of Neptune contains mostly ice and rock, like Uranus. The core of the planet may have a solid surface, but its temperature can be as high as thousands of degrees and the pressure is very high. Methane in the exosphere is what causes Neptune to appear blue.\nIn contrast to Uranus's dense, nearly uniform-colored atmosphere, Neptune's atmosphere has active regions. strong and conspicuous. In 1989, the Voyager 2 spacecraft, while passing Neptune, captured an image of the Great Dark Spot in the southern hemisphere about the same size as Jupiter's Great Red Spot. These weather-active regions are sustained by winds with speeds of up to 2,100 kilometers per hour, the strongest in the atmosphere of any of the planets in the Solar System. Due to its distance from the Sun, Neptune's outer atmosphere is one of the coldest in the Solar System. The temperature of the upper clouds is about 55 K (-218 °C) while the temperature at the planet's core is approximately 5,400 K (5,000 °C). Neptune has a faint and discrete system of rings (or arcs), discovered in the 1960s but confirmed only in 1989 by Voyager 2.",
			}, event.threadID, event.messageID); 
			break;
    case "10":
			api.sendMessage({
				body: "10. The Moon - The Moon 🌕\n\nIn Vietnamese, the Moon is also known by other names such as Mr. Trang, Nguyet (月), Hang Nga (or Chang'e), Thai Yin (太陰), etc.. Unlike the satellites of other planets, the Moon - a satellite of the Earth - has no other proper name. In some languages, the Earth's Moon is capitalized to distinguish it from the common noun (moon), referring to the natural satellites of other planets such as (the Moon) in English and (the moon). ).\nThe word moon is a Germanic word, related to the Latin word mensis; the word again derives from the Proto-Indo-European root me-, which also appears in measure (time), with a reference to its importance in the measurement of time in words derived from it such as Monday (Monday - in English), month (month - in English) and menstrual (monthly/menstrual). In English, the word moon only meant (Moon) until 1665, when it was extended to refer to the newly discovered natural satellites of other planets. The Moon is also sometimes referred to by its Latin name, Luna, to distinguish it from the natural satellites; The related adjective is lunar and a seleno adjective - or suffix -selene (after the Greek god Selene). The average distance from the center of the Earth to the Moon is 384,403 km, about 30 times as large. Earth diameter. The Moon's diameter is 3,474 km, 27% of the Earth's diameter. The mass of the Moon is about 2% of the mass of the Earth, and the gravitational force at the Moon's surface is 17% of the gravity on the Earth's surface. The Moon rotates around the Earth with an orbital period of 27.32 days, and periodic changes in the geometry of the Earth-Moon-Sun system are responsible for the lunar phases, which repeat after each synodal cycle is about 29.53 days.",
			}, event.threadID, event.messageID); 
						break;
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("Please enter 1 number", event.threadID, event.messageID);
            	if (choose > 12 || choose < 1) return api.sendMessage("", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	const fs = require("fs");
	const { threadID, messageID, senderID } = event;
	return api.sendMessage({ body: "Solar System" +
                "\n1. The Sun" +
                "\n2. Earth" +
                "\n3. Mars" +
                "\n4. Venus" +
                "\n5. Saturn" +
                "\n6. Uranus" +
                "\n7. Jupiter" +
                "\n8. Mecury" +
                "\n9. Neptune" +
                "\n10. The Moon" +
                "\n\nReply to the message by number to see more about the planets around us❤"
            ,attachment: fs.createReadStream(__dirname + `/noprefix/ss.gif`)}, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
}