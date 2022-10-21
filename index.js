const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const bdd = require("./bdd.json")
const prefix = "!G";
const fs = require("fs");
var nbcoup = 0;


Client.on("ready", async () => {



    let statuts = ["/help",  `${Client.guilds.cache.size} serveurs `, "Je suis officiellement sortie le: 30/09/2022", "La version béta", "Rejoint le Support !"]
    setInterval(function() {
        let stats = statuts[Math.floor(Math.random()*statuts.length)];
        Client.user.setActivity(stats, {type: 'WATCHING'});
    }, 10000) 
    console.log("Bot Opérationnel")
    //Client.application.commands.set([])
   Client.application.commands.create(data);
    Client.application.commands.create(datab);
    Client.application.commands.create(datac);
    Client.application.commands.create(datad);
    Client.application.commands.create(datae);
    Client.application.commands.create(dataf);
    Client.application.commands.create(datag);
    Client.application.commands.create(datah);
    Client.application.commands.create(dataW);
    Client.application.commands.create(dataZ);
    Client.application.commands.create(dataR);
    Client.application.commands.create(dataO);
    Client.application.commands.create(dataS);
    Client.application.commands.create(dataT);
    Client.application.commands.create(Chifoumis);
    Client.application.commands.create(Morpion);
    Client.application.commands.create(VF);
    Client.application.commands.create(dataL);
    Client.application.commands.create(dataY);
});

Client.on('guildDelete', (guild) => {
    delete bdd[guild.id];
    Savebdd()
});

Client.on('guildCreate', (guild) => {
console.log("Le bot à été ajouter sur un nouveau serveur !!!")
    const chanel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT')
    var base = ("Vérité: Quelle est la chose la plus bizarre que tu aies jamais mangée ? (un conseil : si la personne répond qu’il mange de la pizza à l’ananas, fuyez…")
    var base2 = ("Vérité: Que ferais-tu si tu recevais un chèque d’un million ? ")
    var base3 = ("Vérité: Combien de jours as-tu déjà passé sans te laver ? ")
    var base4 = ("Vérité: Quelle est ta plus grande honte ?  ")
    var base5 = ("Vérité: As-tu déjà triché à un examen ? ")
    var base6 = ("Vérité: De quoi as-tu le plus peur ?")
    var base7 = ("Vérité: Est-ce que tu as déjà menti pour que quelqu’un t’apprécie ? ")
    var base8 = ("Vérité: Quel était ton surnom quand tu étais petit(e) ? ")
    var base9 = ("Vérité: Dans combien de pays as-tu voyagé ? ")
    var base10 = ("Action: Rename toi sur ce serveur en ce que choisit une personnes du groupe")
    var base11 = ("Action: Envoie un MP à une personne et fait lui croire que tu crush sur lui/elle !")
    var base12 = ("Action: Fait un cadeau à une personne de la partie !")
    var base13 = ("Action: Envoie un screen de la dernière conversation en MP que tu a eu !")
    var base14 = ("Action: Fini toutes tes phrases pendant 2 tours par **Poisson** (ça commence maintenant !).")
    var base15 = ("Action: Envoie une photo de ta chambre **maintenant** (si t'a chambre n'est pas ranger une personne de la partie doit te donner un gage !).")
    var base16 = ("Action: Prank quelqu'un de ce serveur !")
    guild_id = guild.id
    bdd[guild_id] = {}
    bdd[guild.id]["Nom_du_serveur"] = ""
    bdd[guild_id]["Nom_du_serveur"] = guild.name
    bdd[guild_id]["joueur2"] = ""
    bdd[guild_id]["joueur1"] = ""
    bdd[guild_id]["Salon_Logs"] = ""
    bdd[guild_id]["logs"] = "on"
    bdd[guild_id]["action"] = []
    bdd[guild_id]["tirage_au_sort"] = []
    bdd[guild_id]["Salon_Logs"] = chanel.id
    bdd[guild_id]["action"].push(base, base14, base2, base3, base10, base4, base5, base16, base6, base7,  base15, base8, base11, base12,base9, base13)
    bdd[guild_id]["ban"] = {}
    bdd[guild_id]["ban"]["ban_id"] = []
    bdd[guild_id]["ban"]["ban_name"] = []
    bdd[guild_id]["logs"] == "on"
    Savebdd()

    var embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("GameCreator Bot")
    .setDescription("Bonjour ! Je m'appel **GameCreator Bot**, je suis un bot Français de création d'animations et de jeux !\n\nMon préfix est `!G`\n\nTu peux éfféctuer la commande `/help` pour voir la liste des commandes !\n\nCe salon (<#" + bdd[guild_id]["Salon_Logs"] + ">) à été déffinie comme salon des logs ! (`/setlogs + [mention du salon]` pour changer le salon des logs ! ou `/logs + [off] pour désactiver les logs !`)\n\nAmuse toi bien !!!\n\n[**Support Officiel**](https://discord.gg/PrG7mM3EAa)")
    .setTimestamp()
    .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
chanel.send({ embeds: [embed]});


});

const data = new SlashCommandBuilder()
.setName("help")
.setDescription("Affiche la liste des commandes")

const dataY = new SlashCommandBuilder()
.setName("viewban")
.setDescription("Affiche la liste des utilisateur banni des jeux")

const datab = new SlashCommandBuilder()
.setName("viewav")
.setDescription("Affiche la liste des actions ou vérités qui ont été déffinie")

const datac = new SlashCommandBuilder()
.setName("delav")
.setDescription("Supprime toutes les actions et vérités qui ont été définie")

const datad = new SlashCommandBuilder()
.setName("baseav")
.setDescription("Ajoute les a/v de base (les a/v qui ont été définie serrons supprimer !)")

const datae = new SlashCommandBuilder()
.setName("ausort")
.setDescription("Liste des commandes pour les tirages au sorts.")

const dataf = new SlashCommandBuilder()
.setName("tirage")
.setDescription("lancer le tirage au sort.")

const VF = new SlashCommandBuilder()
.setName("vraioufaux")
.setDescription("Jouer à un Vrai ou Faux")

const datag = new SlashCommandBuilder()
.setName("delausort")
.setDescription("Efface les participants enregistrer du tirage au sort enregistrer")

const datah = new SlashCommandBuilder()
.setName("actionvérité")
.setDescription("Crée une partie d'actions ou vérités")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur avec qui vous souhaitez jouer.")
    .setRequired(true));

    const dataW = new SlashCommandBuilder()
.setName("addausort")
.setDescription("Ajouter un membre au tirage au sort")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur que vous souhaitez ajouter au tirage au sort")
    .setRequired(true));

    const dataZ = new SlashCommandBuilder()
.setName("ban")
.setDescription("Bannir un membre des jeux")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur que vous souhaitez bannir")
    .setRequired(true))
    .addStringOption(option => option 
        .setName("raison")
        .setDescription("Raison du bannissement ")
        .setRequired(true));

    const dataR = new SlashCommandBuilder()
.setName("unban")
.setDescription("Révoquer le bannissement d'un membre des jeux")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur que vous souhaitez débannir")
    .setRequired(true));

    const Chifoumis = new SlashCommandBuilder()
.setName("chifumi")
.setDescription("Jouer à Chifoumi avec un membre")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur avec qui vous souhaitez jouer.")
    .setRequired(true));

     const Morpion = new SlashCommandBuilder()
.setName("morpion")
.setDescription("Jouer au morpion avec un membre")
.addUserOption(option => option 
    .setName("utilisateur")
    .setDescription("Utilisateur avec qui vous souhaitez jouer.")
    .setRequired(true));

    const dataO = new SlashCommandBuilder()
.setName("setlog")
.setDescription("Déffinir le salon des logs")
.addChannelOption(option => option 
    .setName("salon")
    .setDescription("Salon que vous souhaitez configurer comme salon des logs")
    .setRequired(true));

    const dataL = new SlashCommandBuilder()
    .setName("logs")
    .setDescription("Activer ou désactiver les logs")
    .addStringOption(option => option 
        .setName("logs")
        .setDescription("Activer ou désactiver les logs (répodez par: `on` ou `off`")
        .setRequired(true));

    const dataS = new SlashCommandBuilder()
.setName("action")
.setDescription("Déffinir une action pour les actions ou vérités")
.addStringOption(option => option 
    .setName("action")
    .setDescription("Action que vous souhaitez enregistrer")
    .setRequired(true));

    const dataT = new SlashCommandBuilder()
.setName("vérité")
.setDescription("Déffinir une vérité pour les actions ou vérités")
.addStringOption(option => option 
    .setName("vérité")
    .setDescription("vérité que vous souhaitez enregistrer")
    .setRequired(true));

Client.on("interactionCreate", async interaction => {
    
    if(interaction.isCommand()){    
        if(interaction.commandName === "logs"){
            guild_id = interaction.guild.id
            let mention = interaction.options.getString("logs");
            if(bdd[interaction.guild.id]){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                } else {
                    if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                        interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                   } else {
                    if(interaction.member.permissions.has("MANAGE_MESSAGES")){
                        if(mention == "on"){
                            if(bdd[guild_id]["logs"] == "on"){
                                interaction.reply({content:"Les logs sont déjà activer !", ephemeral: true})
                            } else {
                            bdd[guild_id]["logs"] = "on"
                            Savebdd()
                            var embed2 = new Discord.MessageEmbed()
                                .setColor("#00FF00")
                                .setTitle("Configuration")
                                .setTimestamp()
                                .setDescription("Les logs ont bien été activer !\n\nLe salon <#" + bdd[guild_id]["Salon_Logs"] + "> ont été déffini comme salon des logs ! (`/setlog + [salon]` pour changer le salon)");
                            interaction.reply({ embeds: [embed2]})
                            var embed = new Discord.MessageEmbed()
                                .setColor("#00FF00")
                                .setTimestamp()
                                .setTitle("Configuration")
                                .setDescription("<@" + interaction.user.id + "> à activer les logs !\n\n`/logs + [off]` pour les désactiver !");
                                Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                            }
                        } else {
                            if(mention == "off"){
                                if(bdd[guild_id]["logs"] == "off"){
                                    interaction.reply({content:"Les logs sont déjà désactiver !", ephemeral: true})
                                } else {
                                bdd[guild_id]["logs"] = "off"
                                Savebdd()
                                var embed2 = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTimestamp()
                                .setTitle("Configuration")
                                .setDescription("Les logs ont bien été désactiver !");
                            interaction.reply({ embeds: [embed2]})
                                var embed = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("Configuration")
                                .setTimestamp()
                                .setDescription("<@" + interaction.user.id + "> à désactiver les logs !\n\n`/logs + [on]` pour les réactiver !");
                                Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                                }
                            } else {
                                interaction.reply({content:"Merci de préciser par `on` ou par `off` !", ephemeral: true})
                            }
                            
                        }
                    } else {
                        interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande ! :x:", ephemeral: true})
                    }
                   }
                }
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
            }
        }
    }

    var Pierre = new Discord.MessageActionRow()
 .addComponents(new Discord.MessageButton()
   .setCustomId("Pierre")
     .setLabel("🪨 Pierre")
     .setStyle("PRIMARY")
     );

     var Feuille = new Discord.MessageActionRow()
     .addComponents(new Discord.MessageButton()
       .setCustomId("Feuille")
         .setLabel("🌿 Feuille")
         .setStyle("PRIMARY")
     
);

