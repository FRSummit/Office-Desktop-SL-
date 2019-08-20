using System;
using System.Collections.Generic;
using System.Text;

namespace HelloWorld {
    class Person {
        String name;
        String id;
        String dob;
        String email;
        String address;

        public Person() {
        }

        public Person(string name, string id, string dob, string email, string address) {
            this.name = name;
            this.id = id;
            this.dob = dob;
            this.email = email;
            this.address = address;
        }

        public string getName {
            get => name;
            set => name = value;
        }
        public string getId {
            get => id;
            set => id = value;
        }
        public string getDob {
            get => dob;
            set => dob = value;
        }
        public string getEmail {
            get => email;
            set => email = value;
        }
        public string getAddress {
            get => address;
            set => address = value;
        }
        public void walk() {
            Console.WriteLine("Person is walking");
        }
        public void eat() {
            Console.WriteLine("Person is eating");
        }
    }
}
