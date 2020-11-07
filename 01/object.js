const myInfo = {
    name: 'Eraser',
    age: 26, 
    gender: 'Female',
    city: 'Incheon',
    favMovies: ['LOTR', 'Oldboy'],
    favFood: [
        {
            name: 'Kimchi', 
            fatty:false
        },
        {
            name:'Burger', 
            fatty:true
        }
    ]     
};

console.log(myInfo.gender);

myInfo.city = 'Bundang'; // 값 변경 가능.
console.log(myInfo.favFood[0].fatty)