var Ciseaux = new Discord.MessageActionRow()
     .addComponents(new Discord.MessageButton()
       .setCustomId("Ciseaux")
         .setLabel("✂️ Ciseaux")
         .setStyle("PRIMARY")
     
);
if(interaction.isCommand()){    
    var Vrai1 = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageButton()
      .setCustomId("Vrai1")
        .setLabel("Vrai")
        .setStyle("SUCCESS")
);
var Faux1 = new Discord.MessageActionRow()
.addComponents(new Discord.MessageButton()
 .setCustomId("Faux1")
   .setLabel("Faux")
   .setStyle("DANGER")
);
    
    if(interaction.commandName === "vraioufaux"){
        guild_id = interaction.guild.id
        if(bdd[interaction.guild.id]){
            if(bdd["Black_Liste"].includes(interaction.user.id)){
                interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
            } else {
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
               } else {
                var AVS = ["Le béret est d’origine basque, vrai ou faux ?", "Le palmier est un arbre, vrai ou faux ?", "Une femme divorcée doit attendre 300 jours avant de se remarier, vrai ou faux ?", "Aux États-Unis, il n’y a pas d’étage nº 13 dans les gratte-ciel", "Le muscle le plus puissant du corps humain est la langue, vrai ou faux ?", "Les cheveux et les ongles continuent de pousser après la mort, vrai ou faux ?", "L’éléphant est le seul animal qui ne peut pas sauter, vrai ou faux ?", "Les chats voient dans le noir, vrai ou faux ?", "Les connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes, vrai ou faux ?", "La couleur noire ou verte des olives ne dépend pas de la variété, mais du moment de la récolte, vrai ou faux ?", "Les yeux peuvent rester bloqués quand on louche, vrai ou faux ?", "L’ordinateur abîme les yeux, vrai ou faux ?", "L’homme a plus de poils que la femme, vrai ou faux ?", "Il est impossible d’éternuer les yeux ouverts, vrai ou faux ?", "Certaines pierres flottent sur l’eau, vrai ou faux ?", "Le cheval ne se couche jamais, sauf quand il est malade, vrai ou faux ?", "Un colibri d'Elena pèse aussi lourd qu’une pièce de 20 centimes d’euros, Vrai ou Faux ?", "Au XVIIe siècle, les carottes n’étaient pas orange, Vrai ou Faux ?", "Les huitres peuvent changer de sexe au moment de l’accouplement, Vrai ou Faux ?", "Le corps humain d’un adulte possède 119 os, Vrai ou Faux ?", "Il est impossible de rêver et ronfler en même temps, Vrai ou Faux ?", "Le chocolat est toxique pour les chiens, Vrai ou Faux ?", "Un être humain marche en moyenne l’équivalent d’un tour de la Terre tout au long de sa vie, Vrai ou Faux ?", "A l'Euromillions, vous avez 1 chance sur 39 millions de remporter le gros lot, Vrai ou Faux ?", "La muraille de Chine est visible à l'œil nu depuis l'espace dans la Station Internationale (ISS), Vrai ou Faux ?", "Tous les tanks britanniques sont équipés pour boire le thé, Vrai ou Faux ?", "Une seule grenouille peut pondre jusqu’à 2000 œufs, Vrai ou Faux ?", "Les avocats sont toxiques pour les chats, Vrai ou Faux ?", "La langue officielle des États-Unis d’Amérique est l’anglais, Vrai ou Faux ?"];
                var AV = Math.floor(Math.random() * AVS.length);
                interaction.reply({content:"**__Vrai ou Faux ?__**\n\n"  + String([AVS[AV]]), components: [Vrai1, Faux1]})
               }
            }
        } else {
            const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
        }
    }
}

if(interaction.isButton()){ 
    if(interaction.customId == "Vrai1"){
        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa langue officielle des États-Unis d’Amérique est l’anglais, Vrai ou Faux ?"){
            interaction.reply("**Mauvaise réponse !**\n\nL’anglais est la langue parlée par la majorité des Américains, mais elle n'a jamais été adoptée au niveau fédéral.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes avocats sont toxiques pour les chats, Vrai ou Faux ?"){
            interaction.reply("**Bonne réponse !**\n\nL’avocat est un aliment toxique pour les chats, les chiens, les oiseaux ou encore les lapins ! L'avocat contient de la persine qui peut provoquer une détresse respiratoire sévère en moins de 12 heures après l'ingestion chez l’animal.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUne seule grenouille peut pondre jusqu’à 2000 œufs, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nUne grenouille verte va pondre 10.000 œufs et certaines espèces peuvent aller jusqu’à 20.000 œufs.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nTous les tanks britanniques sont équipés pour boire le thé, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nDepuis 1945, les tanks ont une théière pour éviter aux soldats de sortir de la machine à l’heure du thé. Lors de la Seconde Guerre Mondiale l’Angleterre perd 14 tanks d’un coup en 15 minutes car les soldats étaient sortis pour boire le thé dans l’herbe.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa muraille de Chine est visible à l'œil nu depuis l'espace dans la Station Internationale (ISS), Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nBasée à une hauteur de 400km de la Terre, l’ISS ne permet pas de voir la muraille de Chine contrairement aux idées reçues.')
        }


        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nA l'Euromillions, vous avez 1 chance sur 39 millions de remporter le gros lot, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nC’est encore plus dur car c’est 1 chance sur 139 millions... Bonne chance !')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUn être humain marche en moyenne l’équivalent d’un tour de la Terre tout au long de sa vie, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nEn réalité c’est environ 3 fois le tour de la terre soit 120.000 km et donc environ 4km par jour.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe chocolat est toxique pour les chiens, Vrai ou Faux ?"){
            interaction.reply("**Bonne réponse !**\n\nDonner du chocolat aux chiens peu provoquer une hyperactivité et dérègler son rythme cardiaque.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nIl est impossible de rêver et ronfler en même temps, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLe ronflement empêche le dormeur d’atteindre les phases profondes et paradoxales du sommeil. Les cycles de sommeil étant perturbés, la capacité à rêver peut également l’être.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe corps humain d’un adulte possède 119 os, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLe corps humain d’un adulte possède 206 os.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes huitres peuvent changer de sexe au moment de l’accouplement, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nUne huitre peut changer de sexe une fois par période de reproduction. Plus l’huitre est jeune plus elle est susceptible de changer de sexe.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nAu XVIIe siècle, les carottes n’étaient pas orange, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nA cette époque, les carottes qu’on trouvaient en Europe étaient majoritairement violettes. Depuis, la variété orange s’est imposée comme la plus populaire.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUn colibri d'Elena pèse aussi lourd qu’une pièce de 20 centimes d’euros, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nCet oiseau pèse en réalité moins lourd qu’une pièce de 5 centimes d’euros soit environ 2 grammes pour une taille de 5 cm.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe cheval ne se couche jamais, sauf quand il est malade, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLe cheval dort aussi bien debout que couché. La plupart du temps, il somnole debout, les yeux mi-clos, ce qui lui permet de prendre la fuite rapidement en cas de danger. Ce type de sommeil est très léger, et le cheval doit s’allonger pour pouvoir dormir plus profondément.\n\nLe cheval ne se couche que quand il se sent en sécurité, par exemple dans son box, ou au sein du troupeau. Il fait alors de courtes siestes de quelques minutes.\n\n(Lorsque le cheval dort debout, ses rotules arrière se bloquent en se déplaçant au-dessus du fémur, ce qui empêche la jambe de plier. Les muscles peuvent alors se relâcher, et le cheval s’appuie sur trois membres, en reposant ses membres arrière l’un après l’autre.)')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe béret est d’origine basque, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLe béret n’est pas d’origine basque, mais béarnaise. Il est né au sud de Pau. Au 15e siècle, les bergers des Pyrénées tricotaient eux-mêmes leurs bérets avec la laine des moutons.')
        }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe palmier est un arbre, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nD’un point de vue botanique, le palmier n’est pas un arbre, mais une plante géante de la famille des monocotylédones, dont font partie les orchidées, les céréales (maïs, blé, riz, etc.) et l’herbe à pelouse.\n\nIl n’a pas un tronc en bois, mais une tige pleine de moelle appelée "stipe", et il n’a pas des branches, mais des palmes.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’homme a plus de poils que la femme, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nLa femme possède autant de poils que l’homme, mais les siens sont plus fins et moins pigmentés. Ils sont souvent présents sous la forme d’un léger duvet peu visible, alors que l’homme possède plus de poils "terminaux" (poils longs, épais et pigmentés).')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUne femme divorcée doit attendre 300 jours avant de se remarier, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nJusqu’en 2004, la loi française imposait aux femmes divorcées et aux veuves un délai de 300 jours avant de se remarier. Ce délai, qui correspond au temps nécessaire à une grossesse, avait été instauré afin d’être sûr que la femme ne soit pas enceinte de son ancien époux.\n\nDepuis le 1er janvier 2005, la femme divorcée peut se remarier dès que le divorce est prononcé.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nAux États-Unis, il n’y a pas d’étage nº 13 dans les gratte-ciel"){
                interaction.reply('**Bonne réponse !**\n\nLe chiffre 13 est réputé porter malheur. C’est pourquoi les gratte-ciel américains n’ont pas d’étage nº 13. Parfois, il y a bien un treizième étage, mais il est vide, et les ascenseurs passent directement du douzième au quatorzième. D’autres fois, l’étage 13 est remplacé par un étage 12A ou M (M étant la 13e lettre de l’alphabet).')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe muscle le plus puissant du corps humain est la langue, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nLa langue n’est pas un muscle, mais un organe composé de dix-sept muscles différents.\n\nLe muscle le plus puissant, en terme de puissance absolue, est le grand fessier. Ce muscle, qui est le plus volumineux du corps humain, a pour rôle de tirer la cuisse vers l’arrière pendant la marche ou la course. C’est lui qui donne à la fesse l’essentiel de son volume, et qui nous permet de nous relever quand nous sommes assis.')
            }

             if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes cheveux et les ongles continuent de pousser après la mort, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nDès que le coeur s’arrête, les cellules ne sont plus irriguées en oxygène par le sang et elles meurent, ce qui interrompt les processus chimiques responsables de la pousse des cheveux et des ongles.\n\nAprès la mort, le corps se déshydrate et la peau se rétracte, laissant ainsi les poils et les ongles plus apparents, ce qui donne l’impression qu’ils continuent de pousser.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’éléphant est le seul animal qui ne peut pas sauter, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nL’éléphant est incapable de sauter à la verticale, car il est trop lourd, mais il n’est pas le seul. De nombreux autres animaux ne savent pas sauter (ex. : les tortues, les escargots et les huîtres), y compris chez les mammifères (ex. : les hippopotames et les paresseux).')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes chats voient dans le noir, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nL’œil du chat est très semblable au nôtre ; il consiste en la focalisation des rayons lumineux sur la rétine. Mais dans le noir, pas de rayons lumineux, donc pas de vue.\n\nCette affirmation vient en réalité d’une différence notable entre les yeux des hommes et des chats, améliorant notablement la vue de ces derniers dans un cadre peu lumineux ; en effet, non seulement le chat est doté d’une importante capacité à dilater sa pupille, recueillant ainsi plus de lumière, mais il possède également une membrane réfléchissante dernière la rétine, lui permettant d’exploiter au maximum la lumière absorbée (c’est d’ailleurs ce qui explique que les chats aient les yeux scintillants dans le noir).')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes yeux peuvent rester bloqués quand on louche, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nLoucher volontairement est sans danger. Les parents disent à leurs enfants que loucher est dangereux pour éviter qu’ils fassent des grimaces.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes, vrai ou faux ?"){
                interaction.reply('**Bonne réponse !**\n\nLe Wi-Fi émet des ondes radio dans une plage de fréquences qui va de 2,401 à 2,488 GHz. Or un four à micro-ondes émet des ondes radio à la fréquence de 2,45 GHz. Une partie de ces ondes s’échappe toujours de l’appareil, il n’est donc pas rare que les connexions Wi-Fi soient perturbées lorsqu’un four est mis en marche, en particulier les canaux Wi-Fi 9 et 10.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa couleur noire ou verte des olives ne dépend pas de la variété, mais du moment de la récolte, vrai ou faux ?"){
                interaction.reply('**Bonne réponse !**\n\nLes olives sont d’abord vertes, puis elles mûrissent en prenant une couleur violette, pour devenir noires à maturité complète. C’est donc la période de cueillette qui détermine la couleur de l’olive.\n\nLes olives sont amères et doivent être préparées pour les rendre consommables. Il existe différentes méthodes de "désamérisation", la plus simple étant de tremper les olives dans de l’eau renouvelée régulièrement. Elles sont ensuite généralement conditionnées dans une saumure (eau et sel).')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’ordinateur abîme les yeux, vrai ou faux ?"){
                interaction.reply('**Mauvaise réponse !**\n\nL’ordinateur fatigue les yeux, mais il ne les abîme pas.\nAucune étude n’a pu démontrer un quelconque lien entre l’émission de radiations par les écrans et l’apparition de maladies oculaires. En revanche, le travail sur écran peut révéler certains troubles visuels, car les défauts de la vue (myopie, presbytie, etc.) nous rendent plus sensibles à la fatigue.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nIl est impossible d’éternuer les yeux ouverts, vrai ou faux ?"){
                interaction.reply('**Bonne réponse !**\n\nL’éternuement est accompagné d’un réflexe de fermeture des paupières.\n\nUne légende dit que les yeux se ferment pour éviter de sortir de leur orbite sous l’effet de la pression. En réalité, ce réflexe n’a pas de but connu. Il existe probablement parce que les nerfs qui commandent le nez et les yeux sont étroitement liés, et que les stimuli de l’un déclenchent une réaction de l’autre.')
            }

            if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nCertaines pierres flottent sur l’eau, vrai ou faux ?"){
                interaction.reply('**Bonne réponse !**\n\nLa pierre ponce flotte sur l’eau. Cette pierre est formée par la lave des volcans. Elle flotte parce qu’elle contient de nombreuses bulles de gaz, emprisonnées par la lave qui refroidit rapidement.')
            }
        
    }
}

