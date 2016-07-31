class IconSet {
    constructor(folder) {
        this.folder = folder;
    }

    getLink(sentiment) {
        return 'images/' + this.folder + '/' + sentiment + '.png';
    }
}

icons = {
    default: new IconSet('default'),
    basic: new IconSet('basic'),
    thumbs: new IconSet('thumbs')
}