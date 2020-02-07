//Definir tipos a una variable
//Definición implicita. Se toma en cuenta el tipo de dato con el que se inicializa
let nombre = 'yojan';

//Definicion explícita
let apellido: string;
apellido = 'pardo';

//alias para tipos de datos con
//Aquí un documento puede ser tan un valor entero como un int
type documento = string | number;

//function types
//representa un typo para estructurar una funcion
type CallBackError = Error | null;
type CallBack = (Error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack): void => {
    if(cb){
        cb(null, {message: 'Ok'});
    }
}

//Decorators
/* 
Son muy usados en Angular y es una declaracion qque tiene TS para poder extender la funcionalidad
de distintos elementos, ya sea una clase, un parametro, una propiedad o una función

En una funcion decorator, el parametro target hacer referencia al objeto que posee el decorador y 
el parametro propertyKey o key hace referencia al elemento que extendemos

hay que configurar TS para que reciba decoraadores 
*/

function log(target, key){
    console.log(`${key} se ha llamado`);
}

class Persona {
    private name: String;

    constructor(name: string){
        this.name = name;
    }

    @log
    sayMyName(){
        console.log(this.name);
    }
}

const yojan: Persona = new Persona('yojan');
yojan.sayMyName(); // 'yojan' // 'sayMyName se ha ejecutado'

//Decorators en clases
function init(target){
    return class extends target{
        nombre: 'yojan';
        apellido: 'pardo';
        
        sayMyName (){
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

@init
class P {
    constructor(){};
    sayMyName(){};
}

const p: P = new P();
console.log(p.sayMyName());

 //Decorators en propiedades
 function logProperty(target, key){
    let _val = this.key;
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
    }
    const setter = (newValue) => {
        console.log(`Set: ${key} => ${newValue}`);
        _val=newValue;
    }

    const objectProperty = {
        get: getter,
        set: setter
    }

    Object.defineProperty(target, key, objectProperty)
 }

 class Mascota {
     @logProperty
     public name: string;

     constructor(name: string){
         this.name = name;
     }
 }

const mich: Mascota = new Mascota('mich');
mich.name = 'Mich'; // Set: name => 'Mich'
const nameFromClass = mich.name; //Get: name => Mich

//Decorator: en parámetros
function logParameter(target, propertyName, index){
    const metadataKey = `log_${propertyName}_parameters`;
    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    } else{
        target[metadataKey] = [index];
    }
}

class Message {
    greet(@logParameter message: string): string{
        return message;
    }
}

const message: Message = new Message;
message.greet('hola');