if(interaction.isButton()){ 
    if(interaction.customId == "Faux1"){
        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa langue officielle des États-Unis d’Amérique est l’anglais, Vrai ou Faux ?"){
            interaction.reply("**Bonne réponse !**\n\nL’anglais est la langue parlée par la majorité des Américains, mais elle n'a jamais été adoptée au niveau fédéral.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes avocats sont toxiques pour les chats, Vrai ou Faux ?"){
            interaction.reply("**Mauvaise réponse !**\n\nL’avocat est un aliment toxique pour les chats, les chiens, les oiseaux ou encore les lapins ! L'avocat contient de la persine qui peut provoquer une détresse respiratoire sévère en moins de 12 heures après l'ingestion chez l’animal.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUne seule grenouille peut pondre jusqu’à 2000 œufs, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nUne grenouille verte va pondre 10.000 œufs et certaines espèces peuvent aller jusqu’à 20.000 œufs.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nTous les tanks britanniques sont équipés pour boire le thé, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nDepuis 1945, les tanks ont une théière pour éviter aux soldats de sortir de la machine à l’heure du thé. Lors de la Seconde Guerre Mondiale l’Angleterre perd 14 tanks d’un coup en 15 minutes car les soldats étaient sortis pour boire le thé dans l’herbe.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa muraille de Chine est visible à l'œil nu depuis l'espace dans la Station Internationale (ISS), Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nBasée à une hauteur de 400km de la Terre, l’ISS ne permet pas de voir la muraille de Chine contrairement aux idées reçues.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nA l'Euromillions, vous avez 1 chance sur 39 millions de remporter le gros lot, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nC’est encore plus dur car c’est 1 chance sur 139 millions... Bonne chance !')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUn être humain marche en moyenne l’équivalent d’un tour de la Terre tout au long de sa vie, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nEn réalité c’est environ 3 fois le tour de la terre soit 120.000 km et donc environ 4km par jour.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe chocolat est toxique pour les chiens, Vrai ou Faux ?"){
            interaction.reply("**Mauvaise réponse !**\n\nDonner du chocolat aux chiens peu provoquer une hyperactivité et dérègler son rythme cardiaque.")
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nIl est impossible de rêver et ronfler en même temps, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLe ronflement empêche le dormeur d’atteindre les phases profondes et paradoxales du sommeil. Les cycles de sommeil étant perturbés, la capacité à rêver peut également l’être.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe corps humain d’un adulte possède 119 os, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLe corps humain d’un adulte possède 206 os.')
        }


        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes huitres peuvent changer de sexe au moment de l’accouplement, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nUne huitre peut changer de sexe une fois par période de reproduction. Plus l’huitre est jeune plus elle est susceptible de changer de sexe.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nAu XVIIe siècle, les carottes n’étaient pas orange, Vrai ou Faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nA cette époque, les carottes qu’on trouvaient en Europe étaient majoritairement violettes. Depuis, la variété orange s’est imposée comme la plus populaire.)')
        }
        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUn colibri d'Elena pèse aussi lourd qu’une pièce de 20 centimes d’euros, Vrai ou Faux ?"){
            interaction.reply('**Bonne réponse !**\n\nCet oiseau pèse en réalité moins lourd qu’une pièce de 5 centimes d’euros soit environ 2 grammes pour une taille de 5 cm.)')
        }
        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe cheval ne se couche jamais, sauf quand il est malade, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLe cheval dort aussi bien debout que couché. La plupart du temps, il somnole debout, les yeux mi-clos, ce qui lui permet de prendre la fuite rapidement en cas de danger. Ce type de sommeil est très léger, et le cheval doit s’allonger pour pouvoir dormir plus profondément.\n\nLe cheval ne se couche que quand il se sent en sécurité, par exemple dans son box, ou au sein du troupeau. Il fait alors de courtes siestes de quelques minutes.\n\n(Lorsque le cheval dort debout, ses rotules arrière se bloquent en se déplaçant au-dessus du fémur, ce qui empêche la jambe de plier. Les muscles peuvent alors se relâcher, et le cheval s’appuie sur trois membres, en reposant ses membres arrière l’un après l’autre.)')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nCertaines pierres flottent sur l’eau, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLa pierre ponce flotte sur l’eau. Cette pierre est formée par la lave des volcans. Elle flotte parce qu’elle contient de nombreuses bulles de gaz, emprisonnées par la lave qui refroidit rapidement.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nIl est impossible d’éternuer les yeux ouverts, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nL’éternuement est accompagné d’un réflexe de fermeture des paupières.\n\nUne légende dit que les yeux se ferment pour éviter de sortir de leur orbite sous l’effet de la pression. En réalité, ce réflexe n’a pas de but connu. Il existe probablement parce que les nerfs qui commandent le nez et les yeux sont étroitement liés, et que les stimuli de l’un déclenchent une réaction de l’autre.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’ordinateur abîme les yeux, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nL’ordinateur fatigue les yeux, mais il ne les abîme pas.\nAucune étude n’a pu démontrer un quelconque lien entre l’émission de radiations par les écrans et l’apparition de maladies oculaires. En revanche, le travail sur écran peut révéler certains troubles visuels, car les défauts de la vue (myopie, presbytie, etc.) nous rendent plus sensibles à la fatigue.')
        }
    
        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes yeux peuvent rester bloqués quand on louche, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLoucher volontairement est sans danger. Les parents disent à leurs enfants que loucher est dangereux pour éviter qu’ils fassent des grimaces.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’homme a plus de poils que la femme, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLa femme possède autant de poils que l’homme, mais les siens sont plus fins et moins pigmentés. Ils sont souvent présents sous la forme d’un léger duvet peu visible, alors que l’homme possède plus de poils "terminaux" (poils longs, épais et pigmentés).')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLa couleur noire ou verte des olives ne dépend pas de la variété, mais du moment de la récolte, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLes olives sont d’abord vertes, puis elles mûrissent en prenant une couleur violette, pour devenir noires à maturité complète. C’est donc la période de cueillette qui détermine la couleur de l’olive.\n\nLes olives sont amères et doivent être préparées pour les rendre consommables. Il existe différentes méthodes de "désamérisation", la plus simple étant de tremper les olives dans de l’eau renouvelée régulièrement. Elles sont ensuite généralement conditionnées dans une saumure (eau et sel).')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe béret est d’origine basque, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLe béret n’est pas d’origine basque, mais béarnaise. Il est né au sud de Pau. Au 15e siècle, les bergers des Pyrénées tricotaient eux-mêmes leurs bérets avec la laine des moutons.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe palmier est un arbre, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nD’un point de vue botanique, le palmier n’est pas un arbre, mais une plante géante de la famille des monocotylédones, dont font partie les orchidées, les céréales (maïs, blé, riz, etc.) et l’herbe à pelouse.\n\nIl n’a pas un tronc en bois, mais une tige pleine de moelle appelée "stipe", et il n’a pas des branches, mais des palmes.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nUne femme divorcée doit attendre 300 jours avant de se remarier, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nJusqu’en 2004, la loi française imposait aux femmes divorcées et aux veuves un délai de 300 jours avant de se remarier. Ce délai, qui correspond au temps nécessaire à une grossesse, avait été instauré afin d’être sûr que la femme ne soit pas enceinte de son ancien époux.\n\nDepuis le 1er janvier 2005, la femme divorcée peut se remarier dès que le divorce est prononcé.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nAux États-Unis, il n’y a pas d’étage nº 13 dans les gratte-ciel"){
            interaction.reply('**Mauvaise réponse !**\n\nLe chiffre 13 est réputé porter malheur. C’est pourquoi les gratte-ciel américains n’ont pas d’étage nº 13. Parfois, il y a bien un treizième étage, mais il est vide, et les ascenseurs passent directement du douzième au quatorzième. D’autres fois, l’étage 13 est remplacé par un étage 12A ou M (M étant la 13e lettre de l’alphabet).')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLe muscle le plus puissant du corps humain est la langue, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nLa langue n’est pas un muscle, mais un organe composé de dix-sept muscles différents.\n\nLe muscle le plus puissant, en terme de puissance absolue, est le grand fessier. Ce muscle, qui est le plus volumineux du corps humain, a pour rôle de tirer la cuisse vers l’arrière pendant la marche ou la course. C’est lui qui donne à la fesse l’essentiel de son volume, et qui nous permet de nous relever quand nous sommes assis.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes cheveux et les ongles continuent de pousser après la mort, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nDès que le coeur s’arrête, les cellules ne sont plus irriguées en oxygène par le sang et elles meurent, ce qui interrompt les processus chimiques responsables de la pousse des cheveux et des ongles.\n\nAprès la mort, le corps se déshydrate et la peau se rétracte, laissant ainsi les poils et les ongles plus apparents, ce qui donne l’impression qu’ils continuent de pousser.')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nL’éléphant est le seul animal qui ne peut pas sauter, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nL’éléphant est incapable de sauter à la verticale, car il est trop lourd, mais il n’est pas le seul. De nombreux autres animaux ne savent pas sauter (ex. : les tortues, les escargots et les huîtres), y compris chez les mammifères (ex. : les hippopotames et les paresseux).')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes chats voient dans le noir, vrai ou faux ?"){
            interaction.reply('**Bonne réponse !**\n\nL’œil du chat est très semblable au nôtre ; il consiste en la focalisation des rayons lumineux sur la rétine. Mais dans le noir, pas de rayons lumineux, donc pas de vue.\n\nCette affirmation vient en réalité d’une différence notable entre les yeux des hommes et des chats, améliorant notablement la vue de ces derniers dans un cadre peu lumineux ; en effet, non seulement le chat est doté d’une importante capacité à dilater sa pupille, recueillant ainsi plus de lumière, mais il possède également une membrane réfléchissante dernière la rétine, lui permettant d’exploiter au maximum la lumière absorbée (c’est d’ailleurs ce qui explique que les chats aient les yeux scintillants dans le noir).')
        }

        if(interaction.message.content === "**__Vrai ou Faux ?__**\n\nLes connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes, vrai ou faux ?"){
            interaction.reply('**Mauvaise réponse !**\n\nLe Wi-Fi émet des ondes radio dans une plage de fréquences qui va de 2,401 à 2,488 GHz. Or un four à micro-ondes émet des ondes radio à la fréquence de 2,45 GHz. Une partie de ces ondes s’échappe toujours de l’appareil, il n’est donc pas rare que les connexions Wi-Fi soient perturbées lorsqu’un four est mis en marche, en particulier les canaux Wi-Fi 9 et 10.')
        }
    }
}

    if(interaction.isCommand()){    
        if(interaction.commandName === "chifumi"){
            guild_id = interaction.guild.id
            let mention = interaction.options.getUser("utilisateur");
            if(bdd[interaction.guild.id]){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
            } else {
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
               } else {
                if(interaction.user.id == mention.id){
                    interaction.reply({content:"Vous ne pouvez pas créer de partie avec vous même !", ephemeral: true})
                } else {
                    if(mention.bot){
                     interaction.reply({content:"Vous ne pouvez pas créer de partie avec un bot !", ephemeral: true})  
                    } else  {
                interaction.reply({content:"<@" + interaction.user.id + "> et <@" + mention.id + "> Choisissez votre attaque !", components: [Pierre, Feuille, Ciseaux]})
                bdd[guild_id][interaction.channel.id] = {}
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"] = {}
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"] = {}
                bdd[guild_id][interaction.channel.id]["Utilisateur"] = []
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"]
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"]
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] = interaction.user.id
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] = mention.id
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] = "Non"
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] = "Non"
                bdd[guild_id][interaction.channel.id]["Utilisateur"].push(interaction.user.id)
                bdd[guild_id][interaction.channel.id]["Utilisateur"].push(mention.id)
                Savebdd()
                    }
                }
            }
        }
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                    var embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Erreur")
                    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                    interaction.reply({ embeds: [embed]})
            }
        }
    }
    var go = new Discord.MessageActionRow()
