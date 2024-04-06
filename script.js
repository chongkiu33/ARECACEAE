
var container = document.getElementById("container");
container.style.transition = "transform 1s";
var bigcontainer = document.getElementById("bigcontainer");

var transSign = 1;

var redDot = document.getElementById("reddot");

redDot.addEventListener("click",function(event){
    if(transSign){
        redDot.style.backgroundColor = "blue";
        transSign=0;
        redDot.innerHTML = "Frozen";
        container.style.transition = "transform 1s";
    }else{
        redDot.style.backgroundColor = "red";
        transSign=1;
        redDot.innerHTML = "Rotate";
        container.style.transition = "none";
    }
    
})


document.addEventListener('mousemove',function(event){
   console.log(document.documentElement.scrollTop);
    var mouseX = event.clientX;
    var deg = (mouseX/document.body.clientWidth)*360;
    if(transSign&&navigationOn){
        container.style.transition = "none";
        container.style.transform = "rotateY("+ deg+ "deg)" +" translateX(25vw) translateY(10vw)";
    };
    
});

function createCube(a,b,c,yHeigh,ydeg,content,captionName,idName){
    
    var cube = document.createElement("div");
    cube.setAttribute("class","box");
    if(idName){
        cube.id=idName;
    }


    var caption = document.createElement("div");
    caption.setAttribute("class","aFront");
    caption.style.display = "flex";

    caption.innerHTML = "<div class='triangle-right'></div><div class='rectangle'> "+ captionName+"</div>";

    // caption.style.transform = "translateY(-12vh) translateX(-22vw)";
    cube.appendChild(caption);

    //up
    var cubeUp = document.createElement("div");
    cubeUp.style.width = a + "vw";
    cubeUp.style.height = c + "vw";
    cubeUp.style.transform = "translateY(" + ( - 0.5*c) + "vw)" + "translateZ(" + 0.5*c + "vw)" + "rotateX(90deg)" +"translateX(" +(-0.5*a) + "vw)" ;
    cubeUp.style.background = "#EDEDED";
    cube.appendChild(cubeUp);


    //down
    var cubeDown = document.createElement("div");
    cubeDown.style.width = a + "vw";
    cubeDown.style.height = c + "vw";
    cubeDown.style.transform = "translateY(" + (b - 0.5*c) + "vw)" + "translateZ(" + 0.5*c + "vw)" + "rotateX(90deg)" +"translateX(" + (-0.5*a)  + "vw)" ;
    cubeDown.style.background = "white";
    cube.appendChild(cubeDown);


    //left
    var cubeLeft = document.createElement("div");
    cubeLeft.style.width = c + "vw";
    cubeLeft.style.height = b + "vw";
    cubeLeft.style.transform = "translateX(" + (-0.5*a - 0.5*c) + "vw)" + "translateZ(" + 0.5*c + "vw)" + "rotateY(90deg)";
    cubeLeft.style.background = "grey";
    cube.appendChild(cubeLeft);


    //right
    var cubeRight = document.createElement("div");
    cubeRight.style.width = c + "vw";
    cubeRight.style.height = b + "vw";
    cubeRight.style.transform = "translateX(" + ( 0.5*a - 0.5*c) + "vw)" + "translateZ(" + 0.5*c + "vw)" + "rotateY(90deg)";
    cubeRight.style.background = "#ADACAD";
    cube.appendChild(cubeRight);

    //front
    var cubeFront = document.createElement("div");
    cubeFront.style.width = a + "vw";
    cubeFront.style.height = b + "vw";
    cubeFront.style.transform = "translateZ(" + c + "vw)" +"translateX(" + (-0.5*a)  + "vw)" ;
    cubeFront.style.background = "white";
    cubeFront.innerHTML = content;
    cube.appendChild(cubeFront);


    //behind
    var cubeBehind = document.createElement("div");
    cubeBehind.style.width = a + "vw";
    cubeBehind.style.height = b + "vw";
    cubeBehind.style.transform = "translateZ(" + "0"+ "vw)" +"translateX(" + (-0.5*a) + "vw)" ;
    cubeBehind.style.background = "#BFBFBF";
    cubeBehind.style.opacity = "0.95";
    cube.appendChild(cubeBehind);



    cube.style.transform = "rotateY("+ydeg+")" + "translateY("+yHeigh+")";
    cube.style.transition = "2s";
    container.appendChild(cube);

}
var paragraph1 = 
"<div class='content'><figure><img class=scaled src='image/coconut.png'><figcaption>Coconut in Hainan</figcaption></figure>The Arecaceae (/ærəˈkeɪsiaɪ/) is a family of perennial, flowering plants in the monocot order Arecales. Their growth form can be climbers, shrubs, tree-like and stemless plants, all commonly known as palms. Those having a tree-like form are called palm trees.[3] Currently, 181 genera with around 2,600 species are known,[4][5] most of which are restricted to tropical and subtropical climates. Most palms are distinguished by their large, compound, evergreen leaves, known as fronds, arranged at the top of an unbranched stem, except for the Hyphaene genus, who has branched palms. However, palms exhibit an enormous diversity in physical characteristics and inhabit nearly every type of habitat within their range, from rainforests to deserts.<br><br>  Palms are among the best known and most extensively cultivated plant families. They have been important to humans throughout much of history. Many common products and foods are derived from palms. In contemporary times, palms are also widely used in landscaping. In many historical cultures, because of their importance as food, palms were symbols for such ideas as victory, peace, and fertility.<br><br><h3>Etymology</h3>The word Arecaceae is derived from the word areca with the suffix '-aceae'. Areca is derived from Portuguese, via Malayalam അടയ്ക്ക (aṭaykka), which is from Dravidian *aṭ-ay-kkāy ('areca nut'). The suffix -aceae is the feminine plural of the Latin -āceus ('resembling').<br></div>" ;

