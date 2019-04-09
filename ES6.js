class Element
{
    constructor(name,buildYear){
        this.Name = name;
        this.BuildYear = buildYear;
    }
}

class Park extends Element
{
    constructor(name,buildYear,area,numOfTrees)
    {
    super(name,buildYear);
    this.NumOfTrees = numOfTrees;
    this.Area = area;
    }
    TreeDensity()
    {
        const density = Math.round(this.NumOfTrees/this.Area);
        console.log(`${this.Name} has a tree density of ${density} trees per square km..`);
    }
} 

class Street extends Element{

    constructor(name,buildYear,length,size=3)
    {
        super(name,buildYear);
        this.Length = length;
        this.Size = size;
    }
    ClassifyStreet()
    {
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');      

        console.log(`${this.Name}, build in ${this.BuildYear}, is a ${classification.get(this.Size)} street..`);  
    }
}

const allParks = [
    new Park('Green Park',1990,0.19,100),
    new Park('Yellow Park',1978,0.78,200),
    new Park('Blue Park',1989,0.98,90)
]; 

const allStreets = [
    new Street('1st Street',1990,1.1,4),
    new Street('2nd Street',1989,2.3,5),
    new Street('3rd Street',1978,1.2,1)
];

function calc(arr){
    const total = arr.reduce((prev,curr,index) => prev + curr, 0);
    const average = Math.round(total/arr.length);
    return [total,average];
}

function reportParks(parks)
{
  console.log('--------------Parks Report----------------');

  //Calculate Tree Density
  parks.forEach(el => el.TreeDensity());

  //Parks having 100 and more trees
  const filteredParks = parks.filter(el => el.NumOfTrees >= 100).map(el => el.Name);
  console.log(filteredParks);
  //filteredParks.forEach(function () {
    //  console.log(`${this.Name} has 100 or more trees`);
  //});
}

function reportStreets(streets)
{
    console.log('--------------Streets Report----------------');

    //Total and Average length of the streets
    const[totalLength,avgLength] = calc(streets.map(el => el.Length));
    console.log(`Total Length of the Streets : ${totalLength} with an Average Length of ${avgLength} KM`);    

    //Get the Street Classifications
    streets.forEach(el => el.ClassifyStreet())
}

reportParks(allParks);
reportStreets(allStreets);