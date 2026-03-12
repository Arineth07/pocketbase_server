/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3507442359")

  // remove field
  collection.fields.removeById("relation3772770103")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3507442359")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793131708",
    "hidden": false,
    "id": "relation3772770103",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "vet",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
