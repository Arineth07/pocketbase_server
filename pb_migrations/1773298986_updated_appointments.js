/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1037645436")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation3479234172")

  // remove field
  collection.fields.removeById("relation3772770103")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1037645436")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "listRule": "owner = @request.auth.id || vet = @request.auth.id",
    "viewRule": "owner = @request.auth.id || vet = @request.auth.id"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793131708",
    "hidden": false,
    "id": "relation3479234172",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "owner",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