var paragraph2 = 
"<div class='content'><h3>Morphology</h3>Whether as shrubs, tree-like, or vines, palms have two methods of growth: solitary or clustered. The common representation is that of a solitary shoot ending in a crown of leaves. This monopodial character may be exhibited by prostrate, trunkless, and trunk-forming members. Some common palms restricted to solitary growth include Washingtonia and Roystonea. Palms may instead grow in sparse though dense clusters. The trunk develops an axillary bud at a leaf node, usually near the base, from which a new shoot emerges. The new shoot, in turn, produces an axillary bud and a clustering habit results. Exclusively sympodial genera include many of the rattans, Guihaia, and Rhapis. Several palm genera have both solitary and clustering members. Palms which are usually solitary may grow in clusters and vice versa.<br><br> <figure><img class=scaled src='image/Palm_tree_trunk.JPG'><figcaption>Sawn palm stem:Palms do not form annual tree rings.</figcaption></figure>Palms have large, evergreen leaves that are either palmately ('fan-leaved') or pinnately ('feather-leaved') compound and spirally arranged at the top of the stem. The leaves have a tubular sheath at the base that usually splits open on one side at maturity.[7] The inflorescence is a spadix or spike surrounded by one or more bracts or spathes that become woody at maturity. The flowers are generally small and white, radially symmetric, and can be either uni- or bisexual. The sepals and petals usually number three each and may be distinct or joined at the base. The stamens generally number six, with filaments that may be separate, attached to each other, or attached to the pistil at the base. The fruit is usually a single-seeded drupe (sometimes berry-like)[8] but some genera (e.g., Salacca) may contain two or more seeds in each fruit.<br><br>Like all monocots, palms do not have the ability to increase the width of a stem (secondary growth) via the same kind of vascular cambium found in non-monocot woody plants.[9] This explains the cylindrical shape of the trunk (almost constant diameter) that is often seen in palms, unlike in ring-forming trees. However, many palms, like some other monocots, do have secondary growth, although because it does not arise from a single vascular cambium producing xylem inwards and phloem outwards, it is often called 'anomalous secondary growth'.<br> The Arecaceae are notable among monocots for their height and for the size of their seeds, leaves, and inflorescences. Ceroxylon quindiuense, Colombia's national tree, is the tallest monocot in the world, reaching up to 60 metres (197 ft) tall.[11] The coco de mer (Lodoicea maldivica) has the largest seeds of any plant, 40-50 centimetres (16-20 in) in diameter and weighing 15-30 kilograms (33-66 lb) each (coconuts are the second largest). Raffia palms (Raphia spp.) have the largest leaves of any plant, up to 25 metres (82 ft) long and 3 metres (10 ft) wide. The Corypha species have the largest inflorescence of any plant, up to 7.5 metres (25 ft) tall and containing millions of small flowers. Calamus stems can reach 200 metres (656 ft) in length.</div>";

