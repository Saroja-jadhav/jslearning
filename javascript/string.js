const name = "saro-ja"
const repoCount =50

// console.log(name + repoCount + "value");
  console.log(`hello my name saroja ${name} and my repo count is $
    {repoCount}`);

    const gameName = new String('saroja')

    console.log(gameName[0]);
    console.log(gameName.__proto__);
   
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(3));
    console.log(gameName.indexOf('o'));

    const newString = gameName.substring(0, 4)
    console.log(newString)

    const anotherString = gameName.slice(-3, 4)
    console.log(anotherString);

    const newStringOne = "  saroja  "
    console.log(newStringOne);
    console.log(newStringOne.trim());

    const url = "https://saroja.com/saroja%20jadhav"
    console.log(url.replace('%20', '-'))

     console.log(url.includes("sweety"))