.addComponents(new Discord.MessageButton()
  .setCustomId("Jouer")
    .setLabel("Jouer")
    .setStyle("SUCCESS")
    
);

    if(interaction.isButton()){ 
        if(interaction.customId == "Pierre"){
            guild_id = interaction.guild.id
            if(bdd[guild_id][interaction.channel.id]["Utilisateur"].includes(interaction.user.id)){
            if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"]){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Pierre"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Pierre" !', ephemeral: true})
                } else {
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Pierre"
                bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] = "Oui"
                Savebdd()
                interaction.reply({content:'Vous avez choisis "Pierre" !', ephemeral: true})
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                    interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                    interaction.message.delete()
                } else {
                interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> !")
                }
            }
        
            }
            if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"]){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Pierre"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Pierre" !', ephemeral: true})
                } else {
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Pierre"
                bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] = "Oui"
                Savebdd()
                interaction.reply({content:'Vous avez choisis "Pierre" !', ephemeral: true})
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                    interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                    interaction.message.delete()
                } else {
                interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> !")
                }
            }
        
            }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
        
        }
    }

    if(interaction.isButton()){ 
        if(interaction.customId == "Feuille"){
            guild_id = interaction.guild.id
            if(bdd[guild_id][interaction.channel.id]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                        bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Feuille"
                         Savebdd()
                        interaction.reply({content:'Vous avez choisis "Feuille" !', ephemeral: true})
                    } else {
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Feuille"
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] = "Oui"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Feuille" !', ephemeral: true})
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                        interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                        interaction.message.delete()
                    } else {
                    interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> !")
                    }
                }
            
                }
                if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                        bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Feuille"
                        Savebdd()
                        interaction.reply({content:'Vous avez choisis "Feuille" !', ephemeral: true})
                    } else {
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Feuille"
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] = "Oui"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Feuille" !', ephemeral: true})
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                        interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                        interaction.message.delete()
                    } else {
                    interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> !")
                    }
                }
            
                }
            }  else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            
        }
    }

    if(interaction.isButton()){ 
        if(interaction.customId == "Ciseaux"){
            guild_id = interaction.guild.id
            if(bdd[guild_id][interaction.channel.id]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                        bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Ciseaux"
                        Savebdd()
                        interaction.reply({content:'Vous avez choisis "Ciseaux" !', ephemeral: true})
                    } else {
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] = "Ciseaux"
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] = "Oui"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Ciseaux" !', ephemeral: true})
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                        interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                        interaction.message.delete()
                    } else {
                    interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> !")
                    }
                }
            
                } 
                if(interaction.user.id == bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] == "Oui"){
                        bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Ciseaux"
                         Savebdd()
                        interaction.reply({content:'Vous avez choisis "Ciseaux" !', ephemeral: true})
                    } else {
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] = "Ciseaux"
                    bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["à-jouer"] = "Oui"
                    Savebdd()
                    interaction.reply({content:'Vous avez choisis "Ciseaux" !', ephemeral: true})
                    if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["à-jouer"] == "Oui"){
                        interaction.channel.send({content:"<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque !", components: [go]})
                        interaction.message.delete()
                    } else {
                    interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à choisis sont attaque ! Ont attent plus que vous <@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> !")
                    }
                }
            
                }
            }  else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            
        }
    }

    if(interaction.isButton()){ 
        if(interaction.customId == "Jouer"){
            guild_id = interaction.guild.id
            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Pierre"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Pierre"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chiffumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028355091889127545/unknown.png")
                        .setTimestamp()
                        .setDescription("Egalité !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Feuille"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Feuille"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chiffumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028354823306879017/unknown.png")
                        .setTimestamp()
                        .setDescription("Egalité !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Ciseaux"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Ciseaux"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028354575587086406/unknown.png")
                        .setTimestamp()
                        .setDescription("Egalité !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Ciseaux"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Pierre"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028343819667779614/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Pierre"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Ciseaux"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028343819667779614/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Pierre"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Feuille"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028341844913946685/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Feuille"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Pierre"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028341844913946685/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Feuille"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Ciseaux"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028345310679933009/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }

            if(bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["Attaque"] == "Ciseaux"){
                if(bdd[guild_id][interaction.channel.id]["Chifumijoueur2"]["Attaque"] == "Feuille"){
                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Chifumi")
                        .setImage("https://cdn.discordapp.com/attachments/1026096493708464168/1028345310679933009/unknown.png")
                        .setTimestamp()
                        .setDescription("<@" + bdd[guild_id][interaction.channel.id]["Chifumijoueur1"]["joueur"] + "> à gagner la partie !");
                        interaction.channel.send({ embeds: [embed]});
                        interaction.message.delete()
                }
            }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "addausort"){
            let mention = interaction.options.getUser("utilisateur");
            if(bdd[interaction.guild.id]){
                        if(bdd["Black_Liste"].includes(interaction.user.id)){
                            interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                        } else {
                            guild_id = interaction.guild.id
                            if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                                interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                            } else {
                                if(bdd[guild_id]["tirage_au_sort"]){
                             bdd[guild_id]["tirage_au_sort"].push("<@" + mention.id + ">")
                            Savebdd()
                        var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Tirage au sort")
                        .setTimestamp()
                        .setDescription("<@" + mention.id + "> à bien été ajouter au tirage au sort !\n\nListe des participants au tirage au sort:\n **" + bdd[guild_id]["tirage_au_sort"] + "**");
                        interaction.reply({ embeds: [embed]});
                                } else {
                                    bdd[guild_id]["tirage_au_sort"] = []
                                    bdd[guild_id]["tirage_au_sort"].push("<@" + mention.id + ">")
                                    Savebdd()
                                    var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Tirage au sort")
                        .setTimestamp()
                        .setDescription("<@" + mention.id + "> à bien été ajouter au tirage au sort !\n\nListe des participants au tirage au sort:\n **" + bdd[guild_id]["tirage_au_sort"] + "**");
                        interaction.reply({ embeds: [embed]});
                                }
                        }
                    }
                        } else {
                            const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                    var embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Erreur")
                    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                    interaction.reply({ embeds: [embed]})
        }
                    }
        }

        if(interaction.isCommand()){    
            if(interaction.commandName === "action"){
                let action1 = interaction.options.getString("action");
                if(bdd[interaction.guild.id]){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                } else {
                    guild_id = interaction.guild.id
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                } else {
                        bdd[guild_id]["action"].push("Action: " + action1)
                        if(bdd[guild_id]["action"]){
                            interaction.reply(":white_check_mark: " + action1 + " à bien été enregistrer comme une action ! :white_check_mark:")
                           Savebdd()
                           var embed = new Discord.MessageEmbed()
                                   .setColor("#0099ff")
                                   .setTitle("Configuration")
                                   .setTimestamp()
                                   .setDescription("<@" + interaction.user.id + "> à configurer **" + action1 + "** comme une action !");
                                   if(bdd[guild_id]["logs"] == "on"){
                                    Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                                   }
                        }
                   
                        
                          
                        }
                    }
                } else {
                    const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
                }
            }
        }

        if(interaction.isCommand()){    
            if(interaction.commandName === "vérité"){
                let action1 = interaction.options.getString("vérité");
                if(bdd[interaction.guild.id]){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                } else {
                    guild_id = interaction.guild.id
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                } else {
                        bdd[guild_id]["action"].push("Vérité: " + action1)
                        if(bdd[guild_id]["action"]){
                            interaction.reply(":white_check_mark: " + action1 + " à bien été enregistrer comme une vérité ! :white_check_mark:")
                           Savebdd()
                           var embed = new Discord.MessageEmbed()
                                   .setColor("#0099ff")
                                   .setTitle("Configuration")
                                   .setTimestamp()
                                   .setDescription("<@" + interaction.user.id + "> à configurer **" + action1 + "** comme une vérité !");
                                   if(bdd[guild_id]["logs"] == "on"){
                                   Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                                   }
                        }
                   
                        
                          
                        }
                    }
                } else {
                    const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
                }
            }
        }

        if(interaction.isCommand()){    
            if(interaction.commandName === "setlog"){
                const chanel = interaction.guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT')
                let mention = interaction.options.getChannel("salon");
                if(bdd[interaction.guild.id]){
                    if(interaction.member.permissions.has("MANAGE_MESSAGES")){
                    if(bdd["Black_Liste"].includes(interaction.user.id)){
                        interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                    } else {
                    guild_id = interaction.guild.id
                    if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                        interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                    } else {
                        if(bdd[guild_id]["logs"] == "off"){
                            interaction.reply({content:":x: Les logs sont désactiver ! (`/log + [on]` pour les activer). :x:", ephemeral: true})
                        } else {
                        bdd[guild_id]["Salon_Logs"] = mention.id
                        interaction.reply(":white_check_mark: le salon **<#" + bdd[guild_id]["Salon_Logs"] + "> ** à bien été définie comme le salon pour les logs ! :white_check_mark:")
                        Savebdd()
                        var embed = new Discord.MessageEmbed()
                                   .setColor("#0099ff")
                                   .setTitle("Configuration")
                                   .setTimestamp()
                                   .setDescription("<@" +interaction.user.id + "> à définis ce salon comme salon des logs !");
                                   try {
                                   Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]})
                                } catch (error){
                                    bdd[interaction.guild.id]["Salon_Logs"] = chanel.id
                                    Savebdd()
                                    interaction.channel.send({content:"Ce n'est pas un salon !\n\nLe salon <#" + chanel.id + "> à donc été déffinnie comme salon des logs", ephemeral: true})
                                   }}
                        
                    }
                }
                     } else {
                        interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande ! :x:", ephemeral: true})
                     }
                    } else {
                        const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
                    } 
            }
        }
    
        if(interaction.isCommand()){    
            if(interaction.commandName === "ban"){
                let mention = interaction.options.getMember("utilisateur");
                let raison = interaction.options.getString("raison");
                if(bdd[interaction.guild.id]){
                    if(interaction.member.permissions.has("BAN_MEMBERS")){
                    if(bdd["Black_Liste"].includes(interaction.user.id)){
                        message.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                    } else {
                        if(interaction.user.id == mention.id){
                            interaction.reply({content:"Vous ne pouvez vous bannir !", ephemeral: true})
                            } else {
                        guild_id = interaction.guild.id
                        if(bdd[guild_id]["ban"]["ban_id"].includes(mention.id)){
                            interaction.reply({content:"Ce membre est déjà banni !", ephemeral: true})
                        } else {
                        if(mention.bannable){
                            bdd[guild_id]["ban"]["ban_id"].push(mention.id)
                            bdd[guild_id]["ban"]["ban_name"].push("<@" + mention.id + "> ")
                            Savebdd()
                            var embed8 = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Actes de modérations")
                            .setTimestamp()
                            .setDescription("<@" + mention.id + "> à bien été banni des jeux !\n\nRaison: " + raison);
                            interaction.reply({ embeds: [embed8]})
                            var embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Actes de modérations")
                            .setTimestamp()
                            .setDescription("<@" + interaction.user.id + "> à banni des jeux <@" + mention.id + ">\n\nRaison: " + raison);
                            if(bdd[guild_id]["logs"] == "on"){
                            Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                            }
                            Client.user.fetch(interaction.mention, false).then((user) => {
                                var embed = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("Actes de modérations")
                                .setTimestamp()
                                .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                                .setDescription("Vous avez été banni des jeux sur le serveur **" + interaction.guild.name + "**.\n\nModérateur: <@" + interaction.user.id + ">\nRaison: " + raison + "\n\n*(Quand vous êtes banni de jeux sur un serveur vous ne pouvez plus: Crée des parties, participer à des jeux et utiliser certaines commandes sur le serveur en question)*");
                             mention.send({ embeds: [embed]}).catch(error => {
                             });
                            });
                            
                           
                            } else {
                                interaction.reply({content:"Impossible de bannir ce membre", ephemeral: true})
                            }
                        }
                        }
                     }
                    } else {
                        interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande ! :x:", ephemeral: true})
                     }
                     } else {
                        const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                    var embed = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("Erreur")
                        .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                        .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                        interaction.reply({ embeds: [embed]})
                    }
                    } 
            }

            if(interaction.isCommand()){    
                if(interaction.commandName === "viewban"){
                    if(bdd[interaction.guild.id]){
                        if(bdd["Black_Liste"].includes(interaction.id)){
                            message.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                        } else {
                        guild_id = interaction.guild.id
                        var embed = new Discord.MessageEmbed()
                    .setColor("#0099ff")
                    .setTitle("Liste des utilisateurs banni des jeux")
                    .setDescription("Voici les utilisateurs banni des jeux sur le serveur:\n\n " + bdd[guild_id]["ban"]["ban_name"]);
            
                    interaction.reply({ embeds: [embed]});
                        }
                    } else {
                        const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
                    }
                }
            }
            
            if(interaction.isCommand()){    
                if(interaction.commandName === "unban"){
                    let mention = interaction.options.getMember("utilisateur");
                    if(bdd[interaction.guild.id]){
                    if(interaction.member.permissions.has("BAN_MEMBERS")){
                    if(bdd["Black_Liste"].includes(interaction.user.id)){
                        interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                    } else {
                        if(interaction.user.id == mention.id){
                            interaction.reply({content:"Vous ne pouvez vous débannir !", ephemeral: true})
                            } else {
                    guild_id = interaction.guild.id
                     if( bdd[guild_id]["ban"]["ban_id"].includes(mention.id)){
                        bdd[guild_id]["ban"]["ban_id"] =  bdd[guild_id]["ban"]["ban_id"].filter(id => id != mention.id);
                        bdd[guild_id]["ban"]["ban_name"] =  bdd[guild_id]["ban"]["ban_name"].filter(id => id != "<@" + mention.id + "> ");
                        Savebdd()
                        var embed8 = new Discord.MessageEmbed()
                        .setColor("#00FF00")
                        .setTitle("Actes de modérations")
                        .setTimestamp()
                        .setDescription("<@" + mention.id + "> à bien été débanni des jeux !");
                        interaction.reply({ embeds: [embed8]})
                        var embed = new Discord.MessageEmbed()
                        .setColor("#00FF00")
                        .setTitle("Actes de modérations")
                        .setTimestamp()
                        .setDescription("<@" + interaction.user.id + "> à débanni des jeux <@" + mention.id + "> ");
                        if(bdd[guild_id]["logs"] == "on"){
                        Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                        }
                        Client.user.fetch(interaction.mention, false).then((user) => {
                            var embed6 = new Discord.MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle("Actes de modérations")
                            .setTimestamp()
                            .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                            .setDescription("Vous avez été débanni des jeux sur le serveur **" + interaction.guild.name + "**.\n\nModérateur: <@" + interaction.user.id + ">\n\n*(Vous pouvez désormais crée des parties, participer à des jeux et utiliser toutes les commandes sur le serveur en question.)*");
                         mention.send({ embeds: [embed6]}).catch(error => {
                        });
                        });
                    }else {
                        interaction.reply({content:"Ce membre n'est pas banni !", ephemeral: true}) 
                    }
                }
                     } 
                    } else {
                        interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande ! :x:", ephemeral: true})
                    }
                    } else {
                    const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                    var embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                     .setTitle("Erreur")
                     .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                    interaction.reply({ embeds: [embed]})
                }
            }
        }

    if(interaction.isCommand()){    
        if(interaction.commandName === "help"){
            if(bdd[interaction.guild.id]){
            var embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Liste des commandes")
        .setDescription("**__Information sur le bot:__**\n**-** __Préfix:__ `!G`\n**-** Il y'a toujours un espace entre le préfixe et la commande\nExemple:`!G exemple`\n\n**__Commande de jeu:__**\n`/actionvérité + [utilisateur]`: Pour lancer une partie d'Action ou Vérité\n`/viewav`: pour voir les actions et vérités qui ont été définie.\n`/ausort`: pour afficher la liste des commandes pour les tirages au sorts.\n`/chifumi + [utilisateur]`: pour jouer au chifumi avec un membre.\n`/vraioufaux`: pour jouer à un Vrai ou Faux\n\n**__Commande de configuration:__**\n`/logs + [on/off]`: pour activer ou désactiver les logs.\n`/setlog + [mention d'un salon]`: pour définir un salon de logs\n\n__Configuration des Actions ou Vérités:__\n`/action + [action à définir]`: pour définir une action pour les A/V\n`/vérité + [vérité à définir]`: pour définir une vérité pour les A/V\n`/delav`: pour supprimer toutes les actions et vérités qui ont été définie\n`/baseav`: pour ajouté les actions et vérités de base (les actions et vérités qui ont été définie serrons supprimer !)\n\n**__Commandes de modérations:__**\n`/ban + [utilisateur]`: pour bannir un membre de participer à des jeux, de crée des jeux et d'utiliser certaines commandes.\n`/viewban`: pour voir les utilisateurs banni des jeux.\n`/unban + [utilisateur]`: pour débannir un membre des jeux.\n\n__Bot crée par:__ <@677161285993103381>\n__Site web crée par:__ <@924685272698998824>\n\n[**Support Officiel**](https://discord.gg/PrG7mM3EAa)");

        interaction.reply({ embeds: [embed]});
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
    var embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Erreur")
    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
    interaction.channel.send({ embeds: [embed]})
            }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "viewav"){
            if(bdd[interaction.guild.id]){
            if(bdd["Black_Liste"].includes(interaction.id)){
                message.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
            } else {
            guild_id = interaction.guild.id
            var embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Liste des actions et vérités définie")
        .setDescription("Voici les actions et Vérités qui ont été définie:\n\n **" + bdd[guild_id]["action"] + "**");

        interaction.reply({ embeds: [embed]});
            }
        } else {
            const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
    var embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Erreur")
    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
    interaction.reply({ embeds: [embed]})
        }
        }
    }
    var Ouidel = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageButton()
      .setCustomId("Ouidel")
        .setLabel("Oui")
        .setStyle("SUCCESS")
        
 );

 var Nondel = new Discord.MessageActionRow()
 .addComponents(new Discord.MessageButton()
   .setCustomId("Nondel")
     .setLabel("Non")
     .setStyle("DANGER")
     
);


    if(interaction.isCommand()){    
        if(interaction.commandName === "delav"){
            if(interaction.guild.id){
               if(interaction.member.permissions.has("MANAGE_MESSAGES")){
               if(bdd["Black_Liste"].includes(interaction.user.id)){
                interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
               } else {
               guild_id = interaction.guild.id
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
               } else {
                interaction.reply({content:"Voulez-vous ajouter les Actions ou Vérités par défauts ?", components: [Ouidel, Nondel]})
               }
           }
            } else {
                interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande ! :x:", ephemeral: true})
            }
           } else {
               const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
       var embed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setTitle("Erreur")
       .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
       .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
       interaction.reply({ embeds: [embed]})
           }
        }
    }

    if(interaction.isButton()){ 
        if(interaction.customId == "Nondel"){
            if(interaction.guild.id){
            interaction.message.delete()
            delete bdd[guild_id]["action"];
            bdd[guild_id]["action"] = [];
            Savebdd();
            interaction.reply("<@" + interaction.user.id + "> Toutes les actions et vérités ont été supprimer !\n\n(`/action + [action à déffinir] pour déffinir une action`, `/vérité + [vérité à déffinir] pour déffinir une vérité`)")
            var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Configuration")
                .setTimestamp()
                .setDescription("<@" + interaction.user.id + "> à supprimer toutes les actions !");
                if(bdd[guild_id]["logs"] == "on"){
                Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                }
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
        var embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
        .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
        interaction.reply({ embeds: [embed]})
            }
        }
    }

    if(interaction.isButton()){ 
        if(interaction.customId == "Ouidel"){
            if(interaction.guild.id){
            interaction.message.delete()
            var base = ("Vérité: Quelle est la chose la plus bizarre que tu aies jamais mangée ? (un conseil : si la personne répond qu’il mange de la pizza à l’ananas, fuyez…")
            var base2 = ("Vérité: Que ferais-tu si tu recevais un chèque d’un million ? ")
            var base4 = ("Vérité: Quelle est ta plus grande honte ?  ")
            var base5 = ("Vérité: As-tu déjà triché à un examen ? ")
            var base6 = ("Vérité: De quoi as-tu le plus peur ?")
            var base7 = ("Vérité: Est-ce que tu as déjà menti pour que quelqu’un t’apprécie ? ")
            var base8 = ("Vérité: Quel était ton surnom quand tu étais petit(e) ? ")
            var base9 = ("Vérité: Dans combien de pays as-tu voyagé ? ")
            var base10 = ("Action: Rename toi sur ce serveur en ce que choisit une personnes du groupe")
            var base11 = ("Action: Envoie un MP à une personne et fait lui croire que tu crush sur lui/elle !")
            var base12 = ("Action: Fait un cadeau à une personne de la partie !")
            var base13 = ("Action: Envoie un screen de la dernière conversation en MP que tu a eu !")
            var base14 = ("Action: Fini toutes tes phrases pendant 2 tours par **Poisson** (ça commence maintenant !).")
            var base15 = ("Action: Envoie une photo de ta chambre **maintenant** (si t'a chambre n'est pas ranger une personne de la partie doit te donner un gage !).")
            var base16 = ("Action: Prank quelqu'un de ce serveur !")
            delete bdd[guild_id]["action"];
            bdd[guild_id]["action"] = [];
           bdd[guild_id]["action"].push(base, base14, base2, base10, base4, base5, base16, base6, base7,  base15, base8, base11, base12,base9, base13)
           Savebdd();
           interaction.reply("<@" + interaction.user.id + "> Toutes les Actions et Vérités déffinie ont bien été supprimer, les Action et Vérités par défauts ont été ajouter !")
           var embed = new Discord.MessageEmbed()
               .setColor("#0099ff")
               .setTitle("Configuration")
               .setTimestamp()
               .setDescription("<@" + interaction.user.id + "> à supprimer toutes les actions !\n\nLes actions et vérités par défauts ont été ajouté !");
               if(bdd[guild_id]["logs"] == "on"){
               Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
               }
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
        var embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
        .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
        interaction.reply({ embeds: [embed]})
            }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "baseav"){
            if(bdd[interaction.guild.id]){
                if(interaction.member.permissions.has("MANAGE_MESSAGES")){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                } else {
                guild_id = interaction.guild.id
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                } else {
                    var base = ("Vérité: Quelle est la chose la plus bizarre que tu aies jamais mangée ? (un conseil : si la personne répond qu’il mange de la pizza à l’ananas, fuyez…")
                var base2 = ("Vérité: Que ferais-tu si tu recevais un chèque d’un million ? ")
                var base4 = ("Vérité: Quelle est ta plus grande honte ?  ")
                var base5 = ("Vérité: As-tu déjà triché à un examen ? ")
                var base6 = ("Vérité: De quoi as-tu le plus peur ?")
                var base7 = ("Vérité: Est-ce que tu as déjà menti pour que quelqu’un t’apprécie ? ")
                var base8 = ("Vérité: Quel était ton surnom quand tu étais petit(e) ? ")
                var base9 = ("Vérité: Dans combien de pays as-tu voyagé ? ")
                var base10 = ("Action: Rename toi sur ce serveur en ce que choisit une personnes du groupe")
                var base11 = ("Action: Envoie un MP à une personne et fait lui croire que tu crush sur lui/elle !")
                var base12 = ("Action: Fait un cadeau à une personne de la partie !")
                var base13 = ("Action: Envoie un screen de la dernière conversation en MP que tu a eu !")
                var base14 = ("Action: Fini toutes tes phrases pendant 2 tours par **Poisson** (ça commence maintenant !).")
                var base15 = ("Action: Envoie une photo de ta chambre **maintenant** (si t'a chambre n'est pas ranger une personne de la partie doit te donner un gage !).")
                var base16 = ("Action: Prank quelqu'un de ce serveur !")
                delete bdd[guild_id]["action"];
                bdd[guild_id]["action"] = [];
               Savebdd();
               bdd[guild_id]["action"].push(base, base14, base2, base10, base4, base5, base16, base6, base7,  base15, base8, base11, base12,base9, base13)
               Savebdd();
               interaction.reply("Les actions et vérité définie ont été supprimer et les actions et vérités de base ont bien été ajouté ! ")
               var embed = new Discord.MessageEmbed()
                   .setColor("#0099ff")
                   .setTitle("Configuration")
                   .setTimestamp()
                   .setDescription("<@" + interaction.user.id + "> à supprimer toutes les actions !\n\nLes actions et vérités par défauts ont été ajouté !");
                   if(bdd[guild_id]["logs"] == "on"){
                   Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                   }
                }
            }
            } else {
                interaction.reply({content:":x: Vous n'avez pas les permission pour éxécuter cette commande ! :x:", ephemeral: true})
            }
        } else {
            const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
    var embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Erreur")
    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
    interaction.reply({ embeds: [embed]})
        }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "ausort"){
            const invite = await interaction.channel.createInvite({ 
                    maxAge: 0, // 0 = infinite expiration
                    maxUses: 0 // 0 = infinite uses
                }).catch(console.error);
                bdd[interaction.guild.id]["Invitation"] = invite
                    Savebdd()
            if(bdd[interaction.guild.id]){
                var embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("Tirage au sort")
                        .setTimestamp()
                        .setDescription("- Pour ajouter des participants au tirage au sort: `/addausort + [utilisateur]`\n- pour éffacer les participants enregistrer: `/delausort`\n- Pour lancer le tirage au sort: `/tirage`");
                        interaction.reply({ embeds: [embed]});
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Erreur")
                .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                interaction.reply({ embeds: [embed]})
            }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "tirage"){
            const invite = await interaction.channel.createInvite({ 
                maxAge: 0, // 0 = infinite expiration
                maxUses: 0 // 0 = infinite uses
            }).catch(console.error);
            bdd[interaction.guild.id]["Invitation"] = invite
                Savebdd()
            if(bdd[interaction.guild.id]){
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                } else {
                    guild_id = interaction.guild.id
                    if(bdd[guild_id]["tirage_au_sort"]){
                        var action = bdd[guild_id]["tirage_au_sort"]
                        var keys = Object.keys(action)
                        var randIndex = Math.floor(Math.random() * keys.length)
                        var randKey = keys[randIndex]
                        var name = action[randKey]
                        var embed = new Discord.MessageEmbed()
                    .setColor("#0099ff")
                    .setTitle("Tirage au sort")
                    .setTimestamp()
                    .setDescription("La personne qui à été tirer au sort est: **" + name + "**");
                    interaction.reply({ embeds: [embed]});
                    } else {
                        interaction.reply({content:":x: Aucune personne ne participe au tirage au sort !\n\n(`/addausort + [utilisateur]` pour ajouter un membre au tirage au sort.) :x:", ephemeral: true})
                }
            }
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
            var embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Erreur")
            .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
            .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
            interaction.reply({ embeds: [embed]})
            }
        }
    }

    if(interaction.isCommand()){    
        if(interaction.commandName === "delausort"){
            if(bdd[interaction.guild.id]){
                if(interaction.member.permissions.has("MANAGE_MESSAGES")){
                    if(bdd["Black_Liste"].includes(interaction.user.id)){
                        interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas éxécuter cette commande ! :x:", ephemeral: true})
                    } else {
                guild_id = interaction.guild.id
                if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                    interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas éxecuter cette commande !", ephemeral: true})
                } else {
                    delete bdd[guild_id]["tirage_au_sort"];
                Savebdd()
                    interaction.reply("Désormais plus aucun membres ne participe au tirage au sort !")
                    var embed = new Discord.MessageEmbed()
                   .setColor("#0099ff")
                   .setTitle("Configuration")
                   .setTimestamp()
                   .setDescription("<@" + interaction.user.id + "> à supprimer touts les utilisateurs qui participaient au tirage au sort !");
                   if(bdd[guild_id]["logs"] == "on"){
                   Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                   }
                }
            }
            } else {
                interaction.reply({content:":x: Vous n'avez pas les permissions pour éxécuter cette commande !", ephemeral: true})
            }
        } else {
            const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
        var embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
        .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
        interaction.reply({ embeds: [embed]})
        }
           
        }

    }

    var row = new Discord.MessageActionRow()
   .addComponents(new Discord.MessageButton()
     .setCustomId("action/vérité")
       .setLabel("Crée une partie")
       .setStyle("SUCCESS")
       
);

