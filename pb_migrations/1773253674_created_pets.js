/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "select2543235651",
        "maxSelect": 1,
        "name": "pet_type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "dog",
          "cat",
          "bird",
          "rabbit"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4172253263",
        "max": 0,
        "min": 0,
        "name": "breed",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2704281778",
        "max": null,
        "min": null,
        "name": "age",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number130897217",
        "max": null,
        "min": null,
        "name": "weight",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select3343321666",
        "maxSelect": 1,
        "name": "gender",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "male",
          "female"
        ]
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "url2077391994",
        "name": "photo_url",
        "onlyDomains": null,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "url"
      }
    ],
    "id": "pbc_2704641423",
    "indexes": [],
    "listRule": null,
    "name": "pets",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2704641423");

  return app.delete(collection);
})
