/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_102036695")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation1593854671")

  // remove field
  collection.fields.removeById("relation1035504790")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_102036695")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "listRule": "sender = @request.auth.id || receiver = @request.auth.id",
    "updateRule": "sender = @request.auth.id",
    "viewRule": "sender = @request.auth.id || receiver = @request.auth.id"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793131708",
    "hidden": false,
    "id": "relation1593854671",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "sender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793131708",
    "hidden": false,
    "id": "relation1035504790",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "receiver",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
