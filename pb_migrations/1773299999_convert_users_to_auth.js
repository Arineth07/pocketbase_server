/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708");
  
  collection.fields.add(new Field({
    "hidden": true,
    "id": "text_password_hash",
    "max": 255,
    "min": 0,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708");
  collection.fields.removeByName("password");
  return app.save(collection);
});
