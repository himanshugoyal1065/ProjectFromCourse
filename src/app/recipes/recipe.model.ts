export class Recipe{
    constructor(private name:string,private desc:string,private imagePath:string){
        this.name=name;
        this.desc=desc;
        this.imagePath=imagePath;
    }
}