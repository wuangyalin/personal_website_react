mongoimport --host mongo --db personal --type json --collection personalinfo --file ./mongoStartData/personalinfo.json --jsonArray
mongoimport --host mongo --db personal --type json --collection projectlist --file ./mongoStartData/projectlist.json --jsonArray
mongoimport --host mongo --db personal --type json --collection projects --file ./mongoStartData/projects.json --jsonArray
mongoimport --host mongo --db personal --type json --collection sections --file ./mongoStartData/sections.json --jsonArray
mongoimport --host mongo --db personal --type json --collection skills --file ./mongoStartData/skills.json --jsonArray
mongoimport --host mongo --db personal --type json --collection socials --file ./mongoStartData/socials.json --jsonArray
mongoimport --host mongo --db user_auth --type json --collection roles --file ./mongoStartData/roles.json --jsonArray
mongoimport --host mongo --db user_auth --type json --collection users --file ./mongoStartData/users.json --jsonArray