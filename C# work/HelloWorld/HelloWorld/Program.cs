using System;

namespace HelloWorld {
    class Program {
        static void Main(string[] args) {

            Person person1 = new Person();
            person1.getName = "Robin";
            person1.getId = "0123";
            person1.getDob = "10 June, 2019";
            person1.getEmail = "email@email.com";
            person1.getAddress = "Dhaka";

            Person person2 = new Person("Roni", "0125", "11 June, 2019", "email2@email.com", "Dhaka");

            Console.WriteLine(person1.getName);
            Console.WriteLine(person1.getId);
            Console.WriteLine(person1.getDob);
            Console.WriteLine(person1.getEmail);
            Console.WriteLine(person1.getAddress);

            Console.WriteLine(person2.getName);

            person1.walk();
            person1.eat();
        }

    }
}