var paragraph3 = 
"<div class='content'><h3>Range and habitat</h3><figure><img class=scaled src='image/Washingtonia.jpg'><figcaption>This grove of the native species Washingtonia filifera in Palm Canyon, just south of Palm Springs, California, is growing alongside a stream running through the desert.</figcaption></figure>Most palms are native to tropical and subtropical climates. Palms thrive in moist and hot climates but can be found in a variety of different habitats. Their diversity is highest in wet, lowland forests. South America, the Caribbean, and areas of the South Pacific and southern Asia are regions of concentration. Colombia may have the highest number of palm species in one country. There are some palms that are also native to desert areas such as the Arabian Peninsula and parts of northwestern Mexico. Only about 130 palm species naturally grow entirely beyond the tropics, mostly in humid lowland subtropical climates, in highlands in southern Asia, and along the rim lands of the Mediterranean Sea. The northernmost native palm is Chamaerops humilis, which reaches 44°N latitude along the coast of Liguria, Italy.[12] In the southern hemisphere, the southernmost palm is the Rhopalostylis sapida, which reaches 44°S on the Chatham Islands where an oceanic climate prevails.[13] Cultivation of palms is possible north of subtropical climates, and some higher latitude locales such as Ireland, Scotland, England, and the Pacific Northwest feature a few palms in protected locations and microclimates. In the United States, there are at least 12 native palm species, mostly occurring in the states of the Deep South and Florida.<br><br>Palms inhabit a variety of ecosystems. More than two-thirds of palm species live in humid moist forests, where some species grow tall enough to form part of the canopy and shorter ones form part of the understory.[14] Some species form pure stands in areas with poor drainage or regular flooding, including Raphia hookeri which is common in coastal freshwater swamps in West Africa. Other palms live in tropical mountain habitats above 1 thousand metres (3 thousand feet), such as those in the genus Ceroxylon native to the Andes. Palms may also live in grasslands and scrublands, usually associated with a water source, and in desert oases such as the date palm. A few palms are adapted to extremely basic lime soils, while others are similarly adapted to extreme potassium deficiency and toxicity of heavy metals in serpentine soils.</div>";

