//Task-1 :Given the previous object data, use the object destructuring to be able to print student first and last name, favourite football club, as well as the city and the country this student is coming from (OBJECT DESTRUCTURING)

const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'fc barcelona',
    hometown: {
      city: 'buenos aires',
      country: 'argentina',
    },
  };

  let {name:{firstName,lastName},isStudent,favoriteFootballTeam,hometown:{city,country}} = data;
  console.log(firstName);
  console.log(lastName)
  console.log(favoriteFootballTeam)
  console.log(city)
  console.log(country)

  //Task-2: 

const [a, b] = [1];
console.log(a * b); // <== ???const [a, b = 1] = [2];
console.log(a * b); // <== ???let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // error

//TASK 3 : Let's create a counter that will print a number in a sequence each second.
let count = 0;
function repeat() {
    console.log(count);
    count += 1;
    setTimeout(repeat, 1000);
}
setTimeout(repeat, 1000);

