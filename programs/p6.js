class Animal
{
	constructor(name,color)
	{
		this.name=name;
		this.color=color;
	}
	speak()
	{
		console.log("grrrrrr");
	}
}
class Tiger extends Animal
{
	constructor(name,age)
	{
		super();
		this.name=name;
		this.age=age;
	}
} 

var c=new Tiger("zyno",4);
c.speak();

console.log(Object.getOwnPropertyDescriptor(Animal,"name"));
console.log(Object.hasOwnProperty(Animal,"name"));