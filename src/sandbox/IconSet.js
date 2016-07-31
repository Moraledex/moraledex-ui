class IconSet {
    constructor(folder, extension = 'png') {
        this.folder = folder;
        this.extension = extension;
    }

    getLink(sentiment) {
        return 'images/' + this.folder + '/' + sentiment + '.' + this.extension;
    }
}

icons = {
    default: new IconSet('default'),
    basic: new IconSet('basic'),
    thumbs: new IconSet('thumbs'),
    eminem: new IconSet('eminem', 'jpg')
}