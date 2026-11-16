/* Cours d'exemple pour la classe de 3e (programme de cycle 4, préparation au brevet).
   Chaque cours a : fiche (format bristol : essentiel, dates, acteurs, formules, vocabulaire, points_cles, methode,
   mots_cles, a_retenir — chaque rubrique est facultative), quiz, vrai/faux et (parfois) un jeu « remets dans l'ordre ».
   Pour en ajouter : copiez un bloc { cls:"3e", matiere:"…", titre:"…", fiche:{…}, questions:[…], vrai_faux:[…] }. */
(function(){
const Qz=(q,a,w,e)=>({question:q,choix:[a,...w],reponse:0,explication:e});
const TF=(q,vrai,e)=>({question:q,choix:["Vrai","Faux"],reponse:vrai?0:1,explication:e});
const V=(a,vrai,e)=>({affirmation:a,vrai:vrai,explication:e});
const W=(mot,definition)=>({mot:mot,definition:definition});
const D=(date,fait)=>({date:date,fait:fait});        // date clé
const A=(nom,role)=>({nom:nom,role:role});           // personnage, auteur, acteur
const F=(nom,enonce)=>({nom:nom,enonce:enonce});     // théorème, formule, règle

const L=[

/* ================= HISTOIRE ================= */
{cls:"3e",matiere:"Histoire",titre:"La Première Guerre mondiale (1914-1918)",
 fiche:{
  essentiel:"1914-1918 : guerre totale et guerre de masse entre la Triple-Entente et les Puissances centrales, qui mobilise toute la société.",
  dates:[D("28 juin 1914","Assassinat de François-Ferdinand à Sarajevo"),D("Août 1914","Entrée en guerre ; guerre de mouvement"),D("1915","Génocide des Arméniens dans l'Empire ottoman"),D("1916","Batailles de Verdun et de la Somme"),D("1917","Entrée en guerre des États-Unis ; révolution russe"),D("11 nov. 1918","Armistice"),D("28 juin 1919","Traité de Versailles")],
  acteurs:[A("Triple-Entente","France, Royaume-Uni, Russie (puis Italie, États-Unis)"),A("Puissances centrales","Allemagne, Autriche-Hongrie, Empire ottoman"),A("Georges Clemenceau","Chef du gouvernement français à partir de novembre 1917")],
  points_cles:["Guerre de tranchées sur le front de l'Ouest (1915-1917).","Guerre totale : économie, femmes, colonies et propagande mobilisées à l'arrière.","Violence de masse : environ 10 millions de soldats morts, gueules cassées, génocide des Arméniens."],
  mots_cles:["guerre totale","guerre de tranchées","poilus","Verdun","front","arrière","mobilisation","propagande","violence de masse","génocide des Arméniens","armistice","traité de Versailles"],
  vocabulaire:[W("tranchée","Fossé creusé dans le sol où les soldats se protègent."),W("armistice","Accord qui arrête les combats."),W("poilu","Surnom des soldats français de 14-18."),W("propagande","Information orientée pour influencer l'opinion."),W("front","Zone où ont lieu les combats."),W("génocide","Destruction volontaire d'un groupe humain.")],
  a_retenir:"1914-1918 : une guerre totale, très meurtrière, qui s'achève par l'armistice du 11 novembre 1918."},
 questions:[
  Qz("Quel événement déclenche la guerre en 1914 ?","L'assassinat de l'archiduc François-Ferdinand à Sarajevo",["L'invasion de la Pologne","Le traité de Versailles","La révolution russe"],"L'attentat de Sarajevo enclenche le jeu des alliances."),
  Qz("Comment appelle-t-on les soldats français de la Première Guerre mondiale ?","Les poilus",["Les maquisards","Les mousquetaires","Les hussards"],"Poilu est le surnom des soldats français de 14-18."),
  Qz("Quelle bataille de 1916 est devenue un symbole de la guerre ?","Verdun",["Austerlitz","Waterloo","Valmy"],"Verdun a duré presque toute l'année 1916."),
  Qz("Quand l'armistice met-il fin aux combats sur le front de l'Ouest ?","Le 11 novembre 1918",["Le 8 mai 1945","Le 14 juillet 1789","Le 28 juin 1919"],"L'armistice est signé à Rethondes le 11 novembre 1918."),
  Qz("Quel traité de 1919 règle la paix avec l'Allemagne ?","Le traité de Versailles",["Le traité de Rome","Le traité de Maastricht","Le traité d'Utrecht"],"Il est signé à Versailles le 28 juin 1919."),
  TF("La Première Guerre mondiale est qualifiée de « guerre totale ».",true,"Elle mobilise toute la société et toute l'économie.")],
 vrai_faux:[V("Les femmes ont travaillé dans les usines pendant la guerre.",true,"Elles remplacent les hommes partis au front."),V("La guerre de tranchées se déroule surtout sur le front de l'Ouest.",true,"Les lignes y restent presque immobiles."),V("Le génocide des Arméniens a eu lieu en 1939.",false,"Il a eu lieu en 1915."),V("L'armistice a été signé en 1945.",false,"C'était en 1918."),V("Verdun et la Somme sont deux grandes batailles de 1916.",true,"Ce sont deux batailles très meurtrières.")],
 ordre:{consigne:"Classe ces événements du plus ancien au plus récent.",elements:["Assassinat de François-Ferdinand (1914)","Bataille de Verdun (1916)","Armistice (11 novembre 1918)","Traité de Versailles (1919)"]}},

{cls:"3e",matiere:"Histoire",titre:"La Seconde Guerre mondiale et le génocide des Juifs",
 fiche:{
  essentiel:"1939-1945 : guerre d'anéantissement entre les Alliés et l'Axe, marquée par le génocide des Juifs et des Tziganes.",
  dates:[D("1er sept. 1939","Invasion de la Pologne par l'Allemagne"),D("Juin 1940","Défaite de la France ; appel du 18 juin"),D("10 juil. 1940","Pleins pouvoirs à Pétain : régime de Vichy"),D("Déc. 1941","Pearl Harbor : entrée en guerre des États-Unis"),D("1942-1943","Bataille de Stalingrad, tournant de la guerre"),D("6 juin 1944","Débarquement en Normandie"),D("8 mai 1945","Capitulation de l'Allemagne"),D("Août 1945","Hiroshima et Nagasaki ; capitulation du Japon le 2 septembre")],
  acteurs:[A("Adolf Hitler","Dirigeant de l'Allemagne nazie"),A("Philippe Pétain","Chef du régime de Vichy, qui collabore"),A("Charles de Gaulle","Chef de la France libre"),A("Jean Moulin","Unifie la Résistance intérieure (CNR, 1943)")],
  points_cles:["Guerre d'anéantissement : plus de 50 millions de morts, en majorité des civils.","Shoah : environ 6 millions de Juifs exterminés (ghettos, fusillades, centres de mise à mort comme Auschwitz-Birkenau).","France : occupation, collaboration du régime de Vichy, Résistance et France libre."],
  mots_cles:["guerre d'anéantissement","Axe","Alliés","Shoah","génocide","centre de mise à mort","Auschwitz-Birkenau","collaboration","régime de Vichy","Résistance","France libre","capitulation"],
  vocabulaire:[W("Résistance","Ensemble des mouvements qui luttent contre l'occupant."),W("collaboration","Coopération avec l'occupant allemand."),W("Shoah","Génocide des Juifs d'Europe."),W("génocide","Destruction volontaire d'un groupe humain."),W("Alliés","Camp opposé à l'Axe."),W("capitulation","Arrêt des combats par le vaincu.")],
  a_retenir:"1939-1945 : guerre mondiale et génocide des Juifs d'Europe (la Shoah), environ 6 millions de victimes."},
 questions:[
  Qz("Quel événement déclenche la Seconde Guerre mondiale en 1939 ?","L'invasion de la Pologne par l'Allemagne",["L'attaque de Pearl Harbor","L'attentat de Sarajevo","La chute du mur de Berlin"],"L'Allemagne envahit la Pologne le 1er septembre 1939."),
  Qz("Que lance le général de Gaulle le 18 juin 1940 ?","Un appel à poursuivre le combat",["Un armistice","Un débarquement","Une capitulation"],"Depuis Londres, il appelle à continuer la lutte."),
  Qz("Comment s'appelle le régime dirigé par le maréchal Pétain ?","Le régime de Vichy",["La IVe République","Le Consulat","Le Front populaire"],"Le régime de Vichy collabore avec l'Allemagne nazie."),
  Qz("Combien de Juifs d'Europe ont été assassinés pendant la Shoah ?","Environ 6 millions",["Environ 600 000","Environ 60 000","Environ 600 millions"],"Environ 6 millions de Juifs ont été exterminés."),
  Qz("Quelle date marque la capitulation de l'Allemagne nazie ?","Le 8 mai 1945",["Le 11 novembre 1918","Le 6 juin 1944","Le 2 septembre 1945"],"Le 8 mai 1945 est la victoire des Alliés en Europe."),
  TF("Le débarquement allié en Normandie a eu lieu en 1944.",true,"Il a eu lieu le 6 juin 1944.")],
 vrai_faux:[V("Auschwitz-Birkenau était un camp d'extermination nazi.",true,"C'est le plus grand camp d'extermination."),V("La Résistance rassemble des personnes qui refusent l'occupation.",true,"Elle lutte contre l'occupant et le régime de Vichy."),V("Le régime de Vichy a mené la résistance contre l'Allemagne.",false,"Il a collaboré avec l'Allemagne nazie."),V("Les Tziganes ont aussi été victimes d'un génocide.",true,"Roms et Sintis ont été persécutés et exterminés."),V("Le Japon a capitulé en septembre 1945.",true,"Après les bombes d'Hiroshima et de Nagasaki.")],
 ordre:{consigne:"Classe ces événements du plus ancien au plus récent.",elements:["Invasion de la Pologne (1939)","Appel du 18 juin (1940)","Débarquement en Normandie (1944)","Capitulation de l'Allemagne (1945)"]}},

{cls:"3e",matiere:"Histoire",titre:"Le monde depuis 1945 : la guerre froide",
 fiche:{
  essentiel:"1947-1991 : affrontement indirect entre les États-Unis et l'URSS, deux superpuissances aux modèles opposés.",
  dates:[D("1947","Début de la guerre froide (doctrines Truman et Jdanov)"),D("1948-1949","Blocus de Berlin"),D("1949","Création de l'OTAN"),D("1955","Pacte de Varsovie ; conférence de Bandung"),D("1961","Construction du mur de Berlin"),D("1962","Crise des missiles de Cuba"),D("9 nov. 1989","Chute du mur de Berlin"),D("Déc. 1991","Disparition de l'URSS")],
  acteurs:[A("États-Unis","Bloc de l'Ouest : démocratie libérale, capitalisme"),A("URSS","Bloc de l'Est : régime communiste, économie planifiée")],
  points_cles:["Monde bipolaire : deux blocs séparés par le rideau de fer.","Affrontement indirect : crises, course aux armements, conquête spatiale, dissuasion nucléaire.","Décolonisation après 1945 ; les non-alignés refusent de choisir un bloc."],
  mots_cles:["guerre froide","superpuissance","bloc","monde bipolaire","rideau de fer","OTAN","pacte de Varsovie","dissuasion nucléaire","mur de Berlin","crise de Cuba","décolonisation","non-alignés"],
  vocabulaire:[W("superpuissance","Pays dominant le monde par sa force."),W("bloc","Ensemble de pays alliés."),W("rideau de fer","Frontière qui sépare l'Europe de l'Ouest et de l'Est."),W("OTAN","Alliance militaire occidentale créée en 1949."),W("décolonisation","Accès à l'indépendance des colonies."),W("dissuasion","Menace nucléaire qui décourage l'attaque.")],
  a_retenir:"1947-1991 : deux superpuissances s'affrontent sans guerre directe ; la guerre froide s'achève avec la chute du mur et la fin de l'URSS."},
 questions:[
  Qz("Quelles sont les deux superpuissances de la guerre froide ?","Les États-Unis et l'URSS",["La France et le Royaume-Uni","La Chine et le Japon","L'Allemagne et l'Italie"],"Elles dirigent deux blocs opposés."),
  Qz("Quelle ville est divisée par un mur en 1961 ?","Berlin",["Vienne","Varsovie","Budapest"],"Le mur de Berlin sépare Berlin-Est et Berlin-Ouest."),
  Qz("Quel événement symbolise la fin de la guerre froide en 1989 ?","La chute du mur de Berlin",["La crise de Cuba","Le blocus de Berlin","La guerre de Corée"],"Le mur tombe le 9 novembre 1989."),
  Qz("En quelle année l'URSS disparaît-elle ?","1991",["1945","1962","1975"],"L'URSS est dissoute en décembre 1991."),
  Qz("Quelle alliance militaire occidentale est créée en 1949 ?","L'OTAN",["Le pacte de Varsovie","L'ONU","L'Union européenne"],"L'OTAN est dirigée par les États-Unis."),
  TF("Pendant la guerre froide, les deux superpuissances se font directement une guerre mondiale.",false,"Elles s'affrontent indirectement, par crises et conflits interposés.")],
 vrai_faux:[V("La crise de Cuba a eu lieu en 1962.",true,"Elle a failli provoquer une guerre nucléaire."),V("Le pacte de Varsovie est dirigé par les États-Unis.",false,"Il est dirigé par l'URSS."),V("La décolonisation se déroule en grande partie après 1945.",true,"Beaucoup de colonies deviennent indépendantes."),V("Spoutnik, premier satellite artificiel, est lancé par l'URSS en 1957.",true,"C'est le début de la conquête spatiale."),V("Le mur de Berlin a été construit en 1989.",false,"Il a été construit en 1961 et est tombé en 1989.")],
 ordre:{consigne:"Classe ces événements du plus ancien au plus récent.",elements:["Blocus de Berlin (1948)","Construction du mur de Berlin (1961)","Chute du mur de Berlin (1989)","Disparition de l'URSS (1991)"]}},

{cls:"3e",matiere:"Histoire",titre:"La Ve République : institutions et vie politique",
 fiche:{
  essentiel:"Depuis 1958, la Ve République donne un rôle central au président, élu au suffrage universel direct depuis 1962.",
  dates:[D("1958","Constitution de la Ve République, adoptée par référendum"),D("1962","Président élu au suffrage universel direct"),D("1981","Première alternance : élection de François Mitterrand"),D("1986","Première cohabitation"),D("2000","Quinquennat adopté par référendum")],
  acteurs:[A("Charles de Gaulle","Fondateur et premier président de la Ve République (1959-1969)"),A("Président de la République","Élu pour 5 ans, nomme le Premier ministre, peut dissoudre l'Assemblée"),A("Gouvernement","Dirigé par le Premier ministre, conduit la politique de la nation"),A("Parlement","Assemblée nationale et Sénat : vote les lois, contrôle le gouvernement")],
  points_cles:["Séparation des pouvoirs : exécutif (président, gouvernement), législatif (Parlement), judiciaire.","L'Assemblée nationale peut renverser le gouvernement (motion de censure).","Alternance et cohabitation montrent la souplesse des institutions."],
  mots_cles:["Constitution","Ve République","suffrage universel direct","référendum","pouvoir exécutif","pouvoir législatif","Parlement","Premier ministre","dissolution","motion de censure","alternance","cohabitation"],
  vocabulaire:[W("Constitution","Texte qui fixe les règles de l'organisation de l'État."),W("référendum","Vote où les citoyens répondent à une question."),W("suffrage universel","Droit de vote pour tous les citoyens adultes."),W("dissolution","Fin anticipée de l'Assemblée nationale."),W("cohabitation","Président et Premier ministre de camps opposés."),W("quinquennat","Mandat de 5 ans.")],
  a_retenir:"Ve République : Constitution de 1958, président élu par tous depuis 1962, pouvoirs partagés avec le gouvernement et le Parlement."},
 questions:[
  Qz("Qui est à l'origine de la Constitution de 1958 ?","Charles de Gaulle",["Georges Clemenceau","Napoléon III","Jules Ferry"],"De Gaulle revient au pouvoir en 1958."),
  Qz("Comment le président est-il élu depuis 1962 ?","Au suffrage universel direct",["Par l'Assemblée nationale","Par le Sénat","Par tirage au sort"],"Cette réforme a été adoptée par référendum en 1962."),
  Qz("Qui vote les lois ?","Le Parlement",["Le président seul","Les maires","La Cour des comptes"],"Assemblée nationale et Sénat votent les lois."),
  Qz("Quelle est la durée du mandat présidentiel depuis 2002 ?","5 ans",["7 ans","4 ans","6 ans"],"Le quinquennat a été voté en 2000."),
  Qz("Que signifie « cohabitation » ?","Le président et le Premier ministre sont de camps opposés",["Deux présidents gouvernent ensemble","Le Parlement est dissous","Le gouvernement démissionne chaque année"],"Elle arrive quand la majorité à l'Assemblée est de l'autre camp."),
  TF("Le président de la République peut dissoudre l'Assemblée nationale.",true,"C'est l'un de ses pouvoirs.")],
 vrai_faux:[V("La Ve République date de 1958.",true,"Constitution du 4 octobre 1958."),V("Le Parlement est composé de l'Assemblée nationale et du Sénat.",true,"Ce sont les deux chambres."),V("Le Premier ministre est élu par tous les Français.",false,"Il est nommé par le président."),V("Le quinquennat remplace le septennat.",true,"Le mandat passe de 7 à 5 ans."),V("La Constitution de 1958 a été adoptée sans vote des Français.",false,"Elle a été adoptée par référendum.")],
 ordre:{consigne:"Classe ces événements du plus ancien au plus récent.",elements:["Constitution de la Ve République (1958)","Élection du président au suffrage universel direct (1962)","Vote du quinquennat par référendum (2000)"]}},

/* ================= GÉOGRAPHIE ================= */
{cls:"3e",matiere:"Géographie",titre:"L'Union européenne",
 fiche:{
  essentiel:"L'Union européenne réunit 27 États qui partagent un marché unique, des institutions communes et, pour la plupart, l'euro.",
  dates:[D("1957","Traité de Rome : naissance de la CEE (6 pays, dont la France)"),D("1992","Traité de Maastricht : création de l'Union européenne"),D("1995","Entrée en vigueur de l'espace Schengen"),D("2002","L'euro en pièces et en billets"),D("2004","Grand élargissement à l'Est (10 pays)"),D("2020","Sortie du Royaume-Uni (Brexit)")],
  acteurs:[A("Parlement européen","Élu par les citoyens, vote les lois ; siège à Strasbourg"),A("Commission européenne","Propose les lois ; siège à Bruxelles"),A("Conseil de l'UE","Ministres des États, vote les lois avec le Parlement"),A("Conseil européen","Chefs d'État et de gouvernement, fixe les grandes orientations")],
  points_cles:["La France est un pays fondateur.","Libre circulation des personnes, des marchandises, des services et des capitaux.","Les régions ultrapériphériques (Guadeloupe, La Réunion…) font partie de l'UE."],
  mots_cles:["Union européenne","État membre","pays fondateur","marché unique","libre circulation","espace Schengen","zone euro","élargissement","Parlement européen","Commission européenne","régions ultrapériphériques"],
  vocabulaire:[W("marché unique","Espace où circulent librement biens, services et personnes."),W("euro","Monnaie commune de nombreux pays de l'UE."),W("Schengen","Espace où l'on circule sans contrôle aux frontières."),W("Commission européenne","Institution qui propose les lois de l'UE."),W("traité","Accord signé entre plusieurs États."),W("élargissement","Arrivée de nouveaux pays dans l'UE.")],
  a_retenir:"L'UE, c'est 27 États, un marché unique, des institutions communes et pour beaucoup l'euro."},
 questions:[
  Qz("Quel traité de 1957 est à l'origine de la construction européenne ?","Le traité de Rome",["Le traité de Versailles","Le traité de Lisbonne","Le traité d'Utrecht"],"Le traité de Rome crée la Communauté économique européenne."),
  Qz("Combien d'États membres compte l'UE depuis 2020 ?","27",["28","15","32"],"Le Royaume-Uni a quitté l'UE en 2020."),
  Qz("Quelle monnaie est commune à de nombreux pays de l'UE ?","L'euro",["Le franc","Le dollar","La livre"],"L'euro circule depuis 2002 sous forme de pièces et de billets."),
  Qz("Quelle institution est élue directement par les citoyens européens ?","Le Parlement européen",["La Commission européenne","Le Conseil de l'UE","La Cour des comptes"],"Les députés européens sont élus tous les 5 ans."),
  Qz("Quel pays a quitté l'UE en 2020 ?","Le Royaume-Uni",["L'Italie","La Pologne","L'Espagne"],"C'est le « Brexit »."),
  TF("La Réunion fait partie de l'Union européenne.",true,"C'est une région ultrapériphérique de l'UE.")],
 vrai_faux:[V("Le traité de Maastricht (1992) crée l'Union européenne.",true,"Il met en place l'UE et prépare l'euro."),V("Tous les pays de l'UE utilisent l'euro.",false,"Certains gardent leur monnaie nationale."),V("Le Parlement européen siège à Strasbourg et à Bruxelles.",true,"Il a deux lieux de travail."),V("La France fait partie des pays fondateurs de la construction européenne.",true,"Elle signe le traité de Rome en 1957."),V("L'UE compte 15 États membres.",false,"Elle en compte 27.")],
 ordre:{consigne:"Classe ces événements du plus ancien au plus récent.",elements:["Traité de Rome (1957)","Traité de Maastricht (1992)","Mise en circulation de l'euro (2002)","Sortie du Royaume-Uni (2020)"]}},

{cls:"3e",matiere:"Géographie",titre:"Les dynamiques territoriales de la France",
 fiche:{
  essentiel:"La métropolisation concentre population et activités dans les grandes villes ; l'aménagement cherche à réduire les inégalités entre territoires.",
  acteurs:[A("État","Grands équipements, politiques nationales d'aménagement"),A("Collectivités territoriales","Régions, départements, communes"),A("Union européenne","Finance des projets grâce aux fonds européens")],
  points_cles:["Paris : seule ville mondiale française, elle concentre les fonctions de commandement.","Métropoles régionales (Lyon, Marseille, Toulouse, Lille…) dynamiques et connectées.","Espaces de faible densité : certains attractifs (périurbain, tourisme), d'autres en déclin.","Réseaux de transport (TGV, autoroutes, aéroports) : ils relient et hiérarchisent les territoires."],
  mots_cles:["métropole","métropolisation","aire d'attraction d'une ville","espace périurbain","espace de faible densité","attractivité","inégalités territoriales","aménagement du territoire","collectivité territoriale","réseau de transport","mondialisation"],
  vocabulaire:[W("métropole","Grande ville qui rayonne sur un vaste territoire."),W("métropolisation","Concentration des activités dans les grandes villes."),W("périurbain","Espace autour d'une ville, dont les habitants y travaillent."),W("aménagement","Organisation et équipement d'un territoire."),W("collectivité territoriale","Région, département ou commune."),W("pôle de compétitivité","Réseau d'entreprises et de chercheurs.")],
  a_retenir:"Les métropoles concentrent les activités ; l'aménagement du territoire cherche à réduire les inégalités entre territoires."},
 questions:[
  Qz("Qu'est-ce que la métropolisation ?","La concentration des hommes et des activités dans les grandes villes",["La construction de nouveaux villages","L'abandon des villes","La disparition des transports"],"Les métropoles concentrent emplois, services et pouvoirs."),
  Qz("Quelle est la principale métropole française ?","Paris",["Lyon","Marseille","Toulouse"],"Paris est la métropole la plus peuplée et la plus puissante."),
  Qz("Que désigne le mot « périurbain » ?","Les espaces autour d'une ville, dont les habitants y travaillent",["Le centre historique","Un désert","Une zone portuaire"],"Beaucoup d'habitants y vivent et se déplacent vers la ville."),
  Qz("Qui conduit les politiques d'aménagement du territoire ?","L'État et les collectivités territoriales",["Les entreprises seules","L'ONU","Les associations seules"],"Régions, départements et communes y participent."),
  Qz("Quel moyen de transport relie rapidement les grandes villes françaises ?","Le TGV",["Le tramway","Le téléphérique","La diligence"],"Le TGV relie les métropoles à grande vitesse."),
  TF("Tous les territoires français connaissent la même croissance.",false,"Les dynamiques sont inégales selon les territoires.")],
 vrai_faux:[V("Paris concentre de nombreux sièges d'entreprises.",true,"C'est un atout de la capitale."),V("Les régions, départements et communes sont des collectivités territoriales.",true,"Ce sont les échelons de l'organisation locale."),V("Tous les espaces ruraux perdent des habitants.",false,"Certains en gagnent, notamment près des villes."),V("Les métropoles sont reliées à la mondialisation.",true,"Par leurs aéroports, ports et entreprises."),V("L'aménagement du territoire vise à réduire les inégalités.",true,"C'est l'un de ses objectifs.")]},

/* ================= EMC ================= */
{cls:"3e",matiere:"EMC",titre:"La laïcité en France",
 fiche:{
  essentiel:"La laïcité garantit la liberté de conscience, la neutralité de l'État et l'égalité de tous les citoyens, quelles que soient leurs croyances.",
  dates:[D("1789","Déclaration des droits de l'homme : liberté d'opinion, même religieuse"),D("1881-1882","Lois Jules Ferry : école gratuite, obligatoire et laïque"),D("9 déc. 1905","Loi de séparation des Églises et de l'État"),D("1958","Constitution, article 1 : la France est une République laïque"),D("2004","Loi sur les signes religieux ostensibles à l'école publique"),D("2013","Charte de la laïcité à l'école")],
  acteurs:[A("Jules Ferry","Ministre, lois scolaires laïques (1881-1882)"),A("Aristide Briand","Rapporteur de la loi de 1905")],
  points_cles:["Loi de 1905 : la République ne reconnaît, ne salarie ni ne subventionne aucun culte.","Liberté de croire, de ne pas croire, de changer de religion.","Neutralité exigée des agents publics ; à l'école publique, les élèves ne portent pas de signes religieux ostensibles."],
  mots_cles:["laïcité","liberté de conscience","liberté de culte","neutralité","séparation des Églises et de l'État","égalité","République","école publique","signes religieux ostensibles","valeurs de la République"],
  vocabulaire:[W("laïcité","Séparation de l'État et des religions."),W("culte","Pratique d'une religion."),W("neutralité","Absence de préférence de l'État."),W("liberté de conscience","Liberté de croire ou de ne pas croire."),W("séparation","Distinction entre religions et État."),W("République","Régime fondé sur la liberté, l'égalité, la fraternité.")],
  a_retenir:"Laïcité : l'État est neutre, protège la liberté de conscience et traite tous les citoyens de façon égale."},
 questions:[
  Qz("Quelle loi de 1905 organise la laïcité en France ?","La loi de séparation des Églises et de l'État",["La loi sur l'école gratuite","La loi Veil","La loi sur le mariage"],"Elle est votée le 9 décembre 1905."),
  Qz("Que garantit la laïcité ?","La liberté de conscience et de culte",["L'obligation d'avoir une religion","L'interdiction de croire","Une religion d'État"],"Chacun peut croire ou ne pas croire."),
  Qz("Que signifie la neutralité de l'État ?","L'État ne favorise aucune religion",["L'État choisit une religion","L'État interdit les religions","L'État finance tous les cultes"],"Il traite tous les citoyens de manière égale."),
  Qz("Que prévoit la loi de 2004 à l'école publique ?","L'interdiction des signes religieux ostensibles",["L'obligation d'un uniforme","L'enseignement religieux obligatoire","La fin de l'école publique"],"Elle s'applique aux élèves de l'école publique."),
  Qz("Quelle est la devise de la République française ?","Liberté, Égalité, Fraternité",["Travail, Famille, Patrie","Unité, Force, Honneur","Paix, Justice, Amour"],"La devise figure sur les bâtiments publics."),
  TF("La laïcité interdit de croire en une religion.",false,"Elle garantit au contraire la liberté de croire ou de ne pas croire.")],
 vrai_faux:[V("La laïcité garantit la liberté de croire ou de ne pas croire.",true,"C'est la liberté de conscience."),V("En France, l'État finance un culte officiel.",false,"Il n'y a pas de culte officiel."),V("La loi de séparation des Églises et de l'État date de 1905.",true,"Elle est votée le 9 décembre 1905."),V("L'école publique est neutre en matière religieuse.",true,"Les élèves y sont accueillis sans distinction."),V("La laïcité signifie l'interdiction des religions.",false,"Elle protège leur libre exercice.")]},

/* ================= MATHÉMATIQUES ================= */
{cls:"3e",matiere:"Mathématiques",titre:"Le théorème de Thalès",
 fiche:{
  essentiel:"Le théorème de Thalès sert à calculer des longueurs ; sa réciproque sert à prouver que deux droites sont parallèles.",
  formules:[F("Théorème de Thalès","Si M ∈ (AB), N ∈ (AC) et (MN) // (BC), alors AM/AB = AN/AC = MN/BC."),F("Réciproque","Si A, M, B et A, N, C sont alignés dans le même ordre et AM/AB = AN/AC, alors (MN) // (BC)."),F("Contraposée","Si AM/AB ≠ AN/AC, alors (MN) et (BC) ne sont pas parallèles.")],
  points_cles:["Deux configurations : triangles emboîtés ou en « papillon » (sommet commun A).","Longueurs d'un même triangle au numérateur, celles de l'autre au dénominateur."],
  methode:["Citer les hypothèses : points alignés et droites parallèles.","Écrire l'égalité des trois rapports.","Garder les deux rapports utiles et remplacer par les valeurs.","Produit en croix, puis conclure avec l'unité."],
  mots_cles:["théorème de Thalès","réciproque","contraposée","droites parallèles","points alignés","rapports égaux","proportionnalité","produit en croix","configuration papillon"],
  vocabulaire:[W("parallèles","Droites qui ne se croisent jamais."),W("rapport","Quotient de deux longueurs."),W("proportionnalité","Lien entre longueurs qui varient dans le même rapport."),W("produit en croix","Méthode pour résoudre a/b = c/d."),W("réciproque","Énoncé inverse d'un théorème."),W("triangle","Figure à trois côtés.")],
  a_retenir:"Droites parallèles → rapports de longueurs égaux : AM/AB = AN/AC = MN/BC."},
 questions:[
  Qz("Quelle condition est nécessaire pour utiliser le théorème de Thalès ?","Deux droites parallèles",["Un angle droit","Un triangle isocèle","Un cercle"],"Le parallélisme est l'hypothèse essentielle."),
  Qz("Avec (MN)//(BC), M sur [AB] et N sur [AC], AM/AB est égal à…","AN/AC",["MN/AB","AB/BC","AM/MN"],"Les rapports de longueurs correspondantes sont égaux."),
  Qz("AM = 3, AB = 6 et MN = 4 : que vaut BC ?","8",["2","6","12"],"3/6 = 4/BC donc BC = 4 × 6 ÷ 3 = 8."),
  Qz("Quel outil permet de démontrer que deux droites sont parallèles ?","La réciproque du théorème de Thalès",["La trigonométrie","La médiane","Le périmètre"],"Si les rapports sont égaux, les droites sont parallèles."),
  Qz("Quelle opération permet de résoudre 3/6 = 4/x ?","Le produit en croix",["L'addition","La racine carrée","La soustraction"],"On écrit 3 × x = 6 × 4."),
  TF("Le théorème de Thalès s'applique à n'importe quelle figure, même sans droites parallèles.",false,"Il faut des droites parallèles.")],
 vrai_faux:[V("Thalès permet de calculer des longueurs.",true,"Grâce à la proportionnalité."),V("AM/AB = AN/AC quand (MN)//(BC).",true,"C'est le théorème de Thalès."),V("Thalès s'applique uniquement aux triangles rectangles.",false,"Il s'applique à tout triangle avec des parallèles."),V("Le produit en croix sert à résoudre une égalité de fractions.",true,"a/b = c/d donne ad = bc."),V("Si AM/AB ≠ AN/AC, les droites (MN) et (BC) ne sont pas parallèles.",true,"C'est une conséquence de Thalès.")],
 ordre:{consigne:"Remets dans l'ordre les étapes d'un calcul avec Thalès.",elements:["Repérer les droites parallèles","Écrire les égalités de rapports","Remplacer par les valeurs connues","Calculer avec le produit en croix"]}},

{cls:"3e",matiere:"Mathématiques",titre:"La trigonométrie dans le triangle rectangle",
 fiche:{
  essentiel:"Dans un triangle rectangle, le cosinus, le sinus et la tangente d'un angle aigu relient les côtés : on calcule une longueur ou un angle.",
  formules:[F("Cosinus","cos(angle) = côté adjacent / hypoténuse"),F("Sinus","sin(angle) = côté opposé / hypoténuse"),F("Tangente","tan(angle) = côté opposé / côté adjacent"),F("Moyen mnémotechnique","SOH-CAH-TOA")],
  points_cles:["Seulement dans un triangle rectangle, pour un angle aigu.","Le cosinus et le sinus d'un angle aigu sont compris entre 0 et 1.","Calculatrice en mode degrés ; pour un angle : cos⁻¹, sin⁻¹ ou tan⁻¹."],
  methode:["Repérer l'angle droit, l'hypoténuse, puis les côtés opposé et adjacent à l'angle.","Choisir le rapport qui contient la longueur connue et celle cherchée.","Écrire l'égalité, remplacer, faire le produit en croix.","Arrondir comme demandé, avec l'unité."],
  mots_cles:["triangle rectangle","hypoténuse","côté adjacent","côté opposé","angle aigu","cosinus","sinus","tangente","SOH-CAH-TOA","arrondi"],
  vocabulaire:[W("hypoténuse","Côté opposé à l'angle droit."),W("côté adjacent","Côté de l'angle étudié, autre que l'hypoténuse."),W("côté opposé","Côté en face de l'angle étudié."),W("cosinus","Rapport adjacent / hypoténuse."),W("sinus","Rapport opposé / hypoténuse."),W("tangente","Rapport opposé / adjacent.")],
  a_retenir:"SOH-CAH-TOA : sinus = opposé/hypoténuse, cosinus = adjacent/hypoténuse, tangente = opposé/adjacent."},
 questions:[
  Qz("Quel côté est l'hypoténuse ?","Le côté opposé à l'angle droit",["Le plus petit côté","Le côté adjacent à l'angle","Un côté de l'angle droit"],"C'est aussi le plus grand côté."),
  Qz("Que vaut le cosinus d'un angle aigu ?","Côté adjacent / hypoténuse",["Côté opposé / hypoténuse","Côté opposé / côté adjacent","Hypoténuse / côté adjacent"],"CAH : Cosinus = Adjacent / Hypoténuse."),
  Qz("Que vaut la tangente d'un angle aigu ?","Côté opposé / côté adjacent",["Côté adjacent / hypoténuse","Côté opposé / hypoténuse","Côté adjacent / côté opposé"],"TOA : Tangente = Opposé / Adjacent."),
  Qz("L'hypoténuse mesure 10 cm et l'angle vaut 30° : que vaut le côté opposé ?","5 cm",["8,7 cm","3 cm","20 cm"],"sin 30° = 0,5 donc côté opposé = 10 × 0,5 = 5 cm."),
  Qz("Quelle touche de la calculatrice donne l'angle dont le cosinus est 0,5 ?","cos⁻¹",["sin","tan","√"],"cos⁻¹(0,5) = 60°."),
  TF("Le sinus d'un angle aigu est toujours inférieur à 1.",true,"L'hypoténuse est le plus grand côté.")],
 vrai_faux:[V("Le sinus utilise le côté opposé et l'hypoténuse.",true,"SOH."),V("On peut utiliser cos, sin et tan dans n'importe quel triangle.",false,"Seulement dans un triangle rectangle."),V("La tangente est le rapport opposé / adjacent.",true,"TOA."),V("L'hypoténuse est le plus petit côté.",false,"C'est le plus grand."),V("cos 60° = 0,5.",true,"C'est une valeur à connaître.")],
 ordre:{consigne:"Remets dans l'ordre les étapes pour calculer une longueur avec la trigonométrie.",elements:["Repérer l'angle, l'hypoténuse et les côtés","Choisir le rapport (cos, sin ou tan)","Écrire l'égalité avec les valeurs","Résoudre l'équation"]}},

{cls:"3e",matiere:"Mathématiques",titre:"Calcul littéral et identités remarquables",
 fiche:{
  essentiel:"Développer transforme un produit en somme ; factoriser transforme une somme en produit.",
  formules:[F("Distributivité simple","k(a + b) = ka + kb"),F("Double distributivité","(a + b)(c + d) = ac + ad + bc + bd"),F("Identités remarquables","(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b²"),F("Équation produit nul","Si A × B = 0, alors A = 0 ou B = 0.")],
  points_cles:["Factoriser : repérer un facteur commun ou une identité remarquable.","Exemples : (x + 3)² = x² + 6x + 9 ; x² − 25 = (x − 5)(x + 5)."],
  methode:["Se ramener à une équation de la forme A × B = 0.","Écrire A = 0 ou B = 0.","Résoudre les deux équations.","Conclure : « les solutions sont … »."],
  mots_cles:["développer","factoriser","réduire","distributivité","facteur commun","identité remarquable","équation produit nul","solution"],
  vocabulaire:[W("développer","Transformer un produit en somme."),W("factoriser","Transformer une somme en produit."),W("identité remarquable","Égalité toujours vraie, utile pour calculer."),W("facteur","Nombre ou expression multiplié."),W("expression","Calcul écrit avec des lettres."),W("produit nul","Produit dont un facteur est nul.")],
  a_retenir:"(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b²."},
 questions:[
  Qz("Que vaut (a + b)² ?","a² + 2ab + b²",["a² + b²","a² − 2ab + b²","2a + 2b"],"On n'oublie pas le double produit 2ab."),
  Qz("Que vaut (a − b)(a + b) ?","a² − b²",["a² + b²","a² − 2ab + b²","2a² − 2b²"],"C'est la différence de deux carrés."),
  Qz("Développe (x + 3)².","x² + 6x + 9",["x² + 9","x² + 3x + 9","x² + 6x + 6"],"x² + 2 × 3 × x + 3²."),
  Qz("Factorise x² − 25.","(x − 5)(x + 5)",["(x − 5)²","(x + 5)²","(x − 25)(x + 1)"],"x² − 5² = (x − 5)(x + 5)."),
  Qz("Quelles sont les solutions de (x − 2)(x + 5) = 0 ?","2 et −5",["−2 et 5","2 et 5","0"],"x − 2 = 0 ou x + 5 = 0."),
  TF("Factoriser, c'est transformer une somme en produit.",true,"Développer fait l'inverse.")],
 vrai_faux:[V("(a − b)² = a² − b².",false,"(a − b)² = a² − 2ab + b²."),V("(x + 1)² = x² + 2x + 1.",true,"Identité remarquable."),V("Un produit est nul si au moins un facteur est nul.",true,"C'est la règle du produit nul."),V("x² + 9 se factorise avec une identité remarquable.",false,"Une somme de deux carrés ne se factorise pas ainsi."),V("Développer, c'est transformer un produit en somme.",true,"C'est le sens inverse de factoriser.")]},

{cls:"3e",matiere:"Mathématiques",titre:"Les fonctions affines et linéaires",
 fiche:{
  essentiel:"Une fonction affine f(x) = ax + b est représentée par une droite ; si b = 0, elle est linéaire et traduit la proportionnalité.",
  formules:[F("Fonction affine","f(x) = ax + b : droite passant par le point (0 ; b)"),F("Fonction linéaire","f(x) = ax : droite passant par l'origine"),F("Coefficient directeur","a = (f(x₂) − f(x₁)) / (x₂ − x₁)"),F("Sens de variation","a > 0 : croissante ; a < 0 : décroissante ; a = 0 : constante")],
  points_cles:["a = coefficient directeur ; b = ordonnée à l'origine.","Image : on calcule f(x). Antécédent : on résout f(x) = la valeur donnée.","Notation : f : x ↦ ax + b."],
  methode:["Tracer : calculer deux images, placer deux points, tracer la droite.","Lire b sur l'axe des ordonnées.","Lire a : quand x augmente de 1, y augmente de a."],
  mots_cles:["fonction affine","fonction linéaire","coefficient directeur","ordonnée à l'origine","image","antécédent","représentation graphique","droite","proportionnalité"],
  vocabulaire:[W("fonction affine","Fonction de la forme ax + b."),W("fonction linéaire","Fonction de la forme ax."),W("coefficient directeur","Nombre a qui donne la pente."),W("ordonnée à l'origine","Nombre b, valeur pour x = 0."),W("image","Résultat f(x) pour une valeur de x."),W("antécédent","Valeur de x qui a pour image un nombre donné.")],
  a_retenir:"f(x) = ax + b : une droite ; a donne la pente, b donne le point de départ."},
 questions:[
  Qz("Quelle est la forme d'une fonction affine ?","f(x) = ax + b",["f(x) = ax² + b","f(x) = a/x","f(x) = √x"],"a et b sont des nombres fixes."),
  Qz("Quelle est la représentation graphique d'une fonction affine ?","Une droite",["Une parabole","Un cercle","Une hyperbole"],"C'est une droite non verticale."),
  Qz("Pour f(x) = 3x + 1, que vaut f(2) ?","7",["6","5","8"],"3 × 2 + 1 = 7."),
  Qz("Dans f(x) = −2x + 5, que représente −2 ?","Le coefficient directeur",["L'ordonnée à l'origine","L'image de 0","L'antécédent de 5"],"Il est négatif : la fonction est décroissante."),
  Qz("Par quel point passe toujours la droite d'une fonction linéaire ?","L'origine du repère",["Le point (0 ; 1)","Le point (1 ; 0)","Aucun point particulier"],"f(0) = 0."),
  TF("Si a < 0, la fonction affine est croissante.",false,"Elle est décroissante.")],
 vrai_faux:[V("f(x) = 2x + 3 est une fonction affine.",true,"Elle a la forme ax + b."),V("L'ordonnée à l'origine de f(x) = 2x + 3 est 3.",true,"f(0) = 3."),V("Une fonction linéaire est une fonction affine particulière.",true,"C'est le cas b = 0."),V("Si a > 0, la fonction est décroissante.",false,"Elle est croissante."),V("f(0) = b pour f(x) = ax + b.",true,"C'est l'ordonnée à l'origine.")],
 ordre:{consigne:"Remets dans l'ordre les étapes pour trouver l'antécédent de 10 par f(x) = 3x + 1.",elements:["Écrire 3x + 1 = 10","Soustraire 1 : 3x = 9","Diviser par 3 : x = 3","Conclure : l'antécédent de 10 est 3"]}},

/* ================= PHYSIQUE-CHIMIE ================= */
{cls:"3e",matiere:"Physique-chimie",titre:"Électricité : puissance et énergie",
 fiche:{
  essentiel:"La puissance mesure l'énergie transférée chaque seconde ; l'énergie consommée dépend de la puissance et de la durée.",
  formules:[F("Puissance","P = U × I (P en W, U en V, I en A)"),F("Énergie","E = P × t (E en J si t en s ; en Wh si t en h)"),F("Loi d'Ohm","U = R × I (R en Ω)"),F("Conversions","1 Wh = 3 600 J ; 1 kWh = 1 000 Wh")],
  points_cles:["Puissance nominale : indiquée sur l'appareil, sous sa tension nominale.","Fusible et disjoncteur protègent contre les surintensités ; la prise de terre protège les personnes.","Le compteur électrique mesure l'énergie consommée en kWh."],
  methode:["Écrire la formule littérale.","Convertir dans les bonnes unités.","Remplacer et calculer.","Donner le résultat avec son unité."],
  mots_cles:["puissance","énergie","tension","intensité","résistance","watt","joule","kilowattheure","loi d'Ohm","puissance nominale","surintensité","conducteur ohmique"],
  vocabulaire:[W("puissance","Énergie transférée par seconde, en watts."),W("énergie","Capacité à produire un effet, en joules ou Wh."),W("watt","Unité de puissance."),W("tension","Grandeur mesurée en volts."),W("intensité","Courant mesuré en ampères."),W("résistance","Grandeur mesurée en ohms.")],
  a_retenir:"P = U × I ; E = P × t ; U = R × I."},
 questions:[
  Qz("Quelle relation lie puissance, tension et intensité ?","P = U × I",["P = U / I","P = U + I","P = I / U"],"La puissance est le produit de la tension et de l'intensité."),
  Qz("Quelle est l'unité de la puissance ?","Le watt",["Le volt","L'ampère","Le joule"],"Symbole : W."),
  Qz("Une lampe de 60 W fonctionne 2 h. Quelle énergie consomme-t-elle ?","120 Wh",["30 Wh","62 Wh","240 Wh"],"E = P × t = 60 × 2."),
  Qz("Sous 230 V, un appareil est traversé par 2 A. Quelle est sa puissance ?","460 W",["115 W","232 W","4 600 W"],"P = 230 × 2."),
  Qz("Que dit la loi d'Ohm ?","U = R × I",["U = R / I","U = R + I","R = U × I"],"La tension est proportionnelle à l'intensité."),
  TF("Le joule est une unité d'énergie.",true,"On utilise aussi le wattheure.")],
 vrai_faux:[V("L'énergie consommée dépend de la puissance et de la durée.",true,"E = P × t."),V("L'intensité se mesure en volts.",false,"Elle se mesure en ampères."),V("Un fusible protège contre les surintensités.",true,"Il coupe le circuit."),V("La puissance est égale à U × I.",true,"C'est la formule à retenir."),V("1 kWh correspond à 1 000 W pendant 1 heure.",true,"kilowattheure = 1 000 Wh.")]},

{cls:"3e",matiere:"Physique-chimie",titre:"Atomes et ions",
 fiche:{
  essentiel:"Un atome est électriquement neutre (autant de protons que d'électrons) ; un ion a perdu ou gagné un ou plusieurs électrons.",
  formules:[F("Atome","Noyau (protons + et neutrons) entouré d'électrons − ; neutre"),F("Ion positif (cation)","A perdu des électrons : Na⁺, Cu²⁺, Fe³⁺"),F("Ion négatif (anion)","A gagné des électrons : Cl⁻, OH⁻"),F("Tests de reconnaissance","Cl⁻ + nitrate d'argent → précipité blanc ; Cu²⁺ + soude → bleu ; Fe²⁺ + soude → vert ; Fe³⁺ + soude → rouille")],
  points_cles:["Presque toute la masse de l'atome est dans le noyau ; l'atome est surtout fait de vide.","Une solution ionique est électriquement neutre.","Un précipité est un solide qui apparaît dans une solution."],
  mots_cles:["atome","noyau","proton","neutron","électron","électriquement neutre","ion","cation","anion","solution ionique","test de reconnaissance","précipité"],
  vocabulaire:[W("atome","Particule constituant la matière."),W("noyau","Centre de l'atome, chargé positivement."),W("proton","Particule du noyau, de charge +."),W("électron","Particule de charge −."),W("ion","Atome ayant gagné ou perdu des électrons."),W("précipité","Solide qui se forme dans une solution.")],
  a_retenir:"Atome neutre = autant de protons que d'électrons ; un ion a gagné ou perdu des électrons."},
 questions:[
  Qz("Quelle particule porte une charge négative ?","L'électron",["Le proton","Le neutron","Le noyau"],"Les électrons portent une charge négative."),
  Qz("Que contient le noyau de l'atome ?","Des protons et des neutrons",["Des électrons","Des ions","Des molécules"],"Les électrons sont autour du noyau."),
  Qz("Un atome qui perd un électron devient…","Un ion positif",["Un ion négatif","Un neutron","Une molécule"],"Il a plus de protons que d'électrons."),
  Qz("Quel est le symbole de l'ion chlorure ?","Cl⁻",["Cl⁺","Na⁺","Cl₂"],"Le chlore a gagné un électron."),
  Qz("Quel réactif donne un précipité bleu avec les ions cuivre II ?","La soude (hydroxyde de sodium)",["Le nitrate d'argent","L'eau","Le sel"],"Le précipité d'hydroxyde de cuivre est bleu."),
  TF("Un atome est électriquement neutre.",true,"Il a autant de protons que d'électrons.")],
 vrai_faux:[V("Les électrons ont une charge positive.",false,"Leur charge est négative."),V("Un anion est un ion de charge négative.",true,"Il a gagné des électrons."),V("Un atome a autant de protons que d'électrons.",true,"C'est pourquoi il est neutre."),V("Le nitrate d'argent sert à reconnaître les ions chlorure.",true,"Il donne un précipité blanc."),V("Le noyau contient les électrons.",false,"Il contient protons et neutrons.")]},

/* ================= SVT ================= */
{cls:"3e",matiere:"SVT",titre:"La génétique : ADN, gènes et hérédité",
 fiche:{
  essentiel:"L'ADN des chromosomes porte l'information génétique ; les gènes et leurs allèles déterminent en partie nos caractères héréditaires.",
  formules:[F("Caryotype humain","46 chromosomes = 23 paires (XX chez la femme, XY chez l'homme)"),F("Gamètes","23 chromosomes, un de chaque paire"),F("Fécondation","23 + 23 = 46 chromosomes dans la cellule-œuf")],
  points_cles:["Cellule → noyau → chromosomes → ADN → gènes.","Gène = portion d'ADN ; allèles = versions d'un même gène.","Brassage génétique : chaque individu est unique (sauf les vrais jumeaux).","Mutation : modification de l'ADN, à l'origine de nouveaux allèles."],
  mots_cles:["ADN","chromosome","gène","allèle","caryotype","caractère héréditaire","gamète","fécondation","cellule-œuf","mutation","brassage génétique"],
  vocabulaire:[W("ADN","Molécule qui porte l'information génétique."),W("chromosome","Structure qui contient l'ADN."),W("gène","Portion d'ADN qui code un caractère."),W("allèle","Version d'un gène."),W("mutation","Modification de l'ADN."),W("gamète","Cellule reproductrice.")],
  a_retenir:"Cellule → noyau → chromosomes → gènes : l'ADN transmet les caractères héréditaires."},
 questions:[
  Qz("Où se trouve l'ADN dans une cellule humaine ?","Dans le noyau",["Dans la membrane","Dans le cytoplasme seulement","Dans la paroi"],"Il est organisé en chromosomes dans le noyau."),
  Qz("Combien de chromosomes possède une cellule humaine non reproductrice ?","46",["23","48","64"],"Cela fait 23 paires."),
  Qz("Combien de chromosomes contient un gamète humain ?","23",["46","12","92"],"Un gamète a la moitié des chromosomes."),
  Qz("Qu'est-ce qu'un gène ?","Une portion d'ADN qui code un caractère héréditaire",["Une cellule","Un organe","Une vitamine"],"Chaque gène est situé sur un chromosome."),
  Qz("Comment appelle-t-on une modification de l'ADN ?","Une mutation",["Une fécondation","Une division","Une hybridation"],"Elle peut être transmise si elle touche un gamète."),
  TF("Chaque parent transmet 23 chromosomes à l'enfant.",true,"Il en reçoit donc 46 en tout.")],
 vrai_faux:[V("L'ADN a la forme d'une double hélice.",true,"C'est sa structure."),V("Les vrais jumeaux ont des ADN très différents.",false,"Leurs ADN sont identiques."),V("Les mutations sont toujours dangereuses.",false,"Elles peuvent être sans effet, défavorables ou avantageuses."),V("Les gamètes ont deux fois moins de chromosomes que les autres cellules.",true,"23 au lieu de 46."),V("Un allèle est une version d'un gène.",true,"Par exemple, différentes couleurs d'yeux.")],
 ordre:{consigne:"Classe ces structures de la plus grande à la plus petite.",elements:["La cellule","Le noyau","Le chromosome","Le gène"]}},

{cls:"3e",matiere:"SVT",titre:"Le système immunitaire et la vaccination",
 fiche:{
  essentiel:"Le système immunitaire défend l'organisme contre les micro-organismes ; la vaccination crée une mémoire immunitaire.",
  acteurs:[A("Edward Jenner","Premier vaccin, contre la variole (1796)"),A("Louis Pasteur","Vaccin contre la rage (1885)"),A("Alexander Fleming","Découvre la pénicilline, premier antibiotique (1928)")],
  points_cles:["Barrières naturelles : peau et muqueuses.","Réponse rapide et non spécifique : inflammation, phagocytose.","Réponse spécifique : lymphocytes B → anticorps ; lymphocytes T → destruction des cellules infectées.","Les antibiotiques agissent sur les bactéries, pas sur les virus."],
  mots_cles:["micro-organisme","antigène","anticorps","phagocytose","lymphocyte B","lymphocyte T","réponse immunitaire","mémoire immunitaire","vaccin","immunité collective","antibiotique"],
  vocabulaire:[W("antigène","Molécule étrangère reconnue par le système immunitaire."),W("anticorps","Protéine qui se fixe sur un antigène précis."),W("phagocyte","Cellule qui détruit les microbes en les absorbant."),W("lymphocyte","Globule blanc spécialisé de l'immunité."),W("vaccin","Préparation qui entraîne le système immunitaire."),W("immunité","Capacité du corps à se défendre.")],
  a_retenir:"Le vaccin entraîne le système immunitaire à reconnaître un microbe précis grâce à la mémoire immunitaire."},
 questions:[
  Qz("Quelles cellules détruisent les microbes en les absorbant ?","Les phagocytes",["Les globules rouges","Les neurones","Les plaquettes"],"Ce sont des globules blancs."),
  Qz("Que fabriquent les lymphocytes B ?","Des anticorps",["Du sang","Des hormones","Des antibiotiques"],"Chaque anticorps reconnaît un antigène précis."),
  Qz("Que contient un vaccin ?","Un microbe inactivé ou un fragment de microbe",["Un antibiotique","Du sang de malade","Du sérum physiologique seulement"],"Il ne rend pas malade mais entraîne l'immunité."),
  Qz("Que provoque la vaccination ?","Une mémoire immunitaire",["Une maladie grave","La destruction des anticorps","Une résistance aux antibiotiques"],"Le corps réagit plus vite lors du vrai contact."),
  Qz("Contre quoi les antibiotiques sont-ils efficaces ?","Les bactéries",["Les virus","Toutes les maladies","Les allergies"],"Ils sont inefficaces contre les virus."),
  TF("Un vaccin protège contre un microbe précis.",true,"La protection est spécifique.")],
 vrai_faux:[V("La peau est une barrière contre les microbes.",true,"C'est une barrière naturelle."),V("Les antibiotiques soignent les maladies virales comme la grippe.",false,"Ils agissent sur les bactéries."),V("Les lymphocytes T peuvent détruire des cellules infectées.",true,"C'est leur rôle."),V("L'immunité collective protège aussi les personnes fragiles.",true,"Le microbe circule moins."),V("Un anticorps est spécifique d'un antigène.",true,"Il ne reconnaît qu'un antigène précis.")]},

/* ================= FRANÇAIS ================= */
{cls:"3e",matiere:"Français",titre:"Les figures de style",
 fiche:{
  essentiel:"Les figures de style rendent un texte plus expressif : il faut savoir les nommer, les repérer et expliquer leur effet.",
  formules:[F("Comparaison","Rapprochement avec un outil : « fort comme un lion »"),F("Métaphore","Rapprochement sans outil : « cet homme est un lion »"),F("Personnification","Traits humains donnés à une chose : « le vent hurle »"),F("Hyperbole","Exagération : « je meurs de faim »"),F("Antithèse","Opposition de deux idées : « le jour et la nuit »"),F("Oxymore","Deux termes contraires accolés : « une obscure clarté »"),F("Anaphore","Répétition d'un mot en début de phrases ou de vers"),F("Litote","Dire moins pour suggérer plus : « ce n'est pas mal »")],
  methode:["Citer l'exemple entre guillemets.","Nommer la figure de style.","Expliquer son effet : insister, opposer, rendre vivant, émouvoir…"],
  mots_cles:["figure de style","comparaison","outil de comparaison","comparé","comparant","métaphore","personnification","hyperbole","antithèse","oxymore","anaphore","litote","effet"],
  vocabulaire:[W("comparaison","Rapprochement avec un outil comme « comme »."),W("métaphore","Rapprochement sans outil de comparaison."),W("hyperbole","Exagération."),W("antithèse","Opposition de deux idées."),W("personnification","Traits humains donnés à une chose."),W("anaphore","Répétition en début de phrases.")],
  a_retenir:"Comparaison = avec outil ; métaphore = sans outil ; hyperbole = exagération."},
 questions:[
  Qz("« Il est fort comme un lion » est…","Une comparaison",["Une métaphore","Une hyperbole","Une antithèse"],"L'outil de comparaison est « comme »."),
  Qz("« Cet homme est un lion » est…","Une métaphore",["Une comparaison","Une litote","Une anaphore"],"Il n'y a pas d'outil de comparaison."),
  Qz("« Je meurs de faim » est…","Une hyperbole",["Une litote","Une antithèse","Une personnification"],"C'est une exagération."),
  Qz("« Le vent hurle » est…","Une personnification",["Une comparaison","Une anaphore","Une antithèse"],"Le vent reçoit une action humaine."),
  Qz("Quelle figure répète un mot au début de plusieurs phrases ?","L'anaphore",["L'antithèse","La litote","La métaphore"],"Elle crée un effet d'insistance."),
  TF("Une métaphore utilise un outil de comparaison comme « comme ».",false,"C'est la comparaison qui en utilise un.")],
 vrai_faux:[V("L'antithèse oppose deux idées.",true,"Par exemple le jour et la nuit."),V("L'hyperbole exagère.",true,"C'est son rôle."),V("La litote dit plus pour dire moins.",false,"Elle dit moins pour suggérer plus."),V("« Pareil à un soleil » est une comparaison.",true,"« Pareil à » est un outil de comparaison."),V("La personnification donne des traits humains à une chose.",true,"Par exemple « la mer caresse la plage ».")]}

];
window.COURS=(window.COURS||[]).concat(L);
})();