var paragraph4 =
"<div class='content'><h3>Taxonomy</h3><figure><img class=scaled src='image/Roystonea.jpg'><figcaption>Two Roystonea regia specimens. The characteristic crownshaft and apex shoot, or 'spear', are visible.</figcaption></figure>Palms are a monophyletic group of plants, meaning the group consists of a common ancestor and all its descendants.[14] Extensive taxonomic research on palms began with botanist H.E. Moore, who organized palms into 15 major groups based mostly on general morphological characteristics. The following classification, proposed by N.W. Uhl and J. Dransfield in 1987, is a revision of Moore's classification that organizes palms into 6 subfamilies.[15] A few general traits of each subfamily are listed below.<ul class='a'><li>Subfamily Arecoideae are the largest subfamily with 14 tribes and containing over 100 genera. All tribes have pinnate or bipinnate leaves and flowers arranged in groups of three, with a central pistillate and two staminate flowers.</li><li>Subfamily Calamoideae includes the climbing palms, such as rattans. The leaves are usually pinnate; derived characters (synapomorphies) include spines on various organs, organs specialized for climbing, an extension of the main stem of the leaf-bearing reflexed spines, and overlapping scales covering the fruit and ovary.</li><li>Subfamily Ceroxyloideae has small to medium-sized flowers, spirally arranged, with a gynoecium of three joined carpels.</li><li>Subfamily Coryphoideae are the second-largest subfamily with 8 tribes. Most palms in this subfamily have palmately lobed leaves and solitary flowers with three, or sometimes four carpels. The fruit normally develops from only one carpel.</li><li>Subfamily Nypoideae contains only one species, Nypa fruticans,[16] which has large, pinnate leaves. The fruit is unusual in that it floats, and the stem is underground and dichotomously branched, also unusual in palms.</li></ul>The Phytelephantoideae is the sixth subfamily of Arecaceae in N.W. Uhl and J. Dransfield's 1987 classification. Members of this group have distinct monopodial flower clusters. Other distinct features include a gynoecium with five to 10 joined carpels, and flowers with more than three parts per whorl. Fruits are multiple-seeded and have multiple parts. From the modern phylogenomic data, the Phytelephantoideae are tribe in the Ceroxyloideae subfamily.<br>Currently, few extensive phylogenetic studies of the Arecaceae exist. In 1997, Baker et al. explored subfamily and tribe relationships using chloroplast DNA from 60 genera from all subfamilies and tribes. The results strongly showed the Calamoideae are monophyletic, and Ceroxyloideae and Coryphoideae are paraphyletic. The relationships of Arecoideae are uncertain, but they are possibly related to the Ceroxyloideae and Phytelephantoideae. Studies have suggested the lack of a fully resolved hypothesis for the relationships within the family is due to a variety of factors, including difficulties in selecting appropriate outgroups, homoplasy in morphological character states, slow rates of molecular evolution important for the use of standard DNA markers, and character polarization.[18] However, hybridization has been observed among Orbignya and Phoenix species, and using chloroplast DNA in cladistic studies may produce inaccurate results due to maternal inheritance of the chloroplast DNA. Chemical and molecular data from non-organelle DNA, for example, could be more effective for studying palm phylogeny.<br>Recently, nuclear genomes and transcriptomes have been used to reconstruct the phylogeny of palms. This has revealed, for example, that a whole-genome duplication event occurred early in the evolution of the Arecaceae lineage, that was not experienced by its sister clade, the Dasypogonaceae.</div>";

var paragraph5 = 
"<div class='content'><h3>Selected genera</h3><figure><img class=scaled src='image/Palmtreesil.jpg'><figcaption>Silhouette of palms in KwaZulu-Natal, South Africa</figcaption></figure><figure><img class=scaled src='image/Various_Arecaceae.JPG'><figcaption></figcaption></figure><ul><li>Archontophoenix—Bangalow palm</li><li>Areca—Betel palm</li><li>Astrocaryum</li><li>Attalea</li><li>Bactris—Pupunha</li><li>Beccariophoenix—Beccariophoenix alfredii</li><li>Bismarckia—Bismarck palm</li><li>Borassus—Palmyra palm, sugar palm, toddy palm</li><li>Butia</li><li>Calamus—Rattan palm</li><li>Calamus—Rattan palm</li><li>Ceroxylon</li><li>Cocos—Coconut</li><li>Coccothrinax</li><figure><img class=scaled src='image/Palma_Real.jpeg'><figcaption>Cuban royal palm</figcaption></figure><figure><img class=scaled src='image/MultanEvening.jpg'><figcaption>Multan, Pakistan</figcaption></figure><figure><img class=scaled src='image/Beccario.jpg'><figcaption>Young Beccariophoenix alfredii</figcaption></figure><li>Copernicia—Carnauba wax palm</li><li>Corypha—Gebang palm, Buri palm or Talipot palm</li><li>Elaeis—Oil palm</li><li>Euterpe—Cabbage heart palm, açaí palm</li><li>Hyphaene—Doum palm</li><li>Jubaea—Chilean wine palm, Coquito palm</li><li>Latania—Latan palm</li><li>Licuala</li><li>Livistona—Cabbage palm</li><li>Mauritia—Moriche palm</li><li>Metroxylon—Sago palm</li><li>Nypa—Nipa palm</li><li>Parajubaea—Bolivian coconut palms</li><li>Phoenix—Date palm</li><li>Pritchardia</li><li>Raphia—Raffia palm</li><li>Rhapidophyllum</li><li>Rhapis</li><li>Roystonea—Royal palm</li><li>Sabal—Palmettos</li><li>Salacca—Salak</li><li>Syagrus—Queen palm</li><li>Thrinax</li><li>Trachycarpus—Windmill palm, Kumaon palm</li><li>Trithrinax</li><li>Veitchia—Manila palm, Joannis palm</li><li>Washingtonia—Fan palm</li></ul><div>";

