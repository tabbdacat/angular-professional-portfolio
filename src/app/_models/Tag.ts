export class Tag {
    static readonly TYPESCRIPT = new Tag('TypeScript', '#50808e');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#50808e');
    static readonly HTML = new Tag('HTML', '#fcaa67');
    static readonly CSS = new Tag('CSS', '#f4a698');
    static readonly JQUERY = new Tag('jQuery', '#50808e');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#f4a698');
    static readonly REACT = new Tag('React', '#88d9e6 ');
    static readonly NODEJS = new Tag('NodeJS', '#6d213c');
    static readonly ANGULAR = new Tag('Angular', '#88d9e6');
    static readonly MATERIALUI = new Tag('MaterialUI', '#f4a698');
    static readonly RESTFULAPIS = new Tag('RESTfulAPIs', '#8b8bae');
    static readonly MONGODB = new Tag('MongoDB', '#62bbc1');
    static readonly SQL = new Tag('SQL', '#62bbc1');
    static readonly BULMA = new Tag('Bulma', '#f4a698');
    static readonly HANDLEBARS = new Tag('Handlebars', '#fcaa67');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}