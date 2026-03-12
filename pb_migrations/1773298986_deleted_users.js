/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": "email != \"\"",
    "deleteRule": "id = @request.auth.id",
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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1579384326",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "hidden": false,
        "id": "email3885137012",
        "name": "email",
        "onlyDomains": [],
        "presentable": false,
        "required": false,
        "system": false,
        "type": "email"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1146066909",
        "max": 0,
        "min": 0,
        "name": "phone",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select1466534506",
        "maxSelect": 1,
        "name": "role",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pet_owner",
          "vet",
          "store_manager",
          "shelter"
        ]
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "url3814923210",
        "name": "profile_photo",
        "onlyDomains": null,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "url"
      },
      {
        "hidden": false,
        "id": "number4107308800",
        "max": null,
        "min": null,
        "name": "location_lat",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number4160147985",
        "max": null,
        "min": null,
        "name": "location_lng",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "date2341372968",
        "max": "",
        "min": "",
        "name": "created_at",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text456024468",
        "max": 255,
        "min": 0,
        "name": "passwd",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_2793131708",
    "indexes": [
      "CREATE UNIQUE INDEX `idx_HUvxZ0fTXc` ON `users` (`email`)"
    ],
    "listRule": "@request.auth.id != \"\"",
    "name": "users",
    "system": false,
    "type": "base",
    "updateRule": "id = @request.auth.id",
    "viewRule": "id = @request.auth.id"
  });

  return app.save(collection);
})
