using System;
using System.Collections.Generic;
using System.Text;

namespace OOP_Basic_to_Advance {
    class Person {

        String id;
        String name;
        String phone;
        String address;

        public Person() {
        }

        public Person(string id, string name, string phone, string address) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.address = address;
        }

        public string Id {
            get => id;
            set => id = value;
        }
        public string Name {
            get => name;
            set => name = value;
        }
        public string Phone {
            get => phone;
            set => phone = value;
        }
        public string Address {
            get => address;
            set => address = value;
        }
    }
}
