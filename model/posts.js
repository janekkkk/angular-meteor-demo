  Posts = new Mongo.Collection("posts");

  Posts.allow({
    insert: function (userId, doc) {
       return userId;

   },
   update: function (userId, doc, fields, modifier) {
    if (userId !== doc.owner)
      return false;

  return true;
},
remove: function (userId, doc) {
    if (userId !== doc.owner)
      return false;

  return true;
}

});
