import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("yüklendi")

let logger1= new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Mehmet", "Inan", "Hamburg")
let user2 = new User(2, "Akif", "Inan", "Tekirdağ")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


let customer = {id:1, firstName:"Mehmet"}
//prototyping: yani sonradan eklenen şeyi js de eklemek
customer.lastName= "Inan"
console.log(customer.lastName)