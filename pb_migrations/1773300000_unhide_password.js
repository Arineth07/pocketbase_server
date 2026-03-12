/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708");
  
  const passwdField = collection.fields.getByName("password");
  if (passwdField) {
      passwdField.hidden = false;
  }

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2793131708");
  const passwdField = collection.fields.getByName("password");
  if (passwdField) {
      passwdField.hidden = true;
  }
  return app.save(collection);
});
