/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708")

  // remove field
  collection.fields.removeById("text_password_hash")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708")

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
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
  }))

  return app.save(collection)
})
