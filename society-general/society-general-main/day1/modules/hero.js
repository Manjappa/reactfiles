import Person from "./person.js";

class Hero extends Person{
    // public property
    title = '';
    firstname = '';
    lastname = '';
    static version = 1001;
    // private property
    #power = 0;
    constructor(htitle = "", hfname = "", hlname = "", hpower = 0, hability){
        super(hability);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
        this.#power = hpower;
    }
    // public method
    sayFullName = () => {
        return this.firstname+" "+this.lastname;
    }
    get power(){
        return this.#power;
    }
    set power(npower){
        this.#power = npower;
    } 
    static sayLanguage(){
        return "Hindi";
    }
    #myprivatemethod = () => {
        return "Hero's private method"
    }
};

export default Hero;