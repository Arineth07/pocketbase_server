/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collections = [
    "chat_messages",
    "lost_pets",
    "pets",
    "users",
    "posts",
    "adoption_pets"
  ];

  for (const name of collections) {
    try {
      const collection = app.findCollectionByNameOrId(name);
      collection.listRule = "";
      collection.viewRule = "";
      app.save(collection);
    } catch (e) {
      console.log("Collection " + name + " not found, skipping.");
    }
  }
}, (app) => {
  // no-op
})