var paragraph6 = 
"<div class='content'><h3>Evolution</h3>The Arecaceae were the first modern family of monocots to appear in the fossil record around 80 million years ago (Mya), during the late Cretaceous period. The first modern species, such as Nypa fruticans and Acrocomia aculeata, appeared 69 Mya, as evidenced by fossil Nypa pollen. Palms appear to have undergone an early period of adaptive radiation. By 60 Mya, many of the modern, specialized genera of palms appeared and became widespread and common, much more widespread than their range today. Because palms separated from the monocots earlier than other families, they developed more intrafamilial specialization and diversity. By tracing back these diverse characteristics of palms to the basic structures of monocots, palms may be valuable in studying monocot evolution.[20] Several species of palms have been identified from flowers preserved in amber, including Palaeoraphe dominicana and Roystonea palaea.[21] Fossil evidence[clarification needed] of them can also be found in samples of petrified palmwood.<br>The relationship between the subfamilies is shown in the following cladogram:</div>";

var paragraph7 = 
"<div class='content'><h3>Uses</h3><figure><img class=scaled src='image/Arecaceae_Arabia.jpg'><figcaption>Arecaceae are common in Saudi Arabia</figcaption></figure>Human use of palms is at least as old as human civilization itself, starting with the cultivation of the date palm by Mesopotamians and other Middle Eastern peoples 5000 years or more ago.[22] Date wood, pits for storing dates, and other remains of the date palm have been found in Mesopotamian sites. The date palm had a tremendous effect on the history of the Middle East. W.H. Barreveld wrote:<br><p style='margin-left: 2vw;'>One could go as far as to say that, had the date palm not existed, the expansion of the human race into the hot and barren parts of the old world would have been much more restricted. The date palm not only provided a concentrated energy food, which could be easily stored and carried along on long journeys across the deserts, it also created a more amenable habitat for the people to live in by providing shade and protection from the desert winds (Fig. 1). In addition, the date palm also yielded a variety of products for use in agricultural production and for domestic utensils, and practically all parts of the palm had a useful purpose</p>An indication of the importance of palms in ancient times is that they are mentioned more than 30 times in the Bible,[25] and at least 22 times in the Quran.<br><br><figure><img class=scaled src='image/Chestnut_in_Guntur.jpg'><figcaption>Palmyra palm fruit at Guntur, India</figcaption></figure>Arecaceae have great economic importance, including coconut products, oils, dates, palm syrup, ivory nuts, carnauba wax, rattan cane, raffia, and palm wood. This family supplies a large amount of the human diet and several other human uses, both by absolute amount produced and by number of species domesticated.[27] This is far higher than almost any other plant family, sixth out of domesticated crops in the human diet, and first in total economic value produced – sharing the top spot with the Poaceae and Fabaceae.[27] These human uses have also spread many Arecaceae species around the world.</div>"