var row2 = new Discord.MessageActionRow()
.addComponents(new Discord.MessageButton()
  .setCustomId("Non")
    .setLabel("Ne pas crée la partie")
    .setStyle("DANGER")
    
);
    if(interaction.isCommand()){    
        if(interaction.commandName === "actionvérité"){
            let mention = interaction.options.getUser("utilisateur");
            if(bdd[interaction.guild.id]){
                        guild_id = interaction.guild.id
                        if(mention.id == interaction.user.id){
                            interaction.reply({content:"Vous ne pouvez pas crée de partie avec vous même !", ephemeral: true})
                        } else {
                            if(mention.bot){
                                interaction.reply({content:"Vous ne pouvez pas créer de partie avec un bot !", ephemeral: true})  
                               } else {
                            if(bdd["Black_Liste"].includes(interaction.user.id)){
                                interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas crée de partie ! :x:", ephemeral: true})
                            } else {
                                if(bdd["Black_Liste"].includes(mention.id)){
                                    interaction.reply({content:":x: L'un de nos Modérateur à banni cette utilisateur, il ne peux donc pas participer à des jeux !  :x:", ephemeral: true})
                                } else {
                            if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                                interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas crée de partie !", ephemeral: true})
                            } else {
                                if(bdd[guild_id]["ban"].includes(mention.id)){
                                    interaction.reply({content:"Un modérateur du serveur à banni ce membre, il ne peux donc pas participer à des jeux !", ephemeral: true})
                                } else {
                                    bdd[guild_id]["joueur1"] = interaction.user.id
                                    bdd[guild_id]["joueur2"] = mention.id
                                    Savebdd()
                                    interaction.reply({content: "Êtes vous sure de vouloir crée une partie avec <@" + mention.id + "> ?", components: [row, row2]
                                });
                                }
                            
                            
                }
            }
        }
            }
            }
                } else {
                    const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
                    var embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Erreur")
                    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
                    .setDescription(`${error}` +  " Un problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
                   interaction.reply({ embeds: [embed]}) 
                }
            } 
    }
    
    
    var row1 = new Discord.MessageActionRow()
   .addComponents(new Discord.MessageButton()
     .setCustomId("action/véritéGo")
       .setLabel("Commencer à jouer")
       .setStyle("SUCCESS")
);

