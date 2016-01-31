

imagens = new FS.Collection('imagens', {
    stores: [new FS.Store.FileSystem("imagens")]
});

imagens.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

imagens.allow({
    insert: function(){
     return true;
    },
    update: function(){
     return true;
    },
    remove: function(){
     return true;
    },
    download: function(){
     return true;
    }
});