var paragraph8 = 
"<div class='content'><h3>Endangered species</h3><figure><img class=scaled src='image/Pritchardia_affinis.jpg'><figcaption>Pritchardia affinis, a critically endangered species endemic to the Hawaiian Islands</figcaption></figure>Like many other plants, palms have been threatened by human intervention and exploitation. The greatest risk to palms is destruction of habitat, especially in the tropical forests, due to urbanization, wood-chipping, mining, and conversion to farmland. Palms rarely reproduce after such great changes in the habitat, and those with small habitat ranges are most vulnerable to them. The harvesting of heart of palm, a delicacy in salads, also poses a threat because it is derived from the palm's apical meristem, a vital part of the palm that cannot be regrown (except in domesticated varieties, e.g. of peach palm).[33] The use of rattan palms in furniture has caused a major population decrease in these species that has negatively affected local and international markets, as well as biodiversity in the area.[34] The sale of seeds to nurseries and collectors is another threat, as the seeds of popular palms are sometimes harvested directly from the wild. In 2006, at least 100 palm species were considered endangered, and nine species have been reported as recently extinct.<br><br>However, several factors make palm conservation more difficult. Palms live in almost every type of warm habitat and have tremendous morphological diversity. Most palm seeds lose viability quickly, and they cannot be preserved in low temperatures because the cold kills the embryo. Using botanical gardens for conservation also presents problems, since they can rarely house more than a few plants of any species or truly imitate the natural setting.[35] There is also the risk that cross-pollination can lead to hybrid species.<br><br>The Palm Specialist Group of the World Conservation Union (IUCN) began in 1984, and has performed a series of three studies to find basic information on the status of palms in the wild, use of wild palms, and palms under cultivation. Two projects on palm conservation and use supported by the World Wildlife Fund took place from 1985 to 1990 and 1986–1991, in the American tropics and southeast Asia, respectively. Both studies produced copious new data and publications on palms. Preparation of a global action plan for palm conservation began in 1991, supported by the IUCN, and was published in 1996.<br><br>The rarest palm known is Hyophorbe amaricaulis. The only living individual remains at the Botanic Gardens of Curepipe in Mauritius.</div>"

var paragraph9 = 
"<div class='content'><h3>Symbolism</h3><figure><img class=scaled src='image/Edward_Chart.jpg'><figcaption>Edward Hitchcock's fold-out paleontological chart in his 1840 Elementary Geology, showing the Palms as the crown of the plant tree of life, alongside Man as the crown of the animal tree of life.</figcaption></figure>The palm branch was a symbol of triumph and victory in classical antiquity. The Romans rewarded champions of the games and celebrated military successes with palm branches. Early Christians used the palm branch to symbolize the victory of the faithful over enemies of the soul, as in the Palm Sunday festival celebrating the triumphal entry of Jesus Christ into Jerusalem. In Judaism, the palm represents peace and plenty, and is one of the Four Species of Sukkot; the palm may also symbolize the Tree of Life in Kabbalah.<br><br>The canopies of the Rathayatra carts which carry the deities of Krishna and his family members in the cart festival of Jagganath Puri in India are marked with the emblem of a palm tree. Specifically it is the symbol of Krishna's brother, Baladeva.<br><br>In 1840, the American geologist Edward Hitchcock (1793–1864) published the first tree-like paleontology chart in his Elementary Geology, with two separate trees of life for the plants and the animals. These are crowned (graphically) with the Palms and with Man.<br><br>Today, the palm, especially the coconut palm, remains a symbol of the tropical island paradise.[14] Palms appear on the flags and seals of several places where they are native, including those of Haiti, Guam, Saudi Arabia, Florida, and South Carolina.</div>";

createCube(50,80,1,"5vh","90deg",paragraph4,"<div class='caption'>Taxonomy<br> <span><-This Way</span></div>");

createCube(50,53,1,"15vh","180deg",paragraph3,"<div class='caption'>Range<br>and habitat<br><span><-This Way</span></div>");

createCube(50,45,1,"20vh","0deg",paragraph1,"<div class='caption'>Intro<br>Etymology<br><span><-This Way</span></div>");

createCube(50,67,1,"35vh","-90deg",paragraph2,"<div class='caption'>Morphology<br><span><-This Way</span></div>");

createCube(50,77,1,"100vh","45deg",paragraph5,"<div class='caption'>Selected genera<br><span><-This Way</span></div>");

createCube(50,56,1,"155vh","135deg",paragraph8,"<div class='caption'>Endangered species<br><span><-This Way</span></div>");

createCube(50,52,1,"130vh","225deg",paragraph7,"<div class='caption'>Uses<br><span><-This Way</span></div>");

createCube(50,27,1,"155vh","-30deg",paragraph6,"<div class='caption'>Evolution<br><span><-This Way</span></div>","Evolution");

createCube(50,38,1,"180vh","-90deg",paragraph9,"<div class='caption'>Symbolism<br><span><-This Way</span></div>")


//定向

var a1 = document.getElementById("a1");
a1.addEventListener('click',function(){
    
    container.style.transform = "rotateY(0deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 0;
    
    
    
},false);