var del1 = new Discord.MessageActionRow()
   .addComponents(new Discord.MessageButton()
     .setCustomId("stopnow")
       .setLabel("Terminer la partie maintenant")
       .setStyle("DANGER")
);
                
    if(interaction.isButton()){ 
        if(interaction.customId == "action/vérité"){
            guild_id = interaction.guild.id
            interaction.message.delete();
            if(bdd[guild_id]["joueur2"]){

                interaction.reply({content: "Votre partie à bien été crée !", ephemeral: true});
                bdd[guild_id]["joueur1"] = interaction.user.id
            Savebdd() 

            var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Partie crée")
            .setTimestamp()
            .setDescription("<@" + bdd[guild_id]["joueur1"] + "> à crée une partie d'action ou vérité avec <@" + bdd[guild_id]["joueur2"] + "> !");
            if(bdd[guild_id]["logs"] == "on"){
            Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
            }

                interaction.guild.channels.create("action-vérité-" + interaction.user.username,{
                   
                }).then(channel => {
                    channel.send("<@" + interaction.user.id + "> et <@"+ bdd[guild_id]["joueur2"] +"> Votre partie à bien été crée !")
                    channel.permissionOverwrites.edit(interaction.user.id, { VIEW_CHANNEL: true});
                    channel.permissionOverwrites.edit(bdd[guild_id]["joueur2"], { VIEW_CHANNEL: true});

                 bdd[guild_id][channel.id] = {}
                bdd[guild_id][channel.id]["joueur1"] = bdd[guild_id]["joueur1"]
                bdd[guild_id][channel.id]["joueur2"] = bdd[guild_id]["joueur2"]
                delete bdd[guild_id]["joueur1"]
                bdd[guild_id]["joueur1"] = ""
                delete bdd[guild_id]["joueur2"]
                bdd[guild_id]["joueur2"] = ""
                Savebdd()
                channel.send({content: "Appuyer sur le bouton pour commencer à jouer !", components: [row1, del1]

                });
                })
                
            }
          }
        }
        if(interaction.isButton()){ 
            if(interaction.customId == "Non"){
                interaction.message.delete()
                interaction.reply({content: ":white_check_mark: La partie n'a pas été crée ! :white_check_mark: ", ephemeral: true});

            
            }
        }

        var row2 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo2")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n1/8", components: [row2, del1]
            });
            }
        }

        if(interaction.isButton()){ 
            if(interaction.customId == "stopnow"){
                guild_id = interaction.guild.id
                interaction.channel.delete();
                var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Partie terminée")
                .setTimestamp()
                .setDescription("<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> et <@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> ont terminée leurs partie d'action ou vérité !");
                delete bdd[guild_id][interaction.channel.id]
                delete bdd[guild_id][interaction.channel.id]
                Savebdd()
                if(bdd[guild_id]["logs"] == "on"){
                    Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                    }
            }
        }


        


        var row3 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo3")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo2"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n2/8", components: [row3, del1]
            });
            }
        }

        var row4 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo4")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo3"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n3/8", components: [row4, del1]
            });
            }
        }

        var row5 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo5")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo4"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n4/8", components: [row5, del1]
            });
            }
        }

        var row6 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo6")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo5"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n5/8", components: [row6, del1]
            });
            }
        }

        var row7 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo7")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo6"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n6/8", components: [row7, del1]
            });
            }
        }

        var row8 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéGo8")
            .setLabel("Faire jouer le prochain joueur")
            .setStyle("SUCCESS")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo7"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.message.delete()
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> C'est à votre tour de jouer !\n\n" + name + "\n\n7/8", components: [row8, del1]
            });
            }
        }

        var row10 = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("action/véritéStop")
            .setLabel("Supprimer le salon")
            .setStyle("DANGER")
     );
        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéGo8"){
                guild_id = interaction.guild.id
                var action = bdd[guild_id]["action"]
                var keys = Object.keys(action)
                var randIndex = Math.floor(Math.random() * keys.length)
                var randKey = keys[randIndex]
                var name = action[randKey]
                interaction.reply({content: "<@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> C'est à votre tour de jouer !\n" + name + "\n\n8/8\n\n<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> et <@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> C'est la fin de la partie ! Appuyer sur le bouton pour supprimer le salon !\n\n", components: [row10]
            });
            }
        }

        if(interaction.isButton()){ 
            if(interaction.customId == "action/véritéStop"){
                 guild_id = interaction.guild.id
                interaction.channel.delete();
            var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Partie terminée")
            .setTimestamp()
            .setDescription("<@" + bdd[guild_id][interaction.channel.id]["joueur1"] + "> et <@" + bdd[guild_id][interaction.channel.id]["joueur2"] + "> ont terminée leurs partie d'action ou vérité !");
            delete bdd[guild_id][interaction.channel.id]
            delete bdd[guild_id][interaction.channel.id]
            Savebdd()
            if(bdd[guild_id]["logs"] == "on"){
                Client.channels.cache.get(bdd[guild_id]["Salon_Logs"]).send({ embeds: [embed]});
                }

            }
        }

        if(interaction.isButton()){
            var règlement = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
              .setCustomId("reglement")
                .setLabel("Accepter le règlement")
                .setStyle("SUCCESS")
         );

            if(interaction.customId == "reglement"){
                if(interaction.member.roles.cache.has("1008374687035834429")){
                
                    interaction.reply({content: "Vous avez déjà accepter le règlement !", ephemeral: true});  
    
            } else {
                interaction.member.roles.add("1008374687035834429");
                console.log("Un membre à accepter le règlement !");
                interaction.reply({content: "Vous avez accepter le règlement !\n\nVous avez désormais accès au serveur", ephemeral: true});
    
                var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Règlement")
                .setTimestamp()
                .setFooter({ text: 'GameCreator © | Support', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                .setDescription("<@" + interaction.user.id + "> à accepter le règlement !");
                
                Client.channels.cache.get("1022159305471971399").send({ embeds: [embed]});
            }
    
        }
            
            
        }

        if(interaction.isCommand()){    
            if(interaction.commandName === "morpion"){
    
                var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setDescription("Oups c'est gênant... Cette commande est encore en développement !");
                
                interaction.reply({ 
                    ephemeral: true,
                    embeds: [embed]
                })
                /*
                let mention = interaction.options.getUser("utilisateur");
                guild_id = interaction.guild.id
                if(bdd["Black_Liste"].includes(interaction.user.id)){
                    interaction.reply({content:":x: Vous avez été banni par l'un de nos Modérateur, vous ne pouvez donc pas jouer à ce jeu ! :x:", ephemeral: true})
                } else {
                    if(bdd[guild_id]["ban"]["ban_id"].includes(interaction.user.id)){
                        interaction.reply({content:"Un modérateur du serveur vous à banni des jeux, vous ne pouvez donc pas jouer à ce jeu !", ephemeral: true})
                    } else {
                        if(bdd["Black_Liste"].includes(mention.id)){
                            interaction.reply({content:":x: Cette utilisateur été banni par l'un de nos Modérateur, il ne peut donc pas jouer à ce jeu ! :x:", ephemeral: true})
                        } else {
                        if(bdd[guild_id]["ban"].includes(mention.id)){
                        interaction.reply({content:"Un modérateur du serveur à banni des jeux cette utilisateur, il ne peut donc pas jouer à ce jeu !", ephemeral: true})
                        } else {
                        if(interaction.user.id == mention.id){
                        interaction.reply({content:"Vous ne pouvez pas créer de partie avec vous même !", ephemeral: true})
                        } else {
                            if(mention.bot){
                                interaction.reply({content:"Vous ne pouvez pas créer de partie avec un bot !", ephemeral: true})  
                                } else  {
                var select = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageSelectMenu()
                    .setCustomId("select")
                    .setPlaceholder("Séléctionner une case.")
                    .addOptions([
                        {
                            label: "1",
                            description: "Case N°1",
                            value: "case 1"
                        },
                        {
                            label: "2",
                            description: "Case N°2",
                            value: "case 2"
                        },
                        {
                            label: "3",
                            description: "Case N°3",
                            value: "case 3"
                        },
                        {
                            label: "4",
                            description: "Case N°4",
                            value: "case 4"
                        },
                        {
                            label: "5",
                            description: "Case N°5",
                            value: "case 5"
                        },
                        {
                            label: "6",
                            description: "Case N°6",
                            value: "case 6"
                        },
                        {
                            label: "7",
                            description: "Case N°7",
                            value: "case 7"
                        },
                        {
                            label: "8",
                            description: "Case N°8",
                            value: "case 8"
                        },
                        {
                            label: "9",
                            description: "Case N°9",
                            value: "case 9"
                        }
                    ])
                )
                const case1 = Client.emojis.cache.find(emoji => emoji.name === "1morpion");
                const case2 = Client.emojis.cache.find(emoji => emoji.name === "2morpion");
                const case3 = Client.emojis.cache.find(emoji => emoji.name === "3morpion");
                const case4 = Client.emojis.cache.find(emoji => emoji.name === "4morpion");
                const case5 = Client.emojis.cache.find(emoji => emoji.name === "5morpion");
                const case6 = Client.emojis.cache.find(emoji => emoji.name === "6morpion");
                const case7 = Client.emojis.cache.find(emoji => emoji.name === "7morpion");
                const case8 = Client.emojis.cache.find(emoji => emoji.name === "8morpion");
                const case9 = Client.emojis.cache.find(emoji => emoji.name === "9morpion");
                bdd[guild_id][interaction.channel.id + " morpion"] = {}
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"] = {}
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"] = {}
                bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"] = []
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] = interaction.user.id
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] = mention.id
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].push(interaction.user.id)
                bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].push(mention.id)
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = "0"
                bdd[guild_id][interaction.channel.id + " morpion"]["case1"] = "1️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case2"] = "2️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case3"] = "3️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case4"] = "4️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case5"] = "5️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case6"] = "6️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case7"] = "7️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case8"] = "8️⃣"
                bdd[guild_id][interaction.channel.id + " morpion"]["case9"] = "9️⃣"
                Savebdd()
                var embed = new Discord.MessageEmbed()
                    .setColor("#1485E0")
                    .setTitle("Morpion")
                    .setDescription(`**__Joueurs:__**\n<@` + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + `>: ❌\n<@` + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + `>: 🔴`);
                    interaction.reply({content: bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"],components: [select]})
                    interaction.channel.send({ embeds: [embed]})
                }
                }
                }
                }
                }
                }*/
            }
        }
    /*
        if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                if(interaction.values == "case 1"){
                    guild_id = interaction.guild.id  
                    if(bdd[interaction.guild.id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                        if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                                interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true})
                            } else {
                               if(bdd[guild_id][interaction.channel.id + " morpion"]["Case 1"] == "Oui") {
                                interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                               } else {
                                bdd[guild_id][interaction.channel.id + " morpion"]["case1"] = "❌"
                                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                                bdd[guild_id][interaction.channel.id + " morpion"]["Case 1"] = "Oui"
                                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                                Savebdd()
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !");
                                } else {
                                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌"){
                                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !");
                                    } else {
                                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌"){
                                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !");
                                        } else {
                                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
    
                                            } else {
                                                interaction.channel.send("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !");
                                            }
                                        } 
                                    }
                                }
                               }
                            }
                        }
    
                        if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                                interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                            } else {
                               if(bdd[guild_id][interaction.channel.id + " morpion"]["Case 1"] == "Oui") {
                                interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                               } else {
                                bdd[guild_id][interaction.channel.id + " morpion"]["case1"] = "🔴"
                                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                                bdd[guild_id][interaction.channel.id + " morpion"]["Case 1"] = "Oui"
                                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                                Savebdd()
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !");
                                } else {
                                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴"){
                                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !"); 
                                    } else {
                                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴"){
                                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !");  
                                        } else {
                                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !");
                                            } else {
                                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !");  
                                            }
                                        }
                                    }
                                }
                               }
                            }
                        }
                    } else {
                        interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true});
                    }
                }
            }
        }
    
    
    
    
    
        if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                if(interaction.values == "case 2"){
                    guild_id = interaction.guild.id
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                    if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                            interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                        } else {
                        if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 2"] == "Oui"){
                            interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                        } else {
                            bdd[guild_id][interaction.channel.id + " morpion"]["case2"] = "❌"
                            Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 2"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                }
                }
                }
                    
                    if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                            interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                        } else {
                        if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 2"] == "Oui"){
                            interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                        } else {
                            bdd[guild_id][interaction.channel.id + " morpion"]["case2"] = "🔴"
                            Savebdd()
                        interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                        bdd[guild_id][interaction.channel.id + " morpion"]["Case 2"] = "Oui"
                        bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                        bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                        bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                        Savebdd()
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "🔴"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                    }
                    }
                    }
                    }
                    }
                    }
                } else {
                    interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
                }
                } 
                } 
                }
        
            
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 3"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 3"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case3"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 3"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 3"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case3"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 3"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueu2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    }
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 4"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 4"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case4"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 4"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
            }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 4"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case4"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 4"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                } 
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            } 
            }
    
        }
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 5"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 5"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case5"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 5"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 5"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case5"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 5"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    }
    
    
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 6"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 6"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case6"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 6"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 6"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case6"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 6"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    }
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 7"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 7"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case7"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 7"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 7"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case7"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 7"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case4"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    }
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 8"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 8"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case8"] = "❌"
                        Savebdd()
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 8"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                        } else {
                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
            }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 8"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case8"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 8"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case2"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    }
    
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            if(interaction.values == "case 9"){
                guild_id = interaction.guild.id
                if(bdd[guild_id][interaction.channel.id + " morpion"]["Utilisateur"].includes(interaction.user.id)){
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["Case 9"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case9"] = "❌"
                interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                bdd[guild_id][interaction.channel.id + " morpion"]["Case 9"] = "Oui"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "ne-joue-pas"
                bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "doit-jouer"
                bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                Savebdd()
                if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                } else {
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                      //  interaction.message.delete()
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                            //interaction.message.delete()
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "❌", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "❌"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> à gagner la partie !")
                                //interaction.message.delete()
                            } else {
                         interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> C'est à vous de jouer !")
                        }
                        }
                        }
            }
            }
            }
                }
                }
    
                if(interaction.user.id === bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"]){
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] == "doit-jouer"){
                        interaction.reply({content:"C'est à <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> de jouer !", ephemeral: true}) 
                    } else {
                    if( bdd[guild_id][interaction.channel.id + " morpion"]["Case 9"] == "Oui"){
                        interaction.reply({content:"Cette case à déjà été jouer !", ephemeral: true})
                    } else {
                        bdd[guild_id][interaction.channel.id + " morpion"]["case9"] = "🔴"
                        Savebdd()
                    interaction.message.edit(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] + bdd[guild_id][interaction.channel.id + " morpion"]["case2"] + bdd[guild_id][interaction.channel.id + " morpion"]["case3"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case4"] + bdd[guild_id][interaction.channel.id + " morpion"]["case5"] + bdd[guild_id][interaction.channel.id + " morpion"]["case6"] + "\n" + bdd[guild_id][interaction.channel.id + " morpion"]["case7"] + bdd[guild_id][interaction.channel.id + " morpion"]["case8"] + bdd[guild_id][interaction.channel.id + " morpion"]["case9"])
                    bdd[guild_id][interaction.channel.id + " morpion"]["Case 9"] = "Oui"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["jouer"] = "doit-jouer"
                    bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] = "ne-joue-pas"
                    bdd[guild_id][interaction.channel.id + " morpion"]["coup"] = ++nbcoup
                    Savebdd()
                    if(bdd[guild_id][interaction.channel.id + " morpion"]["coup"] == 9){
                        interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> et <@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["jouer"] + "> Très belle partie ! Vous êtes à égalité !")
                    } else {
                        if(bdd[guild_id][interaction.channel.id + " morpion"]["case7"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case8"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                            interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
                        } else {
                            if(bdd[guild_id][interaction.channel.id + " morpion"]["case1"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case5"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴"){
                                interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
    
                            } else {
                                if(bdd[guild_id][interaction.channel.id + " morpion"]["case9"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case6"] == "🔴", bdd[guild_id][interaction.channel.id + " morpion"]["case3"] == "🔴"){
                                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur2"]["joueur"] + "> à gagner la partie !")
        
                                } else {
                    interaction.reply("<@" + bdd[guild_id][interaction.channel.id + " morpion"]["morpionjoueur1"]["joueur"] + "> C'est à vous de jouer !")
                }
                }
                }
                }
                    }
                }
                }
            } else {
                interaction.reply({content:"Vous ne participez pas à la partie !", ephemeral: true})
            }
            }
    
        }
    */

});
Client.on("messageCreate", async message => {
    if (message.author.bot) return;
   
    var row = new Discord.MessageActionRow()
   .addComponents(new Discord.MessageButton()
     .setCustomId("action/vérité")
       .setLabel("crée une partie")
       .setStyle("SUCCESS")
       
);

var row2 = new Discord.MessageActionRow()
.addComponents(new Discord.MessageButton()
  .setCustomId("Non")
    .setLabel("Ne pas crée la partie")
    .setStyle("DANGER")
    
);

if(message.content.startsWith(prefix + " a/v")){
    var embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Commande dépasser")
    .setDescription("Cette commande à été modifier en Salsh Commmande (`/actionvérité + [utilisateur]`)");
    message.channel.send({ embeds: [embed]}) 
   }
   if (message.content === prefix + " ausort"){
    var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/ausort`)");
            message.channel.send({ embeds: [embed]})  
   }

   if(message.content.startsWith(prefix + " addausort")){
    var embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Commande dépasser")
    .setDescription("Cette commande à été modifier en Salsh Commmande (`/addausort + [utilisateur]`)");
    message.channel.send({ embeds: [embed]})
    }
        if(message.content === prefix + " delausort"){
            var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/delausort`)");
            message.channel.send({ embeds: [embed]}) 
       }

       if(message.content === prefix + " tirage"){
        var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/tirage`)");
            message.channel.send({ embeds: [embed]})  
       }

    if(message.content.startsWith(prefix + " setlog")){
        var embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Commande dépasser")
        .setDescription("Cette commande à été modifier en Salsh Commmande (`/setlog + [salon]`)");
        message.channel.send({ embeds: [embed]})  
    }


    if(message.content.startsWith(prefix + " action")){
        var embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Commande dépasser")
        .setDescription("Cette commande à été modifier en Salsh Commmande (`/action + [action à configurer]`)");
        message.channel.send({ embeds: [embed]}) 
         }

         if(message.content.startsWith(prefix + " vérité")){
            var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/vérité + [vérité à configurer]`)");
            message.channel.send({ embeds: [embed]}) 
        
                 }


         if(message.content === prefix + " dela/v"){
            var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/delav`)");
            message.channel.send({ embeds: [embed]})  
        }


            if(message.content === prefix + " basea/v"){
                var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/baseav`)");
            message.channel.send({ embeds: [embed]})
           }

        if(message.content === "<@1002234921944895589>"){
            message.reply("Mon préfixe  est: `!G`\n\nVous pouvez éxécuter la commande `/help` pour voir la liste des commandes !")
        }
       
            if(message.content.startsWith(prefix + " ban")){
                var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/ban + [utilisateur]`)");
            message.channel.send({ embeds: [embed]})  
            }

                if(message.content.startsWith(prefix + " unban")){
                    var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commande dépasser")
            .setDescription("Cette commande à été modifier en Salsh Commmande (`/unban + [utilisateur]`)");
            message.channel.send({ embeds: [embed]}) 
                }          


                    if(message.content.startsWith(prefix + " blackliste")){
                        if(bdd["Adminitrateurs"].includes(message.author.id)){
                        let mention = message.mentions.users.first();
                        if(mention == undefined){
                            message.reply("Utilisateur non ou mal mentionné.");
                            
                         }
                         else {
                            if(bdd["Black_Liste"].includes(mention.id)){
                                message.reply("Cette utilisateur est déjà black-lister !")
                                
                            } else {
                                
                            bdd["Black_Liste"].push(mention.id)
                            Savebdd()
                            message.reply("<@" + mention.id + "> à bien été black-liste !")
                            
                            Client.user.fetch(message.mentions.users, false).then((user) => {
                                var embed = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("Actes de modérations")
                                .setTimestamp()
                                .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                                .setDescription("<@" + mention.id + "> L'un de nos Modérateur vous a banni de **GameCreator Bot** ! Vous ne pouvez donc plus éxécuter de commandes, participer à des jeux ou d'y jouer\n\nSi vous souhaiter contester cette action rendez-vous sur le serveur [support](https://discord.gg/PrG7mM3EAa) de **GameCreator Bot**");
                                
                    
                             mention.send({ embeds: [embed]});
                            });

                         }
                        }
                    } else {
                        message.reply(":x: Vous n'êtes pas un modérateur du bot ! :x:")
                        
                    }

                }
                if(message.content.startsWith(prefix + " unblackliste")){
                    
                     if(bdd["Adminitrateurs"].includes(message.author.id)){
                    let mention = message.mentions.users.first();
                    if(mention == undefined){
                        message.reply("Membre non ou mal mentionné.");
                        
                     }
                     if(bdd["Black_Liste"].includes(mention.id)){
                        bdd["Black_Liste"] = bdd["Black_Liste"].filter(id => id != mention.id);
                        Savebdd()
                        message.reply("<@" + mention.id + "> n'est plus blackliste !")
                        
                        Client.user.fetch(message.mentions.users, false).then((user) => {
                            var embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Actes de modérations")
                            .setTimestamp()
                            .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                            .setDescription("<@" + mention.id + "> L'un de nos Modérateur vous a unban de **GameCreator Bot** ! Vous pouvez désormais réutiliser les commandes, crée des jeux et y participer !");
                         mention.send({ embeds: [embed]});
                        });
                     }
                     else {
                    message.reply("Ce membre n'est pas blackl-iste !")
                    
                     }
                    } else {
                        message.reply(":x: Vous n'êtes pas un modérateur du bot ! :x:")
                        
                    }
                }  

               if(message.content === prefix + " para"){
                if(bdd[message.guild.id]){
                const invite = await message.channel.createInvite({ 
                    maxAge: 0, // 0 = infinite expiration
                    maxUses: 0 // 0 = infinite uses
                }).catch(console.error);
                bdd[message.guild.id]["Invitation"] = invite
                    Savebdd()
                    var embed = new Discord.MessageEmbed()
                    .setColor("#00FF00")
                    .setTitle("Problème régler")
                    .setDescription("Touts les problèmes ont bien été régler");
                    message.channel.send({ embeds: [embed]})  
            } else {
                const error = Client.emojis.cache.find(emoji => emoji.name === "Error404");
    var embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Une autre Erreur")
    .setThumbnail('https://cdn.discordapp.com/attachments/1022159305471971399/1026071743623872583/image_2022-10-02_114713467-removebg-preview.png')
    .setDescription(`${error}` +  " Un autre problème est survenue ! Cela empêche le bot de fonctionner correctement sur votre serveur ! " + `${error}` + "\n\nExécuter la commande `!G erreur` pour y remédier");
    message.channel.send({ embeds: [embed]})
            }
                }

                if(message.content === prefix + " erreur"){
                    if(bdd[message.guild.id]){
                        var embed = new Discord.MessageEmbed()
                        .setColor("#00FF00")
                        .setTitle("Aucun problèmes")
                        .setDescription("Hmmmm il samblerait qu'il y'a aucuns problèmes sur ce serveur ! :partying_face:");
                        message.reply({ embeds: [embed]}) 
} else {
    var base = ("Vérité: Quelle est la chose la plus bizarre que tu aies jamais mangée ? (un conseil : si la personne répond qu’il mange de la pizza à l’ananas, fuyez…")
    var base2 = ("Vérité: Que ferais-tu si tu recevais un chèque d’un million ? ")
    var base3 = ("Vérité: Combien de jours as-tu déjà passé sans te laver ? ")
    var base4 = ("Vérité: Quelle est ta plus grande honte ?  ")
    var base5 = ("Vérité: As-tu déjà triché à un examen ? ")
    var base6 = ("Vérité: De quoi as-tu le plus peur ?")
    var base7 = ("Vérité: Est-ce que tu as déjà menti pour que quelqu’un t’apprécie ? ")
    var base8 = ("Vérité: Quel était ton surnom quand tu étais petit(e) ? ")
    var base9 = ("Vérité: Dans combien de pays as-tu voyagé ? ")
    var base10 = ("Action: Rename toi sur ce serveur en ce que choisit une personnes du groupe")
    var base11 = ("Action: Envoie un MP à une personne et fait lui croire que tu crush sur lui/elle !")
    var base12 = ("Action: Fait un cadeau à une personne de la partie !")
    var base13 = ("Action: Envoie un screen de la dernière conversation en MP que tu a eu !")
    var base14 = ("Action: Fini toutes tes phrases pendant 2 tours par **Poisson** (ça commence maintenant !).")
    var base15 = ("Action: Envoie une photo de ta chambre **maintenant** (si t'a chambre n'est pas ranger une personne de la partie doit te donner un gage !).")
    var base16 = ("Action: Prank quelqu'un de ce serveur !")
    guild_id = message.guild.id
    bdd[guild_id] = {}
    bdd[guild_id]["Nom_du_serveur"] = ""
    bdd[guild_id]["Nom_du_serveur"] = message.guild.name
    bdd[guild_id]["joueur2"] = ""
    bdd[guild_id]["joueur1"] = ""
    bdd[guild_id]["Salon_Logs"] = ""
    bdd[guild_id]["action"] = []
    bdd[guild_id]["tirage_au_sort"] = []
    bdd[guild_id]["Salon_Logs"] = message.channel.id
    bdd[guild_id]["action"].push(base, base14, base2, base3, base10, base4, base5, base16, base6, base7,  base15, base8, base11, base12,base9, base13)
    bdd[guild_id]["ban"] = {}
    bdd[guild_id]["ban"]["ban_id"] = []
    bdd[guild_id]["ban"]["ban_name"] = []
    bdd[guild_id]["logs"] == "on"
    const invite = await message.channel.createInvite({ 
        maxAge: 0, // 0 = infinite expiration
        maxUses: 0 // 0 = infinite uses
    }).catch(console.error);
    bdd[message.guild.id]["Invitation"] = invite
    Savebdd()
    var embed = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setTitle("Problème régler")
    .setDescription("Touts les problèmes ont bien été régler !\n\nLes logs ont été activer et ce salon à été déffinie comme salon des logs(<#" +  bdd[guild_id]["Salon_Logs"] + "> (`/logs + [off]` pour désactiver les logs ou `/setlog + [mention d'un salon]` pour changer le salon des logs !))");
    message.reply({ embeds: [embed]}) 
}                
                    }

