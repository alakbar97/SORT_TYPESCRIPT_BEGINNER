import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';


const numbersCollection = new NumbersCollection([10, 50, -3, 9]);

const charactersCollection=new CharactersCollection("Alakbar");

const linkedList=new LinkedList();
linkedList.add(245);
linkedList.add(35);
linkedList.add(-64);
linkedList.add(41);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList)