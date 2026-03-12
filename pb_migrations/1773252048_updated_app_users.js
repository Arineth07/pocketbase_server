/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_HUvxZ0fTXc` ON `users` (`email`)"
    ],
    "name": "users"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_HUvxZ0fTXc` ON `app_users` (`email`)"
    ],
    "name": "app_users"
  }, collection)

  return app.save(collection)
})