if(message.content.startsWith(prefix + " invite")){
    if(bdd["Adminitrateurs"].includes(message.author.id)){
        if(message.content.length < 10){
            message.reply(":x: <@" + message.author.id + "> Merci d'indiquer l'id d'un serveur ! :x:")
            
    }
    if(message.content.length > 10){
        guildid = message.content.slice(10)
        if(bdd[guildid]){
        if(bdd[guildid]["Invitation"]){
            const info = Client.emojis.cache.find(emoji => emoji.name === "Infos");
            message.reply("L'invitation vous à été envoyer en MP !")
            Client.user.fetch(message.author.users, false).then((user) => {
                var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Invitation")
                .setTimestamp()
                .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                .setDescription("Voici l'invitation du serveur: " + bdd[guildid]["Invitation"]["url"] + `\n\n${info} *Vous devez copier coller le lien dans l'ongler "Ajouter un serveur" !* ${info}`);
             message.author.send({ embeds: [embed]});
             
            });
            
        } else {
            message.reply("Aucune invitation disponible pour ce serveur !\n\nSi ce serveur abuse du bot, blacklisté directement le sevreur !")
            
        }
        } else {
            message.reply(":x: Le bot n'est pas sur ce serveur ! :x:")
        }
    }
    } else {
        message.reply(":x: Vous n'êtes pas un modérateur du bot ! :x:")
    }
}

