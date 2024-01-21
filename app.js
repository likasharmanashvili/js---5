//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.
function proccessNumbers(num1,num2,callBack) {
if (callBack === "+") {
    return num1 + num2 
} else if(callBack === "-") {
    return num1 - num2 
  
}  else if (callBack === "/") {
    return num1 / num2 
}  else if (callBack === "*") {
    return num1 + num2 
} else {
    return "error"
}

}
  

console.log (proccessNumbers(10,3,"+"))
console.log (proccessNumbers(10,3,"-"))
console.log (proccessNumbers(10,2,"*"))
console.log (proccessNumbers(10,2,"/"))









//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

function isValidUser (name , password) {
    if (name === "" && password === "" ){
return "true"
    } else {
        return "fake id "
    }

}   

console.log ( typeof isValidUser ("",""))


//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.



function fibonacci(n) {
    if (n === 1) {
         return 1}
         return fibonacci (n-1) + n;
    }
 
 console.log(fibonacci(3)); 




//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!
// function Timeinterval (timer1,timer2) {
//     return setInterval(() =>{
//         return timer2 ();
//     }, 1000
//     );
// }
// console.log (Timeinterval("time is up"))



//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.


function Age (currentyear,birthyear) {
    const  currentAge = currentyear - birthyear
    return currentAge
} 
console.log(Age(2023,2000))



//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!
const Currentday = new Date().getDay();
console.log(Currentday)
switch (Currentday) {
    case 0:
        console.log ("sunday")
        break;
        case 1:
            console.log ("monday")
            break;
            case 2:
                console.log ("tuesday")
                break;
                case 3:
                    console.log ("Wednesday")
                    break;
                    case 4:
                        console.log ("Thursday")
                        break;
                        case 5:
                            console.log ("Friday")
                            break;
                            case 6:
                                console.log ("Saturday")
                                break;

    default: 
    console.log("enter valid day")
        break;
}