var a2 = document.getElementById("a2");
a2.addEventListener('click',function(){
    container.style.transform = "rotateY(90deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 217;
},false);


var a3 = document.getElementById("a3");
a3.addEventListener('click',function(){
    container.style.transform = "rotateY(180deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 43;
},false);

var a4 = document.getElementById("a4");
a4.addEventListener('click',function(){
    container.style.transform = "rotateY(270deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 0;
},false);

var a5 = document.getElementById("a5");
a5.addEventListener('click',function(){
    container.style.transform = "rotateY(315deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 775;
    console.log(document.documentElement.scrollTop);
},false);

var a6 = document.getElementById("a6");
a6.addEventListener('click',function(){
    container.style.transform = "rotateY(30deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 1258;
},false);

var a7 = document.getElementById("a7");
a7.addEventListener('click',function(){
    container.style.transform = "rotateY(135deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 1002;
},false);

var a8 = document.getElementById("a8");
a8.addEventListener('click',function(){
    container.style.transform = "rotateY(225deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 1239;
},false);

var a9 = document.getElementById("a9");
a9.addEventListener('click',function(){
    container.style.transform = "rotateY(90deg)" +" translateX(25vw) translateY(10vw)"; 
    document.documentElement.scrollTop = 1443;
},false);

let navigationOn = 1;
var navigation= document.getElementById("navigation");
navigation.addEventListener('mouseover',function(){
    navigationOn = 0;
    
    
    
},false);

navigation.addEventListener('mouseout',function(){
    navigationOn = 1;
    
},false);

//蚂蚁

var mouseCoords = {x:1,y:1}; // current mouse position
var antSpeed = 100; // ant speed in pixels per second
var antSize = 30; // ant size in pixels
var lastUpdate = 0; // time of last animation update

var body = document.getElementsByTagName('body')[0];
var ants = document.getElementsByClassName('ant'); // get ant elements

// random position each ant and set size
for (var i = 0; i < ants.length; i++) {
  randomPositionAnt(ants[i]);
  ants[i].style.height = antSize + "px";
  ants[i].style.width = antSize + "px";
}

// randomly position ant at edge of screen
function randomPositionAnt(ant) {
  if (Math.random() < 0.5) {
    ant.xLoc = 0;
  } else {
    ant.xLoc = body.clientWidth;
  }
  ant.yLoc = Math.random() * body.clientHeight;
};
// return true if distance between ant and cursor is less than 10 pixels
function isAntTouchingCursor(ant) {
  return Math.sqrt((ant.xLoc - mouseCoords.x) * (ant.xLoc - mouseCoords.x) + (ant.yLoc - mouseCoords.y) * (ant.yLoc - mouseCoords.y)) < 10;
}
// set up mouse cursor listening
window.addEventListener('mousemove', function(data){
  mouseCoords.x = data.clientX;
  mouseCoords.y = data.clientY;
});
// function to call each animation cycle
function update() {  
	requestAnimationFrame(update);
  var updateTime = new Date().getTime();
	var timeDiff = (Math.min(100, Math.max(updateTime - lastUpdate, 0))) / 1000;
  lastUpdate = updateTime;
  
  for (var i = 0; i < ants.length; i++) {
    var ant = ants[i];
    
    var xDiff = mouseCoords.x - ant.xLoc;
    var yDiff = mouseCoords.y - ant.yLoc;
    var multi = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    var xSpeed = xDiff / multi * antSpeed;
    var ySpeed = yDiff / multi * antSpeed;
    var rotation = (180 * Math.atan2(yDiff, xDiff) / Math.PI) - 180;
    
    ant.xLoc += xSpeed * timeDiff;
    ant.yLoc += ySpeed * timeDiff;
    
    if (isAntTouchingCursor(ant)) {
      randomPositionAnt(ant);
    }

    ant.style.left = (ant.xLoc - (antSize / 2)) + "px";
    ant.style.top = (ant.yLoc - (antSize / 2)) + "px";
    ant.style.transform = "rotate(" + rotation +  "deg)";
  };
  
}

update();