if(message.content.startsWith(prefix + " Maintenance")){
    if(bdd["Adminitrateurs"].includes(message.author.id)){
            if(message.content.length < 15){
                message.reply(":x: Merci d'indiquer une heure ! :x:")
        }
        if(message.content.length > 15){
            heure = message.content.slice(15)
            if(heure > "23h59"){
                message.reply(":x: merci d'indiquer une heure en dessous de 23h59 ! :x:")
            } else {
            const info = Client.emojis.cache.find(emoji => emoji.name === "Infos");
            const attention = Client.emojis.cache.find(emoji => emoji.name === "attention");
            var embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Maintenance")
                .setTimestamp()
                .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                .setDescription(`${info} ** Bot en maintenance jusqu'à ` + heure + `** ${info}\n\n${attention} **Risque de coupure du bot ! ** ${attention}`);
                Client.channels.cache.get("1019610410514661377").send({ embeds: [embed]});
                message.reply("Message envoyer avec succès !")
        }
    }
    } else {
        message.reply(":x: Vous n'êtes pas un modérateur du bot ! :x:")
    }
}

if(message.content === prefix + " Unmaintenance"){
    if(bdd["Adminitrateurs"].includes(message.author.id)){
        const info = Client.emojis.cache.find(emoji => emoji.name === "Infos");
            var embed = new Discord.MessageEmbed()
                .setColor("#00FF00")
                .setTitle("Maintenance")
                .setTimestamp()
                .setFooter({ text: 'GameCreator Bot', iconURL: 'https://cdn.discordapp.com/attachments/1020606196593463349/1025067357594452038/GameCreator_Bot.png' })
                .setDescription(`${info} ** Fin de la maintenance !** ${info}`);
                Client.channels.cache.get("1019610410514661377").send({ embeds: [embed]});
                message.reply("Message envoyer avec succès !")
    } else {
        message.reply(":x: Vous n'êtes pas un modérateur du bot ! :x:")
    }
}


});


function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if(err) message.channel.send("Une erreur est survenue !");
    });
}

Client.login("MTAwMjIzNDkyMTk0NDg5NTU4OQ.Glij4_.JwwztqpVzVscsorxWu7Inr-wX5aeSeBaD--vOs");