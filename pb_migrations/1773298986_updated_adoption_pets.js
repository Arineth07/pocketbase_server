/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_465624687")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation1896900359")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_465624687")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": "shelter = @request.auth.id",
    "listRule": "id != \"\"",
    "updateRule": "shelter = @request.auth.id",
    "viewRule": "id != \"\""
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793131708",
    "hidden": false,
    "id": "relation1896900359",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "shelter",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
