export class News {
    public id;
    constructor(public source: object, public author: string,
                public title: string, public description: string, public url: string,
                public urlToImage: string, public publishedAt: string, public content: string) {

